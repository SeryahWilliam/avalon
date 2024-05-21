import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", optional: true },
        isSignUp: { label: "Is SignUp", type: "boolean", optional: true },
      },
      async authorize(credentials) {
        await connectToDatabase();

        const { email, password, username, isSignUp } = credentials;

        if (isSignUp) {
          // Registration process
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            throw new Error("User already exists");
          }

          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
            username,
            email,
            password: hashedPassword,
          });

          await newUser.save();
          return {
            id: newUser._id,
            name: newUser.username,
            email: newUser.email,
          };
        } else {
          // Login process
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("No user found with this email");
          }

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            throw new Error("Invalid password");
          }

          return { id: user._id, name: user.username, email: user.email };
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
