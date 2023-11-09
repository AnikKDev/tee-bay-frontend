"use client";
import { Badge, Box, Button, Flex, Modal, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import EditProductModal from "./EditProductModal";
import { ORDER_TAB, SELECTED_PRODUCT } from "../../my-products/page";
type Props = {
  handleProductPurchase?: (pid: string, email: string) => void;
  handleProductRent?: (pid: string, email: string) => void;
  productData: any;
};

export default function ProductsCard({
  handleProductPurchase,
  handleProductRent,
  productData,
}: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const orderTab = useContext(ORDER_TAB);
  const { setSelectedProduct } = useContext(SELECTED_PRODUCT);
  return (
    <Box
      // onClick={open}
      mih={250}
      w={{ xs: 600, md: 400, lg: 600 }}
      // style={{ border: "2px solid gray", borderRadius: 5, color: "#363636" }}
      p={10}
      className="rounded-md transition-all hover:shadow-lg hover:border-gray-100 border"
    >
      <Flex justify={"space-between"}>
        <Title order={2}>
          {productData?.product?.title || productData?.title}
        </Title>
        {orderTab?.selectedTab === "My Products" && (
          <div>
            <AiFillDelete
              className="cursor-pointer"
              style={{ fontSize: "2rem" }}
            />
            <HiPencil
              className="cursor-pointer"
              onClick={() => {
                open();
                setSelectedProduct(productData.product);
              }}
              style={{ fontSize: "2rem", margin: "6px 0" }}
            />
          </div>
        )}
      </Flex>
      <Flex>
        {(productData?.product?.categories || productData?.categories)?.map(
          (cat: any) => (
            <Badge key={cat} color="gray" mx={2} style={{ cursor: "pointer" }}>
              {cat}
            </Badge>
          )
        )}
      </Flex>
      <Title order={5}>
        Price: ${productData?.product?.price || productData?.price}{" "}
        {productData?.product?.rentalAmount ||
          (productData?.rentalAmount &&
            `Rent: $${
              productData?.product?.rentalAmount || productData?.rentalAmount
            } ${
              productData?.product?.rentalPeriod || productData?.rentalPeriod
            }`)}
      </Title>
      <Box>
        <Text my={2} fz="md" lh="md">
          {productData?.product?.description || productData?.description}
        </Text>
      </Box>
      <Title my={12} order={6}>
        Date Posted: 12-12-2023
      </Title>
      {orderTab?.selectedTab !== "Ordered Products" &&
        orderTab?.selectedTab !== "Rented Products" &&
        orderTab?.selectedTab !== "My Products" && (
          <>
            <Button
              onClick={() =>
                handleProductPurchase(
                  productData.id,
                  localStorage.getItem("sazim_user_email") as string
                )
              }
              className="bg-[#228BE6] hover:bg-[#1C7ED6] px-12 mt-10"
            >
              Buy
            </Button>
            <Button
              onClick={() =>
                handleProductRent(
                  productData.id,
                  localStorage.getItem("sazim_user_email") as string
                )
              }
              className="bg-[#228BE6] ms-2 hover:bg-[#1C7ED6] px-12 mt-10"
            >
              Rent
            </Button>
          </>
        )}
      <EditProductModal opened={opened} onClose={close} />
    </Box>
  );
}
