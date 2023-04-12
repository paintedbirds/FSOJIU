'use client';

import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import LogoFSOJIU from 'assets/fsojiu-logo.svg';

export default function LoginPage() {
  const router = useRouter();

  const onLoginUser = () => {
    router.push('/auth/sign-in/usuario');
  };

  return (
    <main>
      <VStack gap={5}>
        <VStack justify="center" textAlign="center" gap="5">
          <Image src={LogoFSOJIU} alt="Logo FSOJIU" />
          <Box>
            <Text fontSize={20} fontWeight={700} lineHeight="24px">
              Bienvenido al Sistema de FSOJIU
            </Text>
            <Text
              fontSize={16}
              fontWeight={300}
              color="#808080"
              lineHeight="19px"
              marginTop="0.5rem"
            >
              Accede a tus funciones de administración de personal, control de
              inventario y seguimiento académico de alumnos.
            </Text>
          </Box>
        </VStack>
        <VStack width="100%" justify="flex-start" gap="3">
          <Button
            colorScheme="blue"
            fontSize={16}
            size="lg"
            width="full"
            onClick={onLoginUser}
          >
            Entrar como usuario
          </Button>
          <Button
            colorScheme="blue"
            size="lg"
            width="full"
            variant="outline"
            fontSize={16}
          >
            Entrar como estudiante
          </Button>
        </VStack>
      </VStack>
    </main>
  );
}
