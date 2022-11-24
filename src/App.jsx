import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cart } from './components/templates/Cart'
import { Contact } from './pages/Contact'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Error } from './pages/Error'
import { View } from './components/templates/View'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTotal, setCart } from './slices/dataSlice'

function App() {
  const dispatch = useDispatch()

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.key])

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("DeltaQueryStore"))
    if(localCart){
      dispatch(setCart(localCart))
      dispatch(getTotal())
    }
  },[])

  return (
    <>
        <Routes>
          <Route exact path="/" element={<View><Home/></View>} />
          <Route exact path="/home" element={<View><Home/></View>} />
          <Route exact path="/cart" element={<View><Cart /></View>} />
          <Route exact path="/contact" element={<View><Contact /></View>} />
          <Route exact path="/details/:id" element={<View><Details /></View>} />
          <Route exact path="/search/:id" element={<View><Search /></View>} />
          <Route exact path="*" element={<View><Error /></View>} />
        </Routes>
    </>
  )
}

export default App
