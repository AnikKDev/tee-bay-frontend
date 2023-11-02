import React from "react";
import { useState } from "react";
import { Box, NavLink } from "@mantine/core";
const data = [{ label: "My Products" }, { label: "Logout" }];

export default function NavLinks({}) {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => setActive(index)}
    />
  ));
  return <Box>{items}</Box>;
}
