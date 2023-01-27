import { ProductProps } from '../Products/ProductsList'
import { calculatePrice } from '../../utils/currency'
import { CurrencyCoef } from '../../pages/ShopPage/ShopPage'
import { useCallback } from 'react'

type Props = {
    cartData: {
        products: ProductProps[];
    },
    currency: CurrencyCoef;
}

const TotalPrice = ({ cartData, currency }: Props) => {
    const getTotalPrice = useCallback(() => {
      let totalPrice = 0;

      cartData.products.forEach((product) => {
        totalPrice += calculatePrice(product.price, currency.coefficient);
      });

      return totalPrice;
    }, [cartData, currency]);

    return (
        <div>
            <div>Total:{getTotalPrice()}</div>
        </div>
    )
}

export default TotalPrice
