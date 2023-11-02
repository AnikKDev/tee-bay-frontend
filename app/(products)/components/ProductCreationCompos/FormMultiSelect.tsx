import { MultiSelect } from "@mantine/core";
import React from "react";

type Props = {
  label: string;
  data: string[];
  name: string;
  description: string;
};

export default function FormMultiSelect({
  description,
  label,
  data,
  name,
}: Props) {
  return (
    <MultiSelect
      size="md"
      label={label}
      description={description}
      placeholder={label}
      data={data}
      name={name}
    />
  );
}
