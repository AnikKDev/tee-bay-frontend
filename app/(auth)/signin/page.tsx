import { Flex } from "@mantine/core";
import React from "react";
import SIgninForm from "./components/SigninForm";

type Props = {};

export default function Signin({}: Props) {
  return (
    <Flex gap="xs" justify="center" mih={"100vh"} align="center">
      <SIgninForm />
    </Flex>
  );
}
