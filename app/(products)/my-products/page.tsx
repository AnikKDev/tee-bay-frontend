"use client";
import React from "react";
import ProductsCard from "../components/ProductsCard";
import { Box, Button, Flex, Grid, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ProductModal from "../components/ProductModal";

type Props = {};

export default function MyProducts({}: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box my={20} px={20}>
      <Flex justify={"space-between"}>
        <Title order={2} ta={"center"}>
          My Orders
        </Title>
        <Button onClick={open} className="bg-[#228BE6] hover:bg-[#1C7ED6]">
          Add product
        </Button>
      </Flex>
      <Grid my={80} gutter={{ base: 17, xs: "md", md: "xl", xl: 30 }}>
        <Grid.Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={{ base: 12, md: 12, lg: 6 }}
        >
          <ProductsCard />
        </Grid.Col>
        <Grid.Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={{ base: 12, md: 12, lg: 6 }}
        >
          <ProductsCard />
        </Grid.Col>
        <Grid.Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={{ base: 12, md: 12, lg: 6 }}
        >
          <ProductsCard />
        </Grid.Col>
        <Grid.Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={{ base: 12, md: 12, lg: 6 }}
        >
          <ProductsCard />
        </Grid.Col>
      </Grid>
      <ProductModal close={close} opened={opened} />
    </Box>
  );
}
