"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { SignupInputs, SignupSchema } from "@/lib/zod/signup-schema";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { initAdmin } from "@/lib/firebase/firebaseAdmin";

export const register = async (data: SignupInputs) => {
  try {
    const validationResult = SignupSchema.safeParse(data);

    if (!validationResult.success) {
      return { error: validationResult.error.errors };
    }

    const existingUser = await db.query.users
      .findFirst({
        where: or(
          eq(users.email, data.email),
          eq(users.phoneNumber, data.phoneNumber),
        ),
      })
      .execute();

    if (existingUser) {
      return { error: "User already exists" };
    }

    const {
      products,
      city,
      street,
      gender,
      dateOfBirth,
      password,
      confirmPassword,
      ...res
    } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db
      .insert(users)
      .values({
        ...res,
        password: hashedPassword,
        dateOfBirth: new Date(dateOfBirth),
        address: {
          city,
          street,
        },
        gender: gender === "Male",
      })
      .returning({ id: users.id });
  } catch (error) {
    return { error };
  }
};

export const getFirebaseToken = async () => {
  const session = await getServerSession();

  if (!session || !session.user) {
    return { error: "User not found", status: 404 };
  }

  const firebaseAdmin = await initAdmin();

  try {
    const token = await firebaseAdmin
      .auth()
      .createCustomToken(session.user.id, {
        role: session.user.role,
      });
    return { token };
  } catch (error) {
    return { error: "Something went wrong, try again later...", status: 500 };
  }
};
