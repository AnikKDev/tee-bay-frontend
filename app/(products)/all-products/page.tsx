"use client";
import React from "react";
import ProductsCard from "../components/ProductsCard";
import { Box, Button, Flex, Grid, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ProductModal from "../components/ProductModal";
import { useQuery, gql } from "@apollo/client";
import CardSkeleton from "../../components/ui/card-skeleton";
import { ProductData } from "../../types/product.types";
import { GetAllProducts } from "../../gql/products/productQueries";

type Props = {};

export default function AllProducts({}: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  const {
    data: products,
    error: productsError,
    loading: productsLoading,
  } = useQuery(GetAllProducts);
  let displayableContent;
  if (products && !productsLoading && products?.allProducts.length > 0) {
    displayableContent = (
      <Grid my={80} gutter={{ base: 17, xs: "md", md: "xl", xl: 30 }}>
        {products?.allProducts.map((product: ProductData) => (
          <Grid.Col
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={{ base: 12, md: 12, lg: 6 }}
          >
            <ProductsCard />
          </Grid.Col>
        ))}
      </Grid>
    );
  } else if (!products && productsLoading) {
    displayableContent = (
      <Grid my={80} gutter={{ base: 17, xs: "md", md: "xl", xl: 30 }}>
        {Array.from({ length: 6 }, (_, index) => (
          <Grid.Col
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={{ base: 12, md: 12, lg: 6 }}
          >
            <CardSkeleton loading={true} />
          </Grid.Col>
        ))}
      </Grid>
    );
  } else if (products && products?.allProducts.length < 0) {
    <>
      <h3>No Products to show.</h3>
    </>;
  } else {
    <>
      <h3>Error getting products!</h3>
    </>;
  }
  return (
    <Box my={20} px={20}>
      <Flex justify={"space-between"}>
        <Title order={2} ta={"center"}>
          All Products
        </Title>
        <Button onClick={open} className="bg-[#228BE6] hover:bg-[#1C7ED6]">
          Add product
        </Button>
      </Flex>
      {/* contents here */}
      {displayableContent}
      <ProductModal close={close} opened={opened} />
    </Box>
  );
}
