import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide, useMediaQuery } from "@mui/material"
import { Colors } from "../../styles/theme"
import CloseIcon from "@mui/icons-material/Close"
import { useTheme } from '@mui/material/styles'
import FavoriteIcon from "@mui/icons-material/Favorite"
import { CartDetailInfoWrapper, CartDetailWrapper } from "../../styles/shoppingcart"
import CartDetail from "./CartDetail"
import { useCartContext } from "../../Contexts/UpdateCart"
import { useEffect } from "react"


const SlideTransition = (props) => {
    return <Slide direction="down" {...props} />
}


const ShoppingCart = ({ open, onClose, products }) => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const { productsInCart } = useCartContext()

    useEffect(() => {
        localStorage.setItem('shopping-cart', JSON.stringify(productsInCart))
    }, [productsInCart])


    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant='permanat'
            open={open}
        >
            <DialogTitle sx={{ background: Colors.secondary, color: '#fff' }}>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    Shopping Cart
                    <IconButton sx={{color:'#fff'}} onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box> 
            </DialogTitle>

            <DialogContent sx={{ backgroundColor: '#fff'}}>
                <CartDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    

                    <CartDetailInfoWrapper>
                       
                       <CartDetail products={products}/>
                        
                        <Box
                            display='flex'
                            alignItems='center'
                            sx={{ mt: 4, color: Colors.light }}
                        >
                            <FavoriteIcon sx={{ mr: 2 }}/>
                            Add To WishList
                        </Box>

                    </CartDetailInfoWrapper>
                </CartDetailWrapper>
            </DialogContent>
        </Dialog>

    )
}

export default ShoppingCart