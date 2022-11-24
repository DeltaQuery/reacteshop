import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSidebar, setSidecart } from '../../slices/uiSlice'
import { CartSidebar } from './CartSidebar'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { useLocation } from 'react-router-dom'
import { Whatsapp } from '../atoms/Whatsapp'
import { useSwiper } from '../../hooks/useSwiper'

export const View = ({ children }) => {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setSidebar(false))
      dispatch(setSidecart(false))
    }, 100)

  }, [location.key])
  const { setStart, setEnd, checkSwipeToOpen, sidebar } = useSwiper()

  const overflow = () => {
    if (sidebar && window.innerWidth < 600) {
      return "hidden"
    } else if (!sidebar && window.innerWidth < 600) {
      return "auto"
    }
  }

  return (
    <div
      style={{ overflow: overflow() }}
      onTouchStart={(e) => setStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY, e])}
      onTouchMove={(e) => setEnd([e.changedTouches[0].clientX, e.targetTouches[0].clientY, e])}
      onTouchEnd={checkSwipeToOpen}>
      <Header />
      <Sidebar />
      <CartSidebar />
      <>
        {/*style={{ overflow: overflow() }}
      onTouchStart={(e) => setStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY]) }
      onTouchMove={(e) => setEnd([e.changedTouches[0].clientX, e.targetTouches[0].clientY]) }
  onTouchEnd={checkSwipeToOpen }
      >*/}
        {children}
        <Whatsapp />
        <Footer />
      </>
    </div>
  )
}
