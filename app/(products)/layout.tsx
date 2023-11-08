"use client";
import React from "react";
import { AppShell, Box, Button, Group, NavLink } from "@mantine/core";
import Link from "next/link";

type Props = { children: React.ReactNode };
const data = [
  { label: "All Products", navigateTo: "all-products" },
  { label: "Ordered Products", navigateTo: "my-products" },
  { label: "Logout", navigateTo: "/signin" },
];
export default function AuthLayout({ children }: Props) {
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          //   collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header
          display={"flex"}
          px={20}
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Group justify="end">
            {data.map((item, index) => (
              <Link key={item.label} href={item.navigateTo}>
                <Button className="hover:bg-gray-100" variant="subtle">
                  {item.label}
                </Button>
              </Link>
            ))}
          </Group>
        </AppShell.Header>
        <AppShell.Main px={2}>
          <Box>{children}</Box>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
