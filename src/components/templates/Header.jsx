import React from 'react'
import { CartIcon } from '../atoms/CartIcon/CartIcon'
import { Logo } from '../atoms/Logo/Logo'
import { MenuIcon } from '../atoms/MenuIcon/MenuIcon'
import { Search } from '../atoms/Search/Search'
import { Nav, LeftNav } from '../../styles/Header/HeaderStyles'

export const Header = () => {

  return (
    <Nav>
      <LeftNav>
        <Logo 
        logo="whitelogo"
        height={["36px","40px"]}
        />
        <MenuIcon />
        <Search />
      </LeftNav> 
      <CartIcon /> 
    </Nav>
  )
}
