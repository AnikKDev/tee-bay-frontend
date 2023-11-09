"use client";
import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Box, Button, Flex, Grid, Tabs, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useQuery, gql } from "@apollo/client";
import { GetProductsByUserMail } from "../../gql/products/productQueries";
import ProductsContainer from "./ProductsContainer";
import CardSkeleton from "../../components/ui/card-skeleton";
import { ProductQueryType } from "../../types/product.types";
import ProductModal from "../all-products/components/ProductModal";

type OrderTabContextType = {
  selectedTab?: string;
  setSelectedTab?: Dispatch<SetStateAction<string>>;
};

export const ORDER_TAB = createContext<OrderTabContextType | null>(null);

export const SELECTED_PRODUCT = createContext<{
  selectedProduct: ProductQueryType;
  setSelectedProduct: Dispatch<SetStateAction<ProductQueryType>>;
}>({
  selectedProduct: {
    description: "",
    categories: [""],
    id: "",
    price: "",
    rentalAmount: "",
    rentalPeriod: "",
    title: "",
  },
  setSelectedProduct: () => {},
});
type Props = {};
export default function MyProducts({}: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductQueryType>({
    description: "",
    categories: [""],
    id: "",
    price: "",
    rentalAmount: "",
    rentalPeriod: "",
    title: "",
  });
  const tabsArr = [
    { title: "Ordered Products", value: "ordered_products" },
    { title: "Rented Products", value: "rented_products" },
    { title: "My Products", value: "my_products" },
  ];
  const [selectedTab, setSelectedTab] = useState<string>("Ordered Products");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  // query for user specific products
  useEffect(() => {
    // Access localStorage after the component has mounted to ensure it's on the client-side
    const email = localStorage.getItem("sazim_user_email");
    if (email) {
      setUserEmail(email);
    }
  }, []);
  const {
    data: products,
    error: productsError,
    loading: productsLoading,
  } = useQuery(GetProductsByUserMail, {
    variables: {
      email: userEmail,
    },
  });
  let displayableContent;
  /* if (products) {
    console.log(products?.userByEmail?.orders);
  } */
  if (productsLoading) {
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
  } else if (!productsLoading && !productsError) {
    if (selectedTab === "Ordered Products") {
      displayableContent = (
        <ProductsContainer myOrders={products?.userByEmail?.orders} />
      );
    } else if (selectedTab === "Rented Products") {
      displayableContent = (
        <ProductsContainer myRents={products?.userByEmail?.rents} />
      );
    } else {
      displayableContent = (
        <SELECTED_PRODUCT.Provider
          value={{
            selectedProduct,
            setSelectedProduct,
          }}
        >
          <ORDER_TAB.Provider value={{ selectedTab }}>
            <ProductsContainer myProducts={products?.userByEmail?.orders} />
          </ORDER_TAB.Provider>
        </SELECTED_PRODUCT.Provider>
      );
    }
  }
  return (
    <Box my={20} px={20}>
      <Flex justify={"space-between"}>
        <Title order={2} ta={"center"}>
          {selectedTab}
        </Title>
        <Button onClick={open} className="bg-[#228BE6] hover:bg-[#1C7ED6]">
          Add product
        </Button>
      </Flex>
      <div className="mt-12">
        {/* tab here */}
        <Tabs defaultValue={tabsArr[0].value}>
          <Tabs.List>
            {tabsArr.map((tab) => (
              <Tabs.Tab
                onClick={() => setSelectedTab(tab.title)}
                key={tab.value}
                value={tab.value}
              >
                {tab.title}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
        {/* items here */}
        {/* products container here */}
        {displayableContent}
      </div>
      <ProductModal close={close} opened={opened} />
    </Box>
  );
}
