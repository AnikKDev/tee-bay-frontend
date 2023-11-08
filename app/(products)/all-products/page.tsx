"use client";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import ProductsCard from "../components/ProductsCard";
import { Box, Button, Flex, Grid, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ProductModal from "../components/ProductModal";
import { useQuery, gql } from "@apollo/client";
import CardSkeleton from "../../components/ui/card-skeleton";
import { ProductData } from "../../types/product.types";
import {
  CreateOrder,
  CreateRent,
  GetAllProducts,
  GetProductsByUserMail,
} from "../../gql/products/productQueries";
import { useMutation } from "@apollo/client";
import CustomNotification from "../../components/ui/notification";
type Props = {};

export default function AllProducts({}: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [
    createOrder,
    { loading: orderLoading, error: orderError, data: orderedProduct },
  ] = useMutation(CreateOrder, {
    refetchQueries: [GetProductsByUserMail, "GetProductsByUserMail"],
  });
  const [
    createRent,
    { loading: rentLoading, error: rentError, data: rentProduct },
  ] = useMutation(CreateRent);
  const {
    data: products,
    error: productsError,
    loading: productsLoading,
  } = useQuery(GetAllProducts);
  // creating order
  // handling product purchage
  const handleProductPurchase = (pid: string, email: string) => {
    createOrder({
      variables: {
        productId: pid,
        userEmail: email,
      },
    });
  };
  const handleProductRent = (pid: string, email: string) => {
    // console.log(pid, email);
    createRent({
      variables: {
        productId: pid,
        userEmail: email,
      },
    });
  };

  useEffect(() => {
    if (orderedProduct) {
      toast.success("Product has been bought successfully");
    }
  }, [orderedProduct]);
  useEffect(() => {
    if (rentProduct) {
      toast.success("Product has been rented successfully");
    }
  }, [rentProduct]);

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
            <ProductsCard
              productData={product}
              handleProductPurchase={handleProductPurchase}
              handleProductRent={handleProductRent}
            />
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
