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
          minWidth={{ sm: '80vw', base: '100vw' }}
          justify="flex-end"
          margin={{ md: 'auto', base: 'auto 0 0 0' }}
        >
          <VStack
            background="white"
            borderRadius="md"
            width={{ lg: 500, md: 400, base: '100%' }}
            height={{ xl: 600, lg: 500 }}
          >
            <Flex
              width="100%"
              align="center"
              height={{ md: '100%', base: '85vh' }}
              paddingX={{ sm: '5rem', base: '3rem' }}
              paddingY={{ lg: '8rem', md: '5rem', base: '4rem' }}
            >
              {children}
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </main>
  );
}
