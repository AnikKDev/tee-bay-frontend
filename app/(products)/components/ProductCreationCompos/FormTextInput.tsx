import { TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import React from "react";
import { ProductData } from "../../../types/product.types";

type Props = {
  label: string;
  description: string;
  name: string;
  form: UseFormReturnType<any>;
};

export default function FormTextInput({
  label,
  description,
  name,
  form,
}: Props) {
  return (
    <TextInput
      name={name}
      size="md"
      radius="md"
      label={label}
      withAsterisk
      description={description}
      placeholder={label}
      {...form.getInputProps(name)}
    />
  );
}
