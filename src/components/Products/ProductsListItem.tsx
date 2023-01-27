import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    type: string
    capacity: string
    price: number
    addProductToCart: () => void
    currencyCoef: {
        coefficient: number
        name: string
    }
}
const ProductsListItem = ({
    title,
    type,
    capacity,
    price,
    addProductToCart,
    currencyCoef,
}: Props) => {
    const superPrice = Math.trunc(price * currencyCoef.coefficient)
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-features">
                    <span>Type:</span> {type}{' '}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity}Gb
                </div>
                <div className="product-price">
                    <span>Price:</span> {superPrice}
                    {currencyCoef.name}
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined" onClick={() => addProductToCart()}>
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
