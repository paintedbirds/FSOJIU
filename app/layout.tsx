import { getServerSession } from 'next-auth';
import { authConfig } from '@/pages/api/auth/[...nextauth]';
import { Providers } from '@/components/providers';

import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);

  return (
    <html lang="es">
      <head />
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
