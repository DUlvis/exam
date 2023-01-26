type Props = {
    cartData: {
        totalPrice: number
    }
}

const TotalPrice = ({ cartData }: Props) => {
    return (
        <div>
            <div>Total:{Math.trunc(cartData.totalPrice)}</div>
        </div>
    )
}

export default TotalPrice
