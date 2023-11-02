import { Box, Button, Fieldset, Flex, TextInput, Title } from "@mantine/core";
import React from "react";

type Props = {};

export default function SIgnupForm({}: Props) {
  return (
    <Box w={{ xs: "90%", sm: "90%", md: "40%" }} mx={"auto"}>
      <Title my={9} ta={"center"} order={2}>
        Signup
      </Title>
      <Fieldset legend="Personal information" variant="filled">
        <Flex justify={"space-between"} my={9} gap={8} align={"center"}>
          <TextInput
            w={"100%"}
            label="First Name"
            placeholder="Your first name"
          />
          <TextInput
            w={"100%"}
            label="Last Name"
            placeholder="Your last name"
          />
        </Flex>

        <TextInput my={9} label="Address" placeholder="Address" />
        <Flex justify={"space-between"} my={9} gap={8} align={"center"}>
          <TextInput
            w={"100%"}
            label="Email"
            placeholder="example@example.com"
          />
          <TextInput
            w={"100%"}
            label="Phone Number"
            placeholder="Phone Number"
          />
        </Flex>
        <Box my={9}>
          <TextInput label="Password" placeholder="Password" />
          <TextInput
            my={9}
            label="Confirm Password"
            placeholder="Confirm password"
          />
        </Box>
        <Button mt={20} fullWidth>
          Signup
        </Button>
      </Fieldset>
    </Box>
  );
}
