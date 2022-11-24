import React from 'react'
import { useSwiper } from '../../hooks/useSwiper'
import { SidebarDiv } from '../../styles/Sidebar/SidebarStyles'
import { NavLink } from "react-router-dom"
import { BiPurchaseTagAlt } from "react-icons/bi"
import { BiCategory } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"
import { categoriesArr } from '../../database/categoriesArr'

export const Sidebar = () => {
    const { sidebar, setStart, setEnd, checkSwipeToClose } = useSwiper() 

    const handlePosition = () => {
        const position = sidebar ? "0px" : "-2000px"
        return position
    }

    return (
        <SidebarDiv
        onTouchStart={(e) => setStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY])}
        onTouchMove={(e) => setEnd([e.changedTouches[0].clientX, e.targetTouches[0].clientY])}
        onTouchEnd={checkSwipeToClose}
        position={handlePosition}
        >
                <div className="SidebarContent">
                    <NavLink to={`/search/category=50`} className="CategoryTitle RedirectLink">
                        <BiPurchaseTagAlt
                            className=""
                            size="20"
                            fill="#003A4E"
                        />
                        Ofertas
                    </NavLink>

                    {/*<div
                        className="removeProductIcon closeSidebarIcon"
                        onClick={() => closeSidebar()}
                    >X</div>*/}
                </div>

                <div className="SidebarContent">
                    <div className="CategoryTitle">
                        <BiCategory
                            className=""
                            size="20"
                            fill="#003A4E"
                        />
                        Categorías
                    </div>

                    {categoriesArr && categoriesArr.map(category => {
                        return <NavLink
                        key={category.categoryId}
                        to={`/search/category=${category.categoryId}`}
                        className="CategoryItem RedirectLink"
                        >
                            {category.category}
                            <BiChevronRight
                            className="CategoryIcon"
                            size="24"
                            />
                               </NavLink>
                    })}
                </div>
        </SidebarDiv>
    )
}

