import React, { useEffect, useState } from 'react'
import { PTitle } from '../atoms/PTitle'
import { PImage } from '../atoms/PImage'
import { PPrice } from '../atoms/PPrice'
import { AddToCart } from '../atoms/AddToCart'
import { ProductDiv } from '../../styles/Product/ProductStyles'
import { PQuantity } from '../atoms/PQuantity'
import { Separator } from '../../styles/Separator'
import { Features } from '../atoms/Features'
import { productArr } from '../../database/productArr'
import { Remove } from '../atoms/Remove'
import { useDispatch } from 'react-redux'
import { addToCart, setAddedProduct } from '../../slices/dataSlice'
import { useSwiper } from '../../hooks/useSwiper'
import { ProductSkeleton } from './ProductSkeleton'
import { PModels } from '../atoms/PModels'

export const Product = ({ display, product, loading, products }) => {
    const { handleSidecart } = useSwiper()
    const dispatch = useDispatch()

    const handleClick = () => {
        if (display === "group") {
            dispatch(addToCart([product, 1]))
            dispatch(setAddedProduct(product))
            handleSidecart(true)
        }
        if (display === "detailed") {
            dispatch(addToCart([product, undefined]))
            dispatch(setAddedProduct(product))
            handleSidecart(true)
        }
    }


    useEffect(() => {

    }, [loading])
    return (
        <>
            {
                loading &&
                <ProductSkeleton display={display} />
            }

            {(!loading && product) &&
                <>
                    <ProductDiv className={display}>
                        <div className="imgContainer">
                            <PImage display={display} image={product.images} id={product._id} />
                        </div>
                        <div>
                            <PTitle display={display} name={product.name} id={product._id} />
                            <PPrice display={display} price={product.price} discountedPrice={product.discountedPrice} quantity={product.quantity} />
                            <Separator className={display} />
                            <PModels display={display} id={product._id} models={product.models} model={product.model} products={products} />
                            <Features display={display} features={product.features} />
                            <div className="Product--Buttons">
                                <PQuantity display={display} product={product} />
                                <AddToCart display={display} redirectFunction={handleClick} />
                            </div>
                        </div>
                        <Remove id={product._id} />
                    </ProductDiv>
                    {display === "cart" && <Separator />}
                </>
            }
        </>
    )
}
