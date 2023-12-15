import { useTheme } from "@mui/material/styles"
import { Container, Grid, Pagination, useMediaQuery } from "@mui/material"
import { products } from "../../Data"
import SingleProduct from "./SingleProduct"
import SingleProductDesktop from "./SingleProductDesktop"
import { useState } from "react"


function Products() {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const pageCount = (productLength, productsPerPage) => Math.ceil(productLength / productsPerPage)

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(9)

  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProducts = products.slice(firstProductIndex, lastProductIndex)


  const renderProducts = currentProducts.map(product => (
    
    <Grid 
      item 
      key={product.id} xs={2} sm={4} md={4}
      display='flex' 
      flexDirection='column' 
      alignItems='center'
    >
      {isMobile ? (
        <SingleProduct product={product} isMobile={isMobile}/>
      ) : (
        <SingleProductDesktop product={product} isMobile={isMobile}/>
      )}
    </Grid>

  ))

  return (
    <>
      <Container>
        <Grid 
          container
          spacing={{ xs:2, md: 3 }}
          justifyContent='center'
          sx={{ margin: '20px 4px 10px 4px' }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          >
          {renderProducts}
        </Grid>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 7
        }}
      >

        <Pagination 
          count={pageCount(products.length, productsPerPage)} 
          color="primary"
          size="large" 
          onChange={(e, value) => setCurrentPage(value)}
        />
        
      </Container>

    </>
  )
}

export default Products