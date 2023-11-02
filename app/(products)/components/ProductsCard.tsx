import { Badge, Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
type Props = {};

export default function ProductsCard({}: Props) {
  return (
    <Box
      mih={250}
      w={{ xs: 600, md: 400, lg: 600 }}
      style={{ border: "2px solid gray", borderRadius: 5, color: "#363636" }}
      p={10}
    >
      <Flex justify={"space-between"}>
        <Title order={2}>Name</Title>
        <AiFillDelete style={{ fontSize: "2rem" }} />
      </Flex>
      <Flex>
        <Badge color="gray" mx={2} style={{ cursor: "pointer" }}>
          Cat1
        </Badge>
        <Badge color="gray" mx={2} style={{ cursor: "pointer" }}>
          Cat2
        </Badge>
      </Flex>
      <Title order={5}>Price: $500 | Rent: $100 daily</Title>
      <Box>
        <Text my={2} fz="md" lh="md">
          Paras is an orange, insectoid Pokémon that resembles the nymph stage
          of a cicada. Its ovoid body is segmented, and it has three pairs of
          pseudopupils.
        </Text>
      </Box>
      <Title my={12} order={6}>
        Date Posted: 12-12-2023
      </Title>
    </Box>
  );
}
