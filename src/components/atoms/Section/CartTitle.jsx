import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiChevronLeft } from "react-icons/bi"

export const CartTitle = ({ text = "Tu Carrito" }) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div onClick={goBack} className="CartTitle">
                <BiChevronLeft
                    color="#3E70AC"
                    size="22"
                    className="CartBack"
                />
            <span>{text}</span>
        </div>
    )
}
