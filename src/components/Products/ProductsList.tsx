import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

export type ProductProps = {
    id: number
    title: string
    type: string
    capacity: string
    price: number
}

type Props = {
    addProductToCart: (product: ProductProps) => void
    currencyCoef: {
        coefficient: number
        name: string
    }
}

const ProductsList = ({ addProductToCart, currencyCoef }: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({ id, title, type, capacity, price }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title={title}
                                type={type}
                                capacity={capacity}
                                price={price}
                                addProductToCart={() => addProductToCart(
                                  { id, title, type, capacity, price }
                                )}
                                currencyCoef={currencyCoef}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
