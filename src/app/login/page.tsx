"use client";

import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ColorModeToggle } from "../components/color-mode-toggle";

// Defina o esquema de validação com Zod
const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z.string().nonempty("Password is required"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Box maxW="md" w="full" boxShadow="lg" rounded="lg" p={8}>
        <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} textAlign="center">
            Login to Your Account
          </Heading>

          <Box>
            <Text mb="2">Email</Text>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <Text color="red.500" mt="1">
                {errors.email.message}
              </Text>
            )}
          </Box>

          <Box>
            <Text mb="2">Password</Text>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <Text color="red.500" mt="1">
                {errors.password.message}
              </Text>
            )}
          </Box>

          <Button
            colorScheme="blue"
            type="submit"
            size="lg"
            fontSize={{ base: "md", md: "lg" }}
          >
            Login
          </Button>
        </Stack>
      </Box>
      <Box pos="absolute" top="4" right="4">
        <ColorModeToggle />
      </Box>
    </Box>
  );
}
