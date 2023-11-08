"use client";
import { Grid } from "@mantine/core";
import React, { useEffect } from "react";
import ProductsCard from "../components/ProductsCard";
import { ProductQueryType } from "../../types/product.types";
type Props = {
  myOrders?: ProductQueryType[];
  myRents?: ProductQueryType[];
  myProducts?: ProductQueryType[];
};

export default function ProductsContainer({
  myOrders,
  myRents,
  myProducts,
}: Props) {
  return (
    <Grid my={80} gutter={{ base: 17, xs: "md", md: "xl", xl: 30 }}>
      {/* ordered products of user */}
      {myOrders &&
        myOrders?.length > 0 &&
        myOrders?.map((productData: ProductQueryType) => (
          <Grid.Col
            key={productData.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={{ base: 12, md: 12, lg: 6 }}
          >
            <ProductsCard productData={productData} />
          </Grid.Col>
        ))}

      {/* rented products of user */}
      {myRents &&
        myRents?.length > 0 &&
        myRents?.map((productData: ProductQueryType) => (
          <Grid.Col
            key={productData.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={{ base: 12, md: 12, lg: 6 }}
          >
            <ProductsCard productData={productData} />
          </Grid.Col>
        ))}
      {/* for products added by the user */}
      {myProducts &&
        myProducts?.length > 0 &&
        myProducts?.map((productData: ProductQueryType) => (
          <Grid.Col
            key={productData.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={{ base: 12, md: 12, lg: 6 }}
          >
            <ProductsCard productData={productData} />
          </Grid.Col>
        ))}
    </Grid>
  );
}
