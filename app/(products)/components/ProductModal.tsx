"use client";
import { Button, Group, Modal, Stepper, Title } from "@mantine/core";
import React, { useState, useEffect } from "react";
import FormTextInput from "./ProductCreationCompos/FormTextInput";
import FormMultiSelect from "./ProductCreationCompos/FormMultiSelect";
import FormTextArea from "./ProductCreationCompos/FormTextArea";
import FormProductPricing from "./ProductCreationCompos/FormProductPricing";
import ProductCreationSummary from "./ProductCreationCompos/ProductCreationSummary";
import { useForm } from "@mantine/form";
import { ProductData } from "../../types/product.types";
import CustomAlert from "../../components/ui/alert";
type Props = {
  opened: boolean;
  close: () => void;
};

export default function ProductModal({ opened, close }: Props) {
  const [active, setActive] = useState(0);
  const [isError, setIsError] = useState(false);
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  // todo: i can use watch method from react hook form to watch over form dat and whether to let them go to next step or not
  // !i can disable the next button for this
  const form = useForm<ProductData>({
    initialValues: {
      product_name: "",
      select_categories: [],
      description: "",
      product_price: "",
      rent_amount: "",
      rental_period: "",
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

  const handleProductAddition = (values: Partial<ProductData>) => {
    form.setValues((prev) => ({ ...prev, ...values }));
    if (!form.errors.length) {
      setIsError(false);
      close();
    } else {
      setIsError(true);
    }
    console.log(values);
  };
  console.log(form.errors, "errors");
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
        <form onSubmit={form.onSubmit(handleProductAddition)}>
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
                form={form}
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
                form={form}
              />
            </Stepper.Step>
            {/* description */}
            <Stepper.Step
              label="Description"
              description="Details about product"
              className="py-8"
            >
              <FormTextArea
                name="description"
                description="Write something about your product here."
                label="Description"
                key={"description"}
                form={form}
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
                select_name="rental_period"
                form={form}
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
              {Object.keys(form.errors)?.length ? (
                <CustomAlert text="One or more field is missing. Please check again!" />
              ) : null}
              {/* <CustomAlert text="One or more field is missing. Please check again!" /> */}
              <Title order={3} className="text-center text-gray-500">
                Confirm save?
              </Title>
            </Stepper.Completed>
          </Stepper>
          {active === 5 && (
            <Button
              type="submit"
              className="bg-[#228BE6] block mx-auto my-6 hover:bg-[#1C7ED6]"
            >
              Save and close
            </Button>
          )}
        </form>

        {active < 5 && (
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
        )}
      </>
    </Modal>
  );
}
