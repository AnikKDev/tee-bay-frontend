import { Button, Modal } from "@mantine/core";
import React from "react";
import FormTextInput from "./ProductCreationCompos/FormTextInput";
import FormMultiSelect from "./ProductCreationCompos/FormMultiSelect";
import FormTextArea from "./ProductCreationCompos/FormTextArea";
import FormProductPricing from "./ProductCreationCompos/FormProductPricing";

type Props = {
  opened: boolean;
  onClose: () => void;
};

export default function EditProductModal({ opened, onClose }: Props) {
  return (
    <Modal
      centered
      size={"lg"}
      opened={opened}
      onClose={onClose}
      title="Edit Product"
    >
      {/* Modal content */}
      <FormTextInput
        description="Update title"
        label="Title"
        name="title"
        key={"title"}
      />
      <FormMultiSelect
        data={["Electronics"]}
        description="Update categories"
        label="Categories"
        name="categories"
        key={"categories"}
      />
      <FormTextArea
        description="Update product description"
        label="Product description"
        name="product_description"
        key={"product_description"}
      />
      <FormProductPricing
        priceDescription="Update product price"
        priceLabel="Product price"
        priceName="product_price"
        rentDescription="Update rental details"
        rentLabel="Rental amount"
        rentName="rental_amount"
        selectData={["daily", "weekly"]}
        selectDescription="Update rental period"
        selectLabel="Rental period"
        key={"product_pricing"}
      />
      <Button
        className="bg-[#228BE6] hover:bg-[#1C7ED6] w-full"
        my={20}
        fullWidth
      >
        Save changes
      </Button>
    </Modal>
  );
}
