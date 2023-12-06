import { ThemeProvider } from '@mui/system'
import { Button, Container } from '@mui/material'
import { useEffect } from 'react'
import theme from './styles/theme'

// COMPONENETS
import Appbar from './Components/Appbar'

function App() {

  useEffect(() => {
    document.title = 'Ecommerce Home'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>
        <Appbar/>
        {/* Appbar
            Banner
            Promotions
            Title
            Products
            Footer
            Searchbox
            Appdrawer */}
        <Button variant='contained'>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
