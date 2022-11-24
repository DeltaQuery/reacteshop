import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiChevronLeft } from "react-icons/bi"

export const SectionBack = ({text = "Regresar"}) => {
  const navigate = useNavigate()
  
  return (
    <div onClick={() => navigate(-1)} className="MoreLink">
      <BiChevronLeft
        color="#3E70AC"
        size="22"
      />
      <span>{text}</span>
    </div>
  )
}
