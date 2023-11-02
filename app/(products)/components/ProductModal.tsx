"use client";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import React, { useState } from "react";
import FormTextInput from "./ProductCreationCompos/FormTextInput";
import FormMultiSelect from "./ProductCreationCompos/FormMultiSelect";
import FormTextArea from "./ProductCreationCompos/FormTextArea";
import FormProductPricing from "./ProductCreationCompos/FormProductPricing";
import ProductCreationSummary from "./ProductCreationCompos/ProductCreationSummary";

type Props = {
  opened: boolean;
  close: () => void;
};

export default function ProductModal({ opened, close }: Props) {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  // todo: i can use watch method from react hook form to watch over form dat and whether to let them go to next step or not
  // !i can disable the next button for this
  return (
    <Modal
      size="calc(100vw - 30rem)"
      opened={opened}
      onClose={close}
      title="Add a product"
      centered
    >
      {/* Modal content */}
      {/* stepper here */}
      <>
        <Stepper size={"xs"} active={active} onStepClick={setActive}>
          {/* product name */}
          <Stepper.Step
            label="Product Name"
            description="Add product name"
            className="py-12"
          >
            <FormTextInput
              key={"product_name"}
              label="Product Name"
              name="product_name"
              description="Write your product name here."
            />
          </Stepper.Step>
          {/* categories */}
          <Stepper.Step
            label="Category"
            description="Select categories"
            className="py-8"
          >
            <FormMultiSelect
              data={["Electronics", "Gadgets"]}
              label="Select Categories"
              name="select_categories"
              key={"select_categories"}
              description="Select categories for your product"
            />
          </Stepper.Step>
          {/* description */}
          <Stepper.Step
            label="Description"
            description="Details about product"
            className="py-8"
          >
            <FormTextArea
              name="desctiption"
              description="Write something about your product here."
              label="Description"
              key={"description"}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Pricing"
            description="Product price"
            className="py-8"
          >
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
            />
          </Stepper.Step>
          <Stepper.Step
            label="Overview"
            description="Product overview"
            className="py-8"
          >
            <ProductCreationSummary />
          </Stepper.Step>
          <Stepper.Completed>
            {/* !todo: after clicking next, add a popup here to store the items. */}
            Confirm save?
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button
            onClick={nextStep}
            className="bg-[#228BE6] hover:bg-[#1C7ED6]"
          >
            Next step
          </Button>
        </Group>
      </>
    </Modal>
  );
}
