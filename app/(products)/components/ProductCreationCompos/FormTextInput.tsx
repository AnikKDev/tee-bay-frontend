import { TextInput } from "@mantine/core";
import React from "react";

type Props = {
  label: string;
  description: string;
  name: string;
};

export default function FormTextInput({ label, description, name }: Props) {
  return (
    <TextInput
      name={name}
      size="md"
      radius="md"
      label={label}
      withAsterisk
      description={description}
      placeholder={label}
    />
  );
}
