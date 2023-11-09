"use client";
import { AppShell, Box, Button, Group } from "@mantine/core";
import Link from "next/link";
const data = [
  { label: "All Products", navigateTo: "all-products" },
  { label: "Ordered Products", navigateTo: "my-products" },
  { label: "Logout/Signin", navigateTo: "/signin" },
];
export default function HomePage() {
  return (
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
        <Box>Homepage</Box>
      </AppShell.Main>
    </AppShell>
  );
}
