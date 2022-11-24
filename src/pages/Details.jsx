import React, { useState, useEffect } from 'react'
import { Main } from '../styles/View/ViewStyles'
import { useParams } from "react-router-dom"
import { Product } from '../components/templates/Product'
import { Section } from '../components/templates/Section'
import { SectionBack } from '../components/atoms/Section/SectionBack'
import { Share } from '../components/atoms/Section/Share'
import { Categories } from '../components/templates/Categories'
import { Instagram } from '../components/templates/Instagram'
import { SectionTitle } from '../components/atoms/Section/SectionTitle'
import { SliderList } from '../components/templates/SliderList'
import { useLocation } from 'react-router-dom'
import { useFindProduct } from '../services/useFindProduct'
import { useProducts } from '../services/useProducts'

export const Details = () => {
  const { id } = useParams()
  const { loading, data } = useFindProduct(id)
  const { loading: pLoading, data: pData } = useProducts()
  const [product, setProduct] = useState()
  const [products, setProducts] = useState()
  const location = useLocation()

  useEffect(() => {
    if(!loading && !pLoading && data && pData){
      setProduct(data.findProduct)
      setProducts(pData.allProducts)
    }
  }, [location.key, loading, pLoading])

  return (
    <Main>
      {
        (loading || pLoading ) &&
        <Section Left={SectionBack} Right={Share}>
              <Product display="detailed" loading={loading} />
            </Section>
      }

      {
        (!loading && !pLoading && product && products) &&
          <>
            <Section Left={SectionBack} Right={Share}>
              <Product display="detailed" product={product} products={products}/>
            </Section>
            
            <Section
              text="Productos relacionados 🌟"
              category={product.category[0]}
            >
              <SliderList
                category={product.category[0]}
              >
              </SliderList>
            </Section>
          </>
      }

      {
        (!loading && !pLoading && !product && !products) &&
        <div>Ningún producto coincide con tu búsqueda.</div>
      }

      <Section
        Left={SectionTitle}
        text="Categorías">
        <Categories />
      </Section>

      <Section
        Left={SectionTitle}
        text="¡Síguenos en Instagram!">
        <Instagram />
      </Section>
    </Main>
  )
}
