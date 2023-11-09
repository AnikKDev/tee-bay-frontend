"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

type Props = { children: React.ReactNode };

export default function WrapperProvider({ children }: Props) {
  const graphqlUri =
    process.env.REACT_APP_GRAPHQL_URL || "http://localhost:8000/graphql";
  // setting up apollo client
  const client = new ApolloClient({
    // uri: "http://localhost:8000/graphql",
    uri: graphqlUri,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
