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
        <Flex
          maxWidth="87vw"
          minWidth={{ sm: '87vw', base: '100vw' }}
          justify="flex-end"
          margin={{md: "auto", base: "auto 0 0 0"}}
        >
          <VStack
            background="white"
            borderRadius="md"
            width={{ md: 500, base: '100%' }}
            height={{xl:600, lg: 500}}
          >
            <Flex width="100%" height="100%" align="center">
              {children}
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </main>
  );
}
