import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Navigation from 'src/components/Navigation'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: Inter;

  }

  body {
    font-size: 1.6rem
  }
`

export default ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navigation></Navigation>
      <div>{children}</div>
    </React.Fragment>
  )
}
