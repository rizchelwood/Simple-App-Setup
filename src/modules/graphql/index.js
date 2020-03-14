import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"
import { BatchHttpLink } from "apollo-link-batch-http"
import apolloLogger from "apollo-link-logger"

const cache = new InMemoryCache()

const batchLink = new BatchHttpLink({
  uri: "https://formidadog-ql.now.sh/graphql",
})

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

let apolloLinks = ApolloLink.from([onErrorLink, batchLink])

if (process.env.NODE_ENV === "development") {
  apolloLinks = ApolloLink.from([onErrorLink, apolloLogger, batchLink])
}

export const client = new ApolloClient({
  link: apolloLinks,
  cache,
})
