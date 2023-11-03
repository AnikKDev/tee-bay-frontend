import { Box, Select, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import React from "react";

type Props = {
  priceLabel: string;
  priceName: string;
  priceDescription: string;
  rentLabel: string;
  rentName: string;
  rentDescription: string;
  selectData: string[];
  selectLabel: string;
  selectDescription: string;
  select_name: string;
  form: UseFormReturnType<any>;
};

export default function FormProductPricing({
  priceLabel,
  priceName,
  priceDescription,
  rentLabel,
  rentName,
  rentDescription,
  selectData,
  selectLabel,
  selectDescription,
  form,
  select_name,
}: Props) {
  return (
    <Box>
      <TextInput
        name={priceName}
        size="md"
        radius="md"
        label={priceLabel}
        withAsterisk
        description={priceDescription}
        placeholder={priceLabel}
        {...form.getInputProps(priceName)}
      />
      <Box>
        <TextInput
          name={rentName}
          size="sm"
          radius="md"
          label={rentLabel}
          withAsterisk
          description={rentDescription}
          placeholder={rentLabel}
          {...form.getInputProps(rentName)}
        />
        <Select
          description={selectDescription}
          label={selectLabel}
          placeholder={selectLabel}
          data={selectData}
          name={select_name}
          {...form.getInputProps(select_name)}
        />
      </Box>
    </Box>
  );
}
