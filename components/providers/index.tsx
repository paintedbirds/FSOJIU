'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useRef } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AuthRedirect } from './auth-redirect';

export function Providers({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) {
  const queryClient = useRef(new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient.current}>
        <CacheProvider>
          <ChakraProvider>
            <AuthRedirect>{children}</AuthRedirect>
          </ChakraProvider>
        </CacheProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
