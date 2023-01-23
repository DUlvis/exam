import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import Currency from 'components/Currency/Currency'
type Props = {
    cartData: {
        totalPrice: number
    }
    addProductToCart: (price: number) => void
}
const ShopPage = ({ cartData, addProductToCart }: Props) => {
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
            <Currency />
            <ProductsList addProductToCart={addProductToCart} />
            <TotalPrice cartData={cartData} />
        </>
    )
}

export default ShopPage
