import React from 'react'

import Navigation from 'src/components/Navigation'

export default ({ children }) => {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <div>{children}</div>
    </React.Fragment>
  )
}
