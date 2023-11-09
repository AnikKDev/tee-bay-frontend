import { TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import React from "react";
import { ProductData } from "../../../types/product.types";

type Props = {
  label: string;
  description: string;
  name: string;
  form: UseFormReturnType<any>;
  classNames?: string;
  type?: string;
};

export default function FormTextInput({
  label,
  description,
  name,
  form,
  classNames,
  type,
}: Props) {
  return (
    <TextInput
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
  );
}
