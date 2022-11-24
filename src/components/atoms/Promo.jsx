import React from 'react'
import { PromoDiv } from '../../styles/Promo/PromoStyles'

export const Promo = ({img1, img2, img3}) => {
  return (
    <PromoDiv>
            <img src={img1} loading="lazy"></img>
            <img src={img2} loading="lazy"></img>
            <img src={img3} loading="lazy"></img>
    </PromoDiv>
  )
}
 