import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import ShopPage from 'pages/ShopPage/ShopPage'
import './App.scss'

const App = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <ShopPage />
            </Container>
        </>
    )
}

export default App
