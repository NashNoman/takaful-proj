"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { SignupInputs, SignupSchema } from "@/lib/zod/signup-schema";

export const register = async (data: SignupInputs) => {
  const validationResult = SignupSchema.safeParse(data);

  if (!validationResult.success) {
    return { error: validationResult.error };
  }

  // await db.insert(users).values({
  //   ...data,

  // })
};
