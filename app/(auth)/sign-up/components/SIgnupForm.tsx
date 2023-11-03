"use client";
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
import FormTextInput from "../../../(products)/components/ProductCreationCompos/FormTextInput";
import { isEmail, matchesField, useForm } from "@mantine/form";
import { UserData } from "../../../types/user.types";
import { InputPassword } from "../../../components/ui/form-input";

type Props = {};

export default function SIgnupForm({}: Props) {
  const form = useForm<UserData>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      address: "",
    },
    validate: {
      first_name: (value) =>
        value.length <= 0 ? "Enter your first name." : null,
      last_name: (value) =>
        value.length <= 0 ? "Enter your last name." : null,
      email: isEmail("Enter a valid email address"),
      address: (value) =>
        value.length <= 0 ? "Please provide a valid address." : null,
      phone_number: (value) =>
        value.length <= 0 ? "Enter your phone number." : null,
      password: (value) => (value.length <= 0 ? "Enter your password." : null),
      confirm_password: matchesField("password", "Password does not match"),
      /*  confirm_password: (value) =>
        value.length <= 0 ? "Please confirm your password." : null, */
    },
  });
  // user registration
  const handleUserRegistration = (values: UserData) => {
    console.log(values);
  };
  return (
    <Box w={{ xs: "90%", sm: "90%", md: "40%" }} mx={"auto"}>
      <Title my={9} ta={"center"} order={2}>
        Signup
      </Title>
      <form onSubmit={form.onSubmit(handleUserRegistration)}>
        <Fieldset legend="Personal information" variant="filled">
          <Flex justify={"space-between"} my={9} gap={8} align={"start"}>
            <FormTextInput
              classNames="w-full"
              name="first_name"
              label="First Name"
              description=""
              key={"first_name"}
              form={form}
            />
            <FormTextInput
              classNames="w-full"
              name="last_name"
              label="Last Name"
              description=""
              key={"last_name"}
              form={form}
            />
          </Flex>
          <FormTextInput
            name="address"
            label="Address"
            description=""
            key={"address"}
            form={form}
          />
          {/* <TextInput my={9} label="Address" placeholder="Address" /> */}
          <Flex justify={"space-between"} my={9} gap={8} align={"start"}>
            <FormTextInput
              classNames="w-full"
              name="email"
              label="Email"
              type="email"
              description=""
              key={"email"}
              form={form}
            />
            <FormTextInput
              classNames="w-full"
              name="phone_number"
              label="Phone Number"
              type="tel"
              description=""
              key={"phone_number"}
              form={form}
            />
          </Flex>
          <Box my={9}>
            <InputPassword
              name="password"
              label="Password"
              description=""
              form={form}
            />
            <InputPassword
              name="confirm_password"
              label="Confirm Password"
              description=""
              form={form}
            />
          </Box>
          <Button
            type="submit"
            className="bg-[#228BE6] hover:bg-[#1C7ED6] w-full mt-10"
            mt={20}
            fullWidth
          >
            Signup
          </Button>
        </Fieldset>
      </form>
    </Box>
  );
}
