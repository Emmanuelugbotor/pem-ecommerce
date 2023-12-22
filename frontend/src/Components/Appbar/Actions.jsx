import { Box, Divider, ListItemButton, ListItemIcon } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from "@mui/icons-material/Search"
import PersonIcon from '@mui/icons-material/Person'
import { ActionsIconsContainerMobile, ActionsIconsContainerDesktop, MyList } from '../../styles/appbar'
import { useUIContext } from "../../Contexts/ui"
import ShoppingCart from '../ShoppingCart'
import useDialogModal from '../../Hooks/useDialogModal'
import { useCartContext } from '../../Contexts/UpdateCart'


function Actions({ matches }) {
    const Component = matches ? ActionsIconsContainerMobile : ActionsIconsContainerDesktop

    const { setShowSearchBox } = useUIContext()

    const { productsInCart } = useCartContext()

    const [CartDetailDialog, showCartDetailDialog] = useDialogModal(ShoppingCart)

    
    return (
        <Component>

            <MyList type='row'>

                <ListItemButton sx={{justifyContent: 'center'}}>
                    <ListItemIcon 
                        sx={{
                            display: 'flex', 
                            justifyContent: 'center',
                            color: matches
                        }}
                    >
                        <PersonIcon/>
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation='vertical' flexItem/>

                <ListItemButton sx={{justifyContent: 'center'}}>
                    <ListItemIcon 
                        sx={{
                            display: 'flex', 
                            justifyContent: 'center',
                            color: matches
                        }}
                    >
                        <SearchIcon onClick={() => setShowSearchBox(true) }/>
                    </ListItemIcon>
                </ListItemButton>
                
                <Divider orientation='vertical' flexItem/>

                <ListItemButton 
                    sx={{justifyContent: 'center'}}
                    onClick={() => showCartDetailDialog()}
                >
                    <ListItemIcon 
                        sx={{
                            display: 'flex', 
                            justifyContent: 'center',
                            color: matches,
                        }}
                    >
                       <ShoppingCartIcon/> 
                       
                       {productsInCart.length > 0 && (
                            <Box 
                                component="span" 
                                sx={{
                                    marginTop: '-5px',
                                    borderRadius: '12px',
                                    color: "#000",
                                    overflow: 'hidden',
                                }}
                            >
                                {productsInCart.length}
                            </Box>
                        )}
                       
                    </ListItemIcon>
                </ListItemButton>

                <CartDetailDialog products={productsInCart} />
            </MyList>
        </Component>
    
  )
}

export default Actions