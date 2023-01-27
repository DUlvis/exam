import { Typography } from '@mui/material'
import Currency from 'components/Currency/Currency'
import ProductsList from 'components/Products/ProductsList'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import { useState } from 'react'
import { currencyArray } from 'components/Currency/Currency'
import { ProductProps } from 'components/Products/ProductsList'

type Props = {}
type CartData = {
    products: ProductProps[];
}
export type CurrencyCoef = {
    coefficient: number
    name: string
}

const ShopPage = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        products: [],
    })

    const [currencyCoef, setCurrencyCoef] = useState<CurrencyCoef>({
        coefficient: currencyArray[0].coefficient,
        name: currencyArray[0].name,
    })
    const changeCurrency = (id: number) => {
        setCurrencyCoef(() => currencyArray[id - 1])
    }
    const addProductToCart = (product: ProductProps) => {
        setCartData((prevState: CartData) => ({
            products: [...prevState.products, product],
        }))
    }

    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Our shop page
            </Typography>
            <Currency changeCurrency={changeCurrency} />
            <ProductsList
                addProductToCart={addProductToCart}
                currencyCoef={currencyCoef}
            />
            <TotalPrice cartData={cartData} currency={currencyCoef} />
        </>
    )
}

export default ShopPage
