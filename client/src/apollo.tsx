import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React from "react";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`Graphql error ${message}`);
    });
  }
});

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const url = import.meta.env.VITE_GRAPHQL_URI;
  const isProd = import.meta.env.PROD;

  const link = from([
    errorLink,
    new HttpLink({
      uri: isProd ? "/graphql" : url,
    }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
