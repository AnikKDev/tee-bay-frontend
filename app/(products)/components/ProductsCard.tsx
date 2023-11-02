import { Box } from "@mantine/core";
import React from "react";

type Props = {};

export default function ProductsCard({}: Props) {
  return (
    <Box
      mih={300}
      w={{ xs: 600, md: 400, lg: 600 }}
      style={{ border: "2 px solid gray", borderRadius: 5 }}
    >
      hello
    </Box>
  );
}
