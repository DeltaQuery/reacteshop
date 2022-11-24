import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiCart } from 'react-icons/bi'
import { RightNav } from '../../../styles/Header/HeaderStyles'
import { CartQuantity } from '../../../styles/Header/CartIconStyles'
import { NavText } from '../../../styles/Header/HeaderStyles'
import { useSelector } from 'react-redux'

export const CartIcon = () => {
  const cart = useSelector(state => state.data.cart)
  return (
    <NavLink to="/cart" style={{ marginRight: "3%", position: "relative" }}>
      <RightNav>
        <BiCart
          size="38"
          fill="white"
        />
        {cart.length > 0
          ?
          <CartQuantity>{cart.length}</CartQuantity>
          :
          null}
        <NavText>Carrito</NavText>
      </RightNav>
    </NavLink>
  )
}
