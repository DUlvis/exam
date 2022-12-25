import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                List of Products
            </Typography>
            <ProductsList />
        </>
    )
}

export default Home
