import { Typography } from '@mui/material'
import Currency from 'components/Currency/Currency'
import ProductsList from 'components/Products/ProductsList'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import { useState } from 'react'
import { currencyArray } from 'components/Currency/Currency'

type Props = {}
type CartData = {
    totalPrice: number
}
type CurrencyCoef = {
    coefficient: number
    name: string
}

const ShopPage = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalPrice: 0,
    })

    const [currencyCoef, setCurrencyCoef] = useState<CurrencyCoef>({
        coefficient: currencyArray[0].coefficient,
        name: currencyArray[0].name,
    })
    const changeCurrency = (id: number, totalPrice: number) => {
        setCurrencyCoef(currencyArray[id - 1])
        setCartData((prevState: CartData) => ({
            totalPrice: prevState.totalPrice * currencyCoef.coefficient,
        }))
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
            <Currency changeCurrency={changeCurrency} cartData={cartData} />
            <ProductsList
                addProductToCart={addProductToCart}
                currencyCoef={currencyCoef}
            />
            <TotalPrice cartData={cartData} />
        </>
    )
}

export default ShopPage
