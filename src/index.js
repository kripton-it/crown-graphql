import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { persistCache } from "apollo-cache-persist";

import "./index.css";
import App from "./App.container";

import { resolvers, typeDefs } from "./graphql/resolvers";

import data from "./graphql/initial-data";

const link = createHttpLink({
  uri: "https://crwn-clothing.com"
});

const cache = new InMemoryCache();

(async () => {
  await persistCache({
    cache,
    storage: window.localStorage
  });
})();

const client = new ApolloClient({
  link,
  cache,
  resolvers,
  typeDefs
});

client.writeData({
  data
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
