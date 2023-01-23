import { Button, Card, CardActions, CardContent } from '@mui/material'
import { currencyObject } from 'components/Currency/Currency'
import './ProductsListItem.scss'

type Props = {
    title: string
    type: string
    capacity: string
    price: number
    addProductToCart: (price: number) => void
}
const ProductsListItem = ({
    title,
    type,
    capacity,
    price,
    addProductToCart,
}: Props) => {
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
                    <span>Price:</span>{' '}
                    {Math.trunc(price * currencyObject[3].coefficient)}
                    {currencyObject[3].name}
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(price)}
                >
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
