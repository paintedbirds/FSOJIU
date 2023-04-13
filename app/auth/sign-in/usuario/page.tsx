'use client';

import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightAddon,
  FormErrorMessage,
  Button,
  useToast,
  Text,
  VStack,
  Link,
  Flex,
  Box,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { DASHBOARD_HOME_PATH } from '@/utils/constants';
import { ArrowBackIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';

interface LoginFormValues {
  username: string;
  password: string;
}

const loginFormSchema = z.object({
  username: z.string().nonempty('Ingrese su correo para continuar'),
  password: z.string().nonempty('Ingrese su contraseña para continuar'),
});

export default function LoginPage() {
  const { handleSubmit, register, formState } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });
  const router = useRouter();

  const toast = useToast();

  const [loginError, setLoginError] = useState('');

  const onSubmit = async ({ username, password }: LoginFormValues) => {
    setLoginError('');

    signIn('credentials', {
      username: username,
      password: password,
      redirect: false,
    }).then((response) => {
      if (response?.status === 401) {
        toast({
          position: 'top',
          title: 'Error de inicio de sesión',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        setLoginError(
          'No se encontró usuario. Verifique sus datos e intente de nuevo'
        );
      }

      if (response?.ok && response.status === 200) {
        toast({
          position: 'top',
          title: '¡Inicio de sesión exitoso!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });

        router.push(DASHBOARD_HOME_PATH);
      }
    });
  };

  return (
    <main>
      <VStack
        width="100%"
        align="flex-start"
        height="100%"
        paddingX="3.5rem"
        justifyContent="space-between"
        gap={6}
      >
        <Link
          href="/auth/sign-in"
          style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.5)' }}
          _focus={{ boxShadow: 'none' }}
        >
          <Flex
            align="center"
            role="group"
            cursor="pointer"
            gap="3"
            color="#000000AB"
            fontSize={16}
            fontWeight={500}
            _hover={{ color: 'black' }}
          >
            <ArrowBackIcon />
            Volver
          </Flex>
        </Link>

        <Box>
          <Text fontSize={20} fontWeight={700} lineHeight="24px">
            Iniciar Sesión
          </Text>
          <Text
            fontSize={16}
            fontWeight={300}
            color="#808080"
            lineHeight="19px"
            marginTop="0.5rem"
          >
            Ingresa con tus creedenciales para continuar adminsitrando y
            promoviendo el estudio de la música en niños y jovenes.
          </Text>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <VStack width="100%" gap={3}>
            <FormControl isInvalid={Boolean(formState.errors.username)}>
              <FormLabel fontWeight={700}>Correo electronico*</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Ingresa tu correo"
                  id="username"
                  {...register('username')}
                />
                <InputRightAddon>
                  <EmailIcon />
                </InputRightAddon>
              </InputGroup>
              <FormErrorMessage>
                Ingrese su correo para continuar
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(formState.errors.password)}>
              <FormLabel fontWeight={700}>Contraseña*</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  id="password"
                  {...register('password')}
                />
                <InputRightAddon>
                  <LockIcon />
                </InputRightAddon>
              </InputGroup>
              <FormErrorMessage>
                Ingrese su contraseña para continuar
              </FormErrorMessage>
            </FormControl>

            {loginError ? (
              <Text as="div" color="#FA3E32">
                {loginError}
              </Text>
            ) : null}
          </VStack>
          <Button
            colorScheme="blue"
            fontSize={16}
            size="lg"
            width="full"
            type="submit"
            marginTop="3rem"
          >
            Iniciar sesión
          </Button>
        </form>
      </VStack>
    </main>
  );
}
