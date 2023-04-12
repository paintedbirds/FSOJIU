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
        <Flex maxWidth="87vw" width="70vw" justify="flex-end" marginY="auto">
          <VStack
            background="white"
            borderRadius="md"
            paddingX="5rem"
            paddingY="8rem"
            width={500}
            height={600}
          >
            {children}
          </VStack>
        </Flex>
      </Container>
    </main>
  );
}
