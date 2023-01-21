import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import Currency from 'components/Сurrency/Currency'
type Props = {
    cartData: {
        totalPrice: number
    }
}

const ShopPage = ({ cartData }: Props) => {
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
            <ProductsList />
            <TotalPrice cartData={cartData} />
        </>
    )
}

export default ShopPage
