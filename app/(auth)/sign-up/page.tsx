import { Box, Flex } from "@mantine/core";
import React from "react";
import SIgnupForm from "./components/SIgnupForm";

type Props = {};

export default function Signup({}: Props) {
  return (
    <Flex gap="xs" justify="center" mih={"100vh"} align="center">
      <SIgnupForm />
    </Flex>
  );
}
