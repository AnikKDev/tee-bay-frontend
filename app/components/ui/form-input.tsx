import { PasswordInput, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import React from "react";
type Props = {
  label: string;
  description: string;
  name: string;
  form: UseFormReturnType<any>;
  classNames?: string;
  type?: string;
};
export const InputPassword = ({
  label,
  description,
  name,
  form,
  classNames,
  type,
}: Props) => {
  return (
    <PasswordInput
      type={type ? type : "text"}
      className={classNames}
      name={name}
      size="md"
      radius="md"
      label={label}
      withAsterisk
      description={description}
      placeholder={label}
      {...form.getInputProps(name)}
    />

    /*  <PasswordInput
      label="Confirm Password"
      placeholder="Confirm password"
      my={9}
    /> */
  );
};
