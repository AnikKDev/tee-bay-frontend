import { Textarea } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import React from "react";

type Props = {
  name: string;
  label: string;
  description: string;
  form: UseFormReturnType<any>;
};

export default function FormTextArea({
  name,
  label,
  description,
  form,
}: Props) {
  return (
    <Textarea
      size="md"
      name={name}
      label={label}
      description={description}
      placeholder={label}
      {...form.getInputProps(name)}
    />
  );
}
