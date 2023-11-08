import { Skeleton } from "@mantine/core";
import React from "react";

type Props = {
  loading: boolean;
};

export default function CardSkeleton({ loading }: Props) {
  return (
    <Skeleton visible={loading} width="85%">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        ducimus voluptatibus magni est eum inventore quasi culpa assumenda,
        repellat dolores ratione obcaecati accusantium animi numquam. Maxime
        facere dolor enim molestias. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dignissimos ducimus voluptatibus magni est eum
        inventore quasi culpa assumenda, repellat dolores ratione obcaecati
        accusantium animi numquam. Maxime facere dolor enim molestias. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ducimus
        voluptatibus magni est eum inventore quasi culpa assumenda, repellat
        dolores ratione obcaecati accusantium animi numquam. Maxime facere dolor
        enim molestias. Lorem ipsum dolor sit amet consectetur, adipisicing
      </p>
    </Skeleton>
  );
}
