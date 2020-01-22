import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navigation = styled.nav`
  display: flex;
  width: 50vw;
  margin: 0 auto;
`

const NavigationItems = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: space-around;
`

const NavigationItem = styled.li`
  list-style: none;
  text-decoration: none;
`

const NavLink = ({ to, children }) => (
  <NavigationItem>
    <Link to={to}>{children}</Link>
  </NavigationItem>
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
