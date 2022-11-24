import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductImg } from '../../styles/Product/Components/PImageStyles'

export const PImage = ({image, id, display}) => {

  return (
    <ProductImg className={display}>
    { display === "group" ?
    <NavLink to={`/details/${id}`} className="ImgContainer">
    <img src={image[0].smallImg} width="90%" className="ProductImg"/>
    </NavLink>
    :
    <img className="ProductImg" src={image[0].smallImg} width="90%"/>
    }
    </ProductImg>
    
  )
}