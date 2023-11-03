import { MultiSelect } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import React from "react";

type Props = {
  label: string;
  data: string[];
  name: string;
  description: string;
  form: UseFormReturnType<any>;
};

export default function FormMultiSelect({
  description,
  label,
  data,
  name,
  form,
}: Props) {
  return (
    <MultiSelect
      size="md"
      label={label}
      description={description}
      placeholder={label}
      data={data}
      name={name}
      {...form.getInputProps(name)}
    />
  );
}
