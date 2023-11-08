import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import "./styles/globals.css";
import WrapperProvider from "./components/layouts/WrapperProvider";

export const metadata = {
  title: "Tee Bay Store",
  description: "Tee bay store front",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <WrapperProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </WrapperProvider>
      </body>
    </html>
  );
}
