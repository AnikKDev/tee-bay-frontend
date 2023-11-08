import { Notification } from "@mantine/core";
import React from "react";

type Props = {
  title: string;
  info: string;
};

export default function CustomNotification({ title, info }: Props) {
  return (
    <Notification withCloseButton={false} color="teal" title={title} mt="md">
      {info}
    </Notification>
  );
}
