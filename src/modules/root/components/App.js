import React, { Fragment } from "react"
import { Global, css } from "@emotion/core"
import { ApolloProvider } from "@apollo/react-hooks"

import Routes from "@modules/routes"
import { client } from "@modules/graphql"

const App = () => (
  <Fragment>
    <Global
      styles={css({
        body: {
          margin: `0`,
          background: `#282c34`,
        },
        code: {
          color: `red`,
        },
      })}
    />
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Fragment>
)

export default App
