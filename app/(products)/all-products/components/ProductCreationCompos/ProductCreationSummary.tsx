import { Box, Table, Text, Title } from "@mantine/core";
import React from "react";

type Props = {};
const elements = [
  { id: 1, title: "title", mass: 12.011 },
  {
    id: 13,
    title: "description",
    mass: "laiuhdnolaiugeflicauefglaidyufglaxiguerla udg fblaegfl;ainedgfilax;eugfxzildgf laia;difhn;aeihdf;anxeoiuhfa;oehfa;noeihfzo.ifh;z.ohef.ozihef;.ozxh;efo.izh.eof mihz.fhz.eofhmuio.szhub.",
  },
  { id: 31, title: "categories", mass: 14.007 },
  { id: 51, title: "price", mass: 88.906 },
  { id: 61, title: "rentPrice", mass: 137.33 },
];
export default function ProductCreationSummary({}: Props) {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Th>{element.title}</Table.Th>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Box>
      <Table withTableBorder>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Box>
  );
}
