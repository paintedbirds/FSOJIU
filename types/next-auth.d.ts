// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface User {
    token: string;
    model_perms: string[];
    group_names: string[];
  }

  interface Session {
    user: User;
    token: string;
  }
}
