import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { eq, or } from "drizzle-orm";
import { users } from "@/db/schema";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phoneOrEmail: { label: "Phone Number or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (
          !credentials ||
          !credentials.phoneOrEmail ||
          !credentials.password
        ) {
          return null;
        }

        const { phoneOrEmail, password } = credentials;

        try {
          const user = await db.query.users
            .findFirst({
              where: or(
                eq(users.email, phoneOrEmail),
                eq(users.phoneNumber, phoneOrEmail),
              ),
            })
            .execute();

          if (!user) {
            return null;
          }

          const isValid = await bcrypt.compare(password, user.password);

          if (!isValid) return null;

          return { user, id: user.id.toString() };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};
