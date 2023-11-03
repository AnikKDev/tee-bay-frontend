import { Alert } from "@mantine/core";
import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
type Props = {
  text: string;
};

export default function CustomAlert({ text }: Props) {
  console.log("came here");
  return (
    <Alert
      variant="light"
      color="red"
      title="Alert title"
      icon={<BiSolidErrorCircle />}
    >
      {text}
    </Alert>
  );
}
