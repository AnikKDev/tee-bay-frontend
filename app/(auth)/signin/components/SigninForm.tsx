"use client";
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
import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SigninUser } from "../../../gql/users/usersQueries";
import FormTextInput from "../../../(products)/components/ProductCreationCompos/FormTextInput";
import { isEmail, useForm } from "@mantine/form";
import { InputPassword } from "../../../components/ui/form-input";
import { useRouter } from "next/navigation";
import CustomAlert from "../../../components/ui/alert";
type Props = {};

export default function SIgninForm({}: Props) {
  const router = useRouter();
  const form = useForm<{ email: string; password: string }>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Enter a valid email address"),
      password: (value) => (value.length <= 0 ? "Enter your password." : null),
    },
  });
  const [signIn, { loading: signinLoading, error: signinError, data }] =
    useMutation(SigninUser);
  // signin

  const handleUserSignin = (values: { email: string; password: string }) => {
    console.log(values);
    const { email, password } = values;
    signIn({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("sazim_user_email", data.signIn.email);
      router.push("/all-products");
    }
  }, [data]);
  return (
    <Box w={{ xs: "90%", sm: "90%", md: "40%" }} mx={"auto"}>
      <Title my={9} ta={"center"} order={2}>
        Signin
      </Title>
      <form onSubmit={form.onSubmit(handleUserSignin)}>
        <Fieldset legend="Signin info" variant="filled">
          <FormTextInput
            classNames="w-full"
            name="email"
            label="Email"
            type="email"
            description=""
            key={"email"}
            form={form}
          />
          <InputPassword
            name="password"
            label="Password"
            description=""
            form={form}
          />
          {signinError && (
            <CustomAlert text="Something went wrong while sigining in the user. Please try again." />
          )}
          <Button
            type="submit"
            disabled={signinLoading}
            className="bg-[#228BE6] hover:bg-[#1C7ED6] w-full mt-10"
          >
            Singin
          </Button>
          <Text size="md" mt={9}>
            Don&apos;t have an account?{" "}
            <Link href={"/sign-up"} className="font-semibold underline">
              Sign up
            </Link>
          </Text>
        </Fieldset>
      </form>
    </Box>
  );
}
