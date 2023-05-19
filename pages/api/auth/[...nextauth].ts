import { NextAuthOptions } from 'next-auth';
import { compare } from 'bcryptjs';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase, disconnectFromDatabase } from '../../../lib/db';
import User from '../../../models/userSchema';
import { IUser } from '../../../types';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          await connectToDatabase();

          const user = await User.findOne({
            email: credentials?.email,
          }).select('+password');

          if (!user) {
            throw new Error('Invalid credentials');
          }

          const isPasswordCorrect = await compare(
            credentials!.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error('Invalid credentials');
          }

          user.password = undefined;
          user.__v = undefined;

          return user;
        } catch (error) {
          const errorMessage =
            typeof error === 'string' ? error : String(error);
          throw new Error(errorMessage);
        } finally {
          await disconnectFromDatabase();
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user as IUser;

      session.user = user;
      return session;
    },
  },
};

export default NextAuth(options);
