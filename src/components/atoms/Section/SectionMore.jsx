import React from 'react'
import { NavLink } from 'react-router-dom'

export const SectionMore = ({category}) => {
  return (
    <NavLink to={`/search/category=${category}`} className="MoreLink">
                    Ver más
                </NavLink>
  )
}
