import {
  Box,
  Button,
  Fieldset,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SIgninForm({}: Props) {
  return (
    <Box w={{ xs: "90%", sm: "90%", md: "40%" }} mx={"auto"}>
      <Title my={9} ta={"center"} order={2}>
        Signin
      </Title>
      <Fieldset legend="Signin info" variant="filled">
        <TextInput w={"100%"} label="Email" placeholder="example@example.com" />
        <PasswordInput label="Password" placeholder="Password" />

        <Button className="bg-[#228BE6] hover:bg-[#1C7ED6] w-full mt-10">
          Singin
        </Button>
        <Text size="md" mt={9}>
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"} className="font-semibold underline">
            Sign up
          </Link>
        </Text>
      </Fieldset>
    </Box>
  );
}
