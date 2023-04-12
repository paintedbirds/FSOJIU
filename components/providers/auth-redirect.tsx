'use client';

import { ReactNode, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AUTH_SIGN_IN_PATH } from '@/utils/constants';

export function AuthRedirect({ children }: { children: ReactNode }) {
  const session = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (session.status === 'unauthenticated') {
        push(AUTH_SIGN_IN_PATH);
      }
    }
  }, [session, push]);

  return <>{children}</>;
}
