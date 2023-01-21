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
        totalPrice: 100,
    })
    return (
        <>
            <CssBaseline />
            <Container>
                <ShopPage cartData={cartData} />
            </Container>
        </>
    )
}

export default App
