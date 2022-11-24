import React from 'react'
import { TitleDiv } from '../../styles/Product/Components/PTitleStyles'
import { NavLink } from "react-router-dom"

export const PTitle = ({display, name, id}) => {
  return (
    <>
    {
      display === "detailed"
      ?
      <TitleDiv className={display}>{name}</TitleDiv>
      :
      <NavLink to={`/details/${id}`}>
        <TitleDiv className={display}>{name}</TitleDiv>
      </NavLink>
    }</>
    
  )
}
