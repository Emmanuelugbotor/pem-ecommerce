import { ThemeProvider } from '@mui/system'
import { Container, Typography, Box } from '@mui/material'
import { useEffect } from 'react'
import theme from './styles/theme'

// COMPONENTS
import Appbar from './Components/Appbar'
import Banner from './Components/Banner'
import Promotions from './Components/Promotions'
import Products from './Components/Products/'
import Footer from './Components/Footer'
import AppDrawer from './Components/AppDrawer'
import { UIProvider } from './Contexts/ui'
import SearchBox from './Components/Search'

function App() {

  useEffect(() => {
    document.title = 'E-Commerce'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>

        <UIProvider>
          <Appbar/>

          <Banner/>

          <Promotions/>

          <Box display='flex' justifyContent='center' sx={{ p:4 }}>
            <Typography variant='h4'>
              Product Features
            </Typography>
          </Box>

          <Products/>

          <Footer/>

          <AppDrawer/>

          <SearchBox/>
        
        </UIProvider>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;
