import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import ShopPage from 'pages/ShopPage/ShopPage'
import { useState } from 'react'
import './App.scss'

type Props = {}

type CartData = {
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalPrice: 0,
    })

    const addProductToCart = (price: number) => {
        setCartData((prevState: CartData) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Container>
                <ShopPage
                    cartData={cartData}
                    addProductToCart={addProductToCart}
                />
            </Container>
        </>
    )
}

export default App
