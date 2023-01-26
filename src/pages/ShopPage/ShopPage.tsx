import { Typography } from '@mui/material'
import Currency from 'components/Currency/Currency'
import ProductsList from 'components/Products/ProductsList'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import { useState } from 'react'
import { currencyObject } from 'components/Currency/Currency'

type Props = {}
type CartData = {
    totalPrice: number
}
type CurrencyCoef = {
    id?: number
    coefficient: number
    name: string
}

const ShopPage = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalPrice: 0,
    })

    const [currencyCoef, setCurrencyCoef] = useState<CurrencyCoef>({
        coefficient: currencyObject[2].coefficient,
        name: currencyObject[2].name,
    })
    const changeCurrency = (id: number) => {
        setCurrencyCoef(currencyObject[id])
    }
    const addProductToCart = (price: number) => {
        setCartData((prevState: CartData) => ({
            totalPrice: prevState.totalPrice + price * currencyCoef.coefficient,
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
            <TotalPrice cartData={cartData} />
        </>
    )
}

export default ShopPage
