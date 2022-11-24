import React, { useState, useEffect } from 'react'
import { Main } from '../styles/View/ViewStyles'
import { useParams } from 'react-router-dom'
import { categoriesArr } from '../database/categoriesArr'
import { Section } from '../components/templates/Section'
import { SectionBack } from '../components/atoms/Section/SectionBack'
import { Product } from '../components/templates/Product'
import { SearchedProducts } from '../styles/Search/SearchStyles'
import { useProducts } from '../services/useProducts'

export const Search = () => {
  const { loading, data } = useProducts()
  const { id } = useParams()
  const params = id.split("=")
  const [searchedProducts, setSearchedProducts] = useState()
  const [typeOfSearch, setTypeOfSearch] = useState([])

  useEffect(() => {
    if (!loading && data) {
      if (params[0] === "category") {
        const category = categoriesArr.filter(x => x.categoryId === Number(params[1]))
        if (category.length === 0) {
          setTypeOfSearch([params[0], null, false])
          setSearchedProducts([])
        } else {
          if (params[1] === "50") {
            setTypeOfSearch([params[0], category[0].category, true])
            setSearchedProducts(data.allProducts?.filter(x => x.discountedPrice))
          } else {
            setTypeOfSearch([params[0], category[0].category, true])
            setSearchedProducts(data.allProducts?.filter(x => x.category.some(g => params[1] == g)))
          }
        }
      } else if (params[0] === "value") {
        setTypeOfSearch([params[0], params[1], true])

        setSearchedProducts(data.allProducts?.filter
          (x =>
            x.name.toLowerCase().includes(params[1].toLowerCase())
            ||
            x.features?.some((item) => item.toLowerCase().includes(params[1].toLowerCase()))
          ))
      }
    }

  }, [id, loading])

  return (
    <Main>
      <Section
        Left={SectionBack}
      >
        <div style={{ marginTop: "1rem" }}>
          {(typeOfSearch[2] === false) && <h4><span>Lo sentimos. La búsqueda que tratas de realizar </span> <span style={{ fontWeight: "700" }}>no es posible.</span></h4>}
          {(typeOfSearch[0] === "category" && searchedProducts.length > 0) && <h4><span>Resultados para:</span> <span style={{ fontWeight: "700" }}>"{typeOfSearch[1]}"</span></h4>}
          {(typeOfSearch[0] === "value" && searchedProducts.length > 0) && <h4><span>Resultados para:</span> <span style={{ fontWeight: "700" }}>"{typeOfSearch[1]}"</span></h4>}
          {(typeOfSearch[2] && searchedProducts.length < 1) && <h4><span>No hay resultados para:</span> <span style={{ fontWeight: "700" }}>"{typeOfSearch[1]}"</span></h4>}
        </div>

        {
          loading &&
          <SearchedProducts>
            <Product loading={loading} display="group" />
            <Product loading={loading} display="group" />
            <Product loading={loading} display="group" />
            <Product loading={loading} display="group" />
          </SearchedProducts>
        }

        {(!loading && searchedProducts) &&
          <SearchedProducts>
            {searchedProducts && searchedProducts.map((product, index) => {
              return <Product key={index} product={product} loading={loading} display="group" />
            })
            }
          </SearchedProducts>
        }
      </Section>

    </Main>
  )
}
