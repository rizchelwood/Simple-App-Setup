import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { Global, css } from "@emotion/core"
import { ApolloProvider } from "@apollo/react-hooks"

import Routes from "@modules/routes"
import * as serviceWorker from "./serviceWorker"
import { client } from "@modules/graphql"

ReactDOM.render(
  <Fragment>
    <Global
      styles={css({
        body: {
          margin: `0`,
        },
        code: {
          color: `red`,
        },
      })}
    />
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Fragment>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
