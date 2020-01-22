import React from 'react'

import { Container } from 'src/components/styled'

import Layout from 'src/components/Layout'

export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Container mt="5rem">
          <h1>Hi, I'm Kwadwo Amoh 👋.</h1>
          <p>Fast facts about me:</p>
          <ul>
            <li>
              Frontend developer at{' '}
              <a href="http://dareafrica.io/">dareafrica.io</a>
            </li>
            <li>
              Currently building{' '}
              <a href="https://www.mybestquote.com">mybestquote.com</a>
            </li>
            <li>
              Skills include:
              <ul>
                <li>Static site development with HTML, CSS and JavaScript</li>
                <li>Frontend SPA development with React.js</li>
                <li>Server-side development with Node.js and GraphQL</li>
                <li>PostgresQL databases</li>
                <li>Web design with Photoshop, Illustrator and Figma</li>
              </ul>
            </li>
          </ul>
          <a href="https://github.com/kdotamoh/">Github</a>
          <a href="https://www.linkedin.com/in/kwadwo-amoh/">LinkedIn</a>
        </Container>
      </Layout>
    </React.Fragment>
  )
}
