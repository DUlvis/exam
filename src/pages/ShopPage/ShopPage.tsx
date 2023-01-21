import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
type Props = {}

const ShopPage = (props: Props) => {
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
            <ProductsList />
        </>
    )
}

export default ShopPage
