import { gql, useQuery } from '@apollo/client'

export const useProducts = () => {

  const ALL_PRODUCTS = gql`
  query {
    allProducts {
      _id
      name
      category
      price
      discountedPrice
      model
      images {
        smallImg
      }
    }
  }
`

  const { data, loading } = useQuery(ALL_PRODUCTS)

  return { loading, data }
}