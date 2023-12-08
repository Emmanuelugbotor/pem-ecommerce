import { ThemeProvider } from '@mui/system'
import { Button, Container, Typography, Box } from '@mui/material'
import { useEffect } from 'react'
import theme from './styles/theme'

// COMPONENTS
import Appbar from './Components/Appbar'
import Banner from './Components/Banner'
import Promotions from './Components/Promotions'
import Products from './Components/Products/'

function App() {

  useEffect(() => {
    document.title = 'Ecommerce Home'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>
        
        <Appbar/>
        <Banner/>
        <Promotions/>
        <Box display='flex' justifyContent='center' sx={{ p:4 }}>
          <Typography variant='h4'>
            Our Products
          </Typography>
        </Box>
        <Products/>

      </Container>
    </ThemeProvider>
  );
}

export default App;
