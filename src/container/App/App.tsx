import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Counter from 'components/Counter/Counter'
import './App.scss'

const App = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <h1>COUNTER</h1>
                <div>
                    <Counter />
                    <Counter />
                    <Counter />
                </div>
            </Container>
        </>
    )
}

export default App
