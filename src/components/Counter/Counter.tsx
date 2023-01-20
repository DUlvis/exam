import { useState } from 'react'

type Props = {}

const Counter = (props: Props) => {
    const [count, setCount] = useState<number>(0)

    const changeCount = () => {
        setCount((prevState: number) => prevState + 1)
    }

    return (
        <>
            <button onClick={() => changeCount()}>Change count{count}</button>
        </>
    )
}

export default Counter
