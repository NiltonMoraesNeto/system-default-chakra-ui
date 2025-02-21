import {
  Box,
  Button,
  ClientOnly,
  Heading,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ColorModeToggle } from "./components/color-mode-toggle";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/login");
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <Image
          alt="chakra logo"
          src="/static/logo.svg"
          width="80"
          height="80"
        />
        <Heading size="2xl" letterSpacing="tight">
          Welcome to Chakra UI v3 + Next.js (App)
        </Heading>
        <Button
          colorPalette="blue"
          width="auto"
          fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
        >
          Click me
        </Button>
        <span className="text-blue-300 bg-green-500 mt-10">OPA</span>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
    </Box>
  );
}
