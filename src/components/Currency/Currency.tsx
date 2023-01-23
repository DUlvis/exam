import './Currency.scss'

type Props = {}

type CurrencyProps = {
    id: number
    name: string
    coefficient: number
}
export const currencyObject: CurrencyProps[] = [
    {
        id: 1,
        name: 'EUR',
        coefficient: 1,
    },
    {
        id: 2,
        name: 'USD',
        coefficient: 1.09,
    },
    {
        id: 3,
        name: 'UAH',
        coefficient: 39.91,
    },
    {
        id: 4,
        name: 'PLN',
        coefficient: 4.71,
    },
]
const Currency = (props: Props) => {
    return (
        <div className="currency">
            <button>{currencyObject[0].name}</button>
            <button>{currencyObject[1].name}</button>
            <button>{currencyObject[2].name}</button>
            <button>{currencyObject[3].name}</button>
        </div>
    )
}

export default Currency
