'use client';

import { ReactNode } from 'react';
import { Box, Container, Flex, VStack } from '@chakra-ui/react';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <main>
      <Container maxWidth="100vw" height="100vh" centerContent>
        <Box
          backgroundImage="url('/login-background.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height="100vh"
          position="absolute"
          width="100%"
          zIndex="-1"
        />
        <Flex maxWidth="87vw" width="90vw" justify="flex-end" marginY="auto">
          <VStack background="white" borderRadius="md" width={500} height={600}>
            <Flex width="100%" height="100%" align="center">{children}</Flex>
          </VStack>
        </Flex>
      </Container>
    </main>
  );
}
