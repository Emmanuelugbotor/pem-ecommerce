import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material"
import { Colors } from "../../styles/theme"
import CloseIcon from "@mui/icons-material/Close"
import { styled } from "@mui/system"
import { useTheme } from "@emotion/react"
import { Product, ProductImage } from "../../styles/products"
import IncrementDecrement from "../UI"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import FavoriteIcon from "@mui/icons-material/Favorite"

function SlideTransition(props) {
    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4)
}))

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineWeight: 1.5
}))


function ProductDetail({ open, onClose, product }) {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant='permanat'
            open={open}
            fullScreen
        >
            <DialogTitle sx={{ background: Colors.secondary }}>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    Product Title
                    <IconButton onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box> 
            </DialogTitle>

            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{ mr: 4 }}>
                        <ProductImage src={product.image} />
                    </Product>

                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle1">SKU 123</Typography>

                        <Typography variant="subtitle1">
                            Availability: 5 in stock
                        </Typography>

                        <Typography sx={{ lineHeight: 2 }} variant='h4'>
                            {product.name}
                        </Typography>

                        <Typography variant='body'>
                            {product.description}
                            {product.description}
                            {product.description}
                        </Typography>

                        <Box
                            sx={{ mt: 4 }}
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                        >
                            <IncrementDecrement/>
                            <Button variant="contained">Add to Cart</Button>
                        </Box>
                        
                        <Box
                            display='flex'
                            alignItems='center'
                            sx={{ mt: 4, color: Colors.light }}
                        >
                            <FavoriteIcon sx={{ mr: 2 }}/>
                            Add To WishList
                        </Box>

                        <Box sx={{ mt: 4, color: Colors.light }}>
                            <FacebookIcon/>
                            <TwitterIcon sx={{ pl: theme.spacing(4) }}/>
                            <InstagramIcon sx={{ pl: theme.spacing(4) }}/>
                        </Box>
                        
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>

    )
}

export default ProductDetail