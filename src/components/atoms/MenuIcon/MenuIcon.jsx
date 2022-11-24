import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { NavText } from '../../../styles/Header/HeaderStyles'
import { MenuDiv } from '../../../styles/Header/MenuIconStyles'
import { useSwiper } from '../../../hooks/useSwiper'
import { BiX } from 'react-icons/bi'

export const MenuIcon = () => {
  const { sidebar, handleSidebar, sidecart, handleSidecart } = useSwiper()

  const openSidebar = () => {
    if (!sidebar && !sidecart) {
      handleSidecart(false)
      handleSidebar(true)
    } else if (sidebar) {
      handleSidebar(false)
      handleSidecart(false)
    }
    if (!sidebar && sidecart) {
      handleSidecart(false)
      handleSidebar(false)
    } else if (sidebar) {
      handleSidebar(false)
      handleSidecart(false)
    }
  }

  return (
    <MenuDiv onClick={openSidebar}>
      {(!sidebar && !sidecart) ?
        <BiMenu
          className="menuIcon"
          size="32"
          fill="white"
        />
        :
        <BiX
          className="menuIcon"
          size="32"
          fill="white"
        />
      }
      <NavText>Menú</NavText>
    </MenuDiv>
  )
}
