import React from 'react'
import heroBanner from "../../assets/banners/hero.jpg"
import "../../styles/Hero/hero.css"

export const HeroBanner = () => {
  return (
    <picture>
          <source className="heroBanner" srcSet={heroBanner} alt="Hero banner" media="(min-width:600px)"/>
          <img className="heroBanner" src={heroBanner} alt="Hero banner" loading="lazy"/>
    </picture>
  )
}
