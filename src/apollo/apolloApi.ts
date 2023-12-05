import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://46.19.86.219:5000",
  cache: new InMemoryCache(),
});

export default client;
