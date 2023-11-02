"use client";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import React, { useState } from "react";
import FormTextInput from "./ProductCreationCompos/FormTextInput";
import FormMultiSelect from "./ProductCreationCompos/FormMultiSelect";
import FormTextArea from "./ProductCreationCompos/FormTextArea";

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
      size="xl"
      opened={opened}
      onClose={close}
      title="Authentication"
      centered
    >
      {/* Modal content */}
      {/* stepper here */}
      <>
        <Stepper size={"xs"} active={active} onStepClick={setActive}>
          <Stepper.Step
            label="Product Name"
            description="Add product name"
            className="py-12"
          >
            {/* product name */}
            <FormTextInput
              key={"product_name"}
              label="Product Name"
              name="product_name"
              description="Write your product name here."
            />
          </Stepper.Step>
          <Stepper.Step
            label="Category"
            description="Select categories"
            className="py-8"
          >
            {/* categories */}
            <FormMultiSelect
              data={["Electronics", "Gadgets"]}
              label="Select Categories"
              name="select_categories"
              key={"select_categories"}
              description="Select categories for your product"
            />
          </Stepper.Step>
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
            label="Fourth step"
            description="Get full access"
            className="py-8"
          >
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Step
            label="Final step"
            description="Get full access"
            className="py-8"
          >
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
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
