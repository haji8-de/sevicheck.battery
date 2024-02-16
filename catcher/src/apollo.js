
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev"
import { onError } from "@apollo/client/link/error";

loadErrorMessages()
loadDevMessages()

const httpLink = new HttpLink({
    uri: "http://thehaji.co/db/graphql"
  });
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
const client = new ApolloClient({
    uri: "http://thehaji.co/db/graphql",
    // uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    link: from([errorLink, httpLink]),
  });

export default client;