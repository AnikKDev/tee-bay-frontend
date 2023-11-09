"use client";

import { Button, Modal } from "@mantine/core";
import React, { useState, useContext } from "react";
import FormTextInput from "./ProductCreationCompos/FormTextInput";
import FormMultiSelect from "./ProductCreationCompos/FormMultiSelect";
import FormTextArea from "./ProductCreationCompos/FormTextArea";
import FormProductPricing from "./ProductCreationCompos/FormProductPricing";
import { useForm } from "@mantine/form";
import { SELECTED_PRODUCT } from "../../my-products/page";
import { ProductData } from "../../../types/product.types";

type Props = {
  opened: boolean;
  onClose: () => void;
};

export default function EditProductModal({ opened, onClose }: Props) {
  const [isError, setIsError] = useState(false);
  const { selectedProduct } = useContext(SELECTED_PRODUCT);
  const form = useForm<ProductData>({
    initialValues: {
      product_name: selectedProduct?.title || "",
      select_categories: selectedProduct?.categories || [],
      description: selectedProduct?.description || "",
      product_price: selectedProduct?.price || "",
      rent_amount: selectedProduct?.rentalAmount || "",
      rental_period: selectedProduct?.rentalPeriod || "",
    },
    validate: {
      product_name: (value) => {
        // setActive(0);
        return value.length <= 0 ? "Invalid product name" : null;
      },
      select_categories: (value) => {
        // setActive(1);
        return value.length <= 0
          ? "Please select one or more product categories"
          : null;
      },
      description: (value) => {
        // setActive(2);
        return value.length <= 0 ? "Invalid product description" : null;
      },
      product_price: (value) => {
        // setActive(3);
        return value.length <= 0 ? "Invalid product price" : null;
      },
      rent_amount: (value) => {
        // setActive(3);
        return value.length <= 0 ? "Invalid rent amount" : null;
      },
      rental_period: (value) => {
        // setActive(3);
        return value.length <= 0 ? "Please select rental period" : null;
      },
    },
  });

  // action
  const handleProductUpdate = (values: Partial<ProductData>) => {
    form.setValues((prev) => ({ ...prev, ...values }));
    if (!form.errors.length) {
      // check whether data added successfully
      setIsError(false);
    }

    const {
      description,
      product_name,
      product_price,
      rent_amount,
      rental_period,
      select_categories,
    } = values;
  };

  return (
    <Modal
      centered
      size={"lg"}
      opened={opened}
      onClose={onClose}
      title="Edit Product"
    >
      {/* Modal content */}
      <form onSubmit={form.onSubmit(handleProductUpdate)}>
        <FormTextInput
          classNames=""
          key={"product_name"}
          label="Product Name"
          name="product_name"
          description="Write your product name here."
          form={form}
        />
        <FormMultiSelect
          data={["Electronics", "Gadgets"]}
          label="Select Categories"
          name="select_categories"
          key={"select_categories"}
          description="Select categories for your product"
          form={form}
        />
        <FormTextArea
          name="description"
          description="Write something about your product here."
          label="Description"
          key={"description"}
          form={form}
        />
        <FormProductPricing
          priceDescription="Enter the product price"
          priceLabel="Product Price"
          priceName="product_price"
          rentDescription="Enter the amount for renting the product."
          rentLabel="Rent amount"
          rentName="rent_amount"
          selectData={["daily", "weekly", "monthly"]}
          selectDescription="Enter the rental period"
          selectLabel="Rental period"
          key={"form_pricing"}
          select_name="rental_period"
          form={form}
        />
        <Button
          type="submit"
          className="bg-[#228BE6] hover:bg-[#1C7ED6] w-full"
          my={20}
          fullWidth
        >
          Save changes
        </Button>
      </form>
    </Modal>
  );
}
