import './Currency.scss'

type Props = {}

const Currency = (props: Props) => {
    return (
        <div className="currency">
            <button>EUR</button>
            <button>USD</button>
            <button>UAH</button>
            <button>PLN</button>
        </div>
    )
}

export default Currency
