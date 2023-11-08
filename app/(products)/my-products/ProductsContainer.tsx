import { Grid } from "@mantine/core";
import React from "react";
import ProductsCard from "../components/ProductsCard";

type Props = {
  myOrders?: {
    title: string;
    price: string;
    categories: string[];
    description: string;
  }[];
  myRents?: {}[];
  myProducts?: {}[];
};

export default function ProductsContainer({ myOrders, myRents }: Props) {
  return (
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
  );
}
