import { Box, Select, TextInput } from "@mantine/core";
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
        />
        <Select
          description={selectDescription}
          label={selectLabel}
          placeholder={selectLabel}
          data={selectData}
        />
      </Box>
    </Box>
  );
}
