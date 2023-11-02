"use client";
import React from "react";
import ProductsCard from "../components/ProductsCard";
import { Box, Grid, Title } from "@mantine/core";

type Props = {};

export default function MyProducts({}: Props) {
  return (
    <Box my={20}>
      <Title order={2} ta={"center"}>
        My Orders
      </Title>
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
    </Box>
  );
}
