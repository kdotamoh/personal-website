import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navigation = styled.nav`
  display: flex;
`

const NavigationItems = styled.ul`
  display: flex;
`

const NavLink = ({ to, children }) => (
  <ul>
    <Link to={to}>{children}</Link>
  </ul>
)

export default () => {
  return (
    <Navigation>
      <NavigationItems>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work/">Work</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
        <NavLink to="/blog/">Blog</NavLink>
      </NavigationItems>
    </Navigation>
  )
}
