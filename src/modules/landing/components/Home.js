import React from "react"
import ReactLogo from "../assets/ReactLogo"
import { keyframes } from "@emotion/core"

const spin = keyframes({
  from: {
    transform: `rotate(0deg)`,
  },
  to: {
    transform: `rotate(360deg)`,
  },
})

const Home = () => (
  <div
    css={{
      textAlign: `center`,
    }}
  >
    <header
      css={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        fontSize: `1.5rem`,
        color: `white`,
      }}
    >
      <ReactLogo
        css={{
          animation: `${spin} infinite 20s linear`,
        }}
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        css={{
          color: `#61dafb`,
        }}
      >
        Learn React
      </a>
    </header>
  </div>
)

export default Home
