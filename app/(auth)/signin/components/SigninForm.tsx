import {
  Box,
  Button,
  Fieldset,
  Flex,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
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

        <Button mt={20} fullWidth>
          Singin
        </Button>
      </Fieldset>
    </Box>
  );
}