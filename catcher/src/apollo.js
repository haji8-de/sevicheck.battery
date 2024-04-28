import { ApolloClient, InMemoryCache, HttpLink, from, ApolloLink } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev"
import { onError } from "@apollo/client/link/error";

loadErrorMessages()
loadDevMessages()

const httpLink = new HttpLink({
  // uri: "http://thehaji.co/db/graphql"
    uri: "http://localhost:3000/graphql"
  });
  
const authLink = new ApolloLink((operation, forward) => {
  // 인증 토큰을 여기에서 가져옵니다. 예: localStorage, cookie, etc.
  const token = localStorage.getItem('authToken');

  // 요청의 헤더에 인증 토큰을 추가합니다.
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
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
    // uri: "http://thehaji.co/db/graphql"
    uri: "http://localhost:3000/graphql",
    // uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    link: from([authLink, errorLink, httpLink]),
  });

export default client;