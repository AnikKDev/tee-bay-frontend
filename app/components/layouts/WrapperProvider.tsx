"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

type Props = { children: React.ReactNode };

export default function WrapperProvider({ children }: Props) {
  // setting up apollo client
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
