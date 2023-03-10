import './Currency.scss'

type Props = {
    changeCurrency: (id: number) => void
}

type CurrencyProps = {
    id: number
    name: string
    coefficient: number
}

export const currencyArray: CurrencyProps[] = [
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
const Currency = ({ changeCurrency }: Props) => {
    return (
        <div className="currency">
            {currencyArray.map(({ id, name, coefficient }: CurrencyProps) => (
                <button
                    key={id}
                    onClick={() => changeCurrency(id)}
                >
                    {name}
                </button>
            ))}
        </div>
    )
}

export default Currency
