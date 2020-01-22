import React from 'react'

import { Container } from 'src/components/styled'

import Layout from 'src/components/Layout'

export default () => {
  return (
    <Layout>
      <Container mt="5rem">
        <p>Get in touch:</p>
        <p>
          Email:{' '}
          <a href="mailto:kwadwo.amoh@gmail.com">kwadwo.amoh@gmail.com</a>
          <br />
        </p>
      </Container>
    </Layout>
  )
}
