import React from 'react'
import { NavLink } from 'react-router-dom'
import mainlogo from "../../../assets/logos/mainlogo.png"
import whitelogo from "../../../assets/logos/whitelogo.png"
import { LogoImg } from '../../../styles/LogoStyles'

export const Logo = ({height = ["36px","40px"], logo = "mainlogo"}) => {
    const logoImg = (logotype) => {
        if(logotype === "mainlogo") {
          return mainlogo
        } else {
          return whitelogo
        } 
      }
      
    return (
        <NavLink to="/">
                <LogoImg src={logoImg(logo)} height={height} alt="Store logo" />
        </NavLink>
    )
}
