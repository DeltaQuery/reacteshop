import React from 'react'
import { Section } from './Section'
import { Main } from '../../styles/View/ViewStyles'
import { CartTitle } from '../atoms/Section/CartTitle'
import { CartTotal } from '../atoms/Section/CartTotal'
import { CartSection } from '../../styles/Cart/CartStyles'
import { CartProducts } from './CartProducts'
import { Separator } from '../../styles/Separator'
import { AddToCart } from '../atoms/AddToCart'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import roundNumber from '../../utils/roundNumber'

export const Cart = () => {
  const total = useSelector(state => state.data.total)
  const cart = useSelector(state => state.data.cart)
  const navigate = useNavigate()
  const handleGoTo = () => {
    if(cart.length > 0){
     navigate("/contact") 
    } else {
      alert("Agrega un producto a tu carrito para continuar.")
    }
  }

  return (
    <Main>
      <Section
        Left={CartTitle}
        Right={CartTotal}
        text={"Tu Carrito"}
      >
        <CartSection>
        
        {
         cart.length > 0
         ?
         <CartProducts />
         :
         <CartProducts>
          <div style={{fontWeight: "700"}}>Tu carrito está vacío.</div>
         </CartProducts>
        }
          
          <div className="CartInfo">

            <div className="cartResumeContent">
              <h4>Resumen de tu Pedido</h4>
              <div className="cartResumeLine"><p>Subtotal</p> {<span>${roundNumber(total[1])}</span>}</div>
              { }
              <div className="cartResumeLine"><p>Descuentos</p> <span className="detailDiscount">${roundNumber(total[2])}</span></div>
              <Separator/>
              <div className="cartResumeLine"><h4>Total</h4><h4> ${roundNumber(total[0])}</h4></div>
            </div>


            <div className="GoToContactInfo">
              <AddToCart
                className="detailed"
                redirectFunction={handleGoTo}
                text="Continuar a Datos de Contacto"
              />
              <p>El total no incluye impuestos o costos de envío.</p>
            </div>
          </div>

        </CartSection>
      </Section>
    </Main>
  )
}
