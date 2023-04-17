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
  Text,
  VStack,
  Link,
  Flex,
  Box,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';

import { IdentificationIcon } from '@/assets/identification-icon';

export default function LoginPage() {
  const { handleSubmit, register, formState } = useForm();

  const [loginError, setLoginError] = useState('');

  const onSubmit = () => {
    setLoginError('');
    // TODO: add logic
  };

  return (
    <main>
      <VStack justify="space-between" align="flex-start" gap={4}>
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
            Entrar como estudiante
          </Text>
          <Text
            fontSize={16}
            fontWeight={300}
            color="#808080"
            lineHeight="19px"
            marginTop="0.5rem"
          >
            Ingrese con sus credenciales para continuar como estudiante y seguir
            avanzando en su desarrollo juntos.
          </Text>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <VStack width="100%">
            <FormControl isInvalid={Boolean(formState.errors.ci)}>
              <FormLabel fontWeight={700}>C.I*</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Ingresa su cédula de identidad"
                  id="ci"
                  {...register('ci')}
                />
                <InputRightAddon>
                  <IdentificationIcon />
                </InputRightAddon>
              </InputGroup>
              <FormErrorMessage>
                Ingrese su cédula de identidad para continuar
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
