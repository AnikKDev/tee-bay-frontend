import { Textarea } from "@mantine/core";
import React from "react";

type Props = {
  name: string;
  label: string;
  description: string;
};

export default function FormTextArea({ name, label, description }: Props) {
  return (
    <Textarea
      size="md"
      name={name}
      label={label}
      description={description}
      placeholder={label}
    />
  );
}
