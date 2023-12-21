import React from 'react'
import { Button, ButtonBase, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { CartImg } from '../../styles/shoppingcart'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { useCartContext } from '../../Contexts/UpdateCart';

const CartDetail = ({ products }) => {
  
    const { setProductsInCart } = useCartContext()

    const onQuantityChange = (productId, count) => {
        setProductsInCart((oldState) => {
            const productsIndex = oldState.findIndex((item) => item.id === productId)
            if (productsIndex !== -1) {
                oldState[productsIndex].count = count
            }
            return [...oldState]
        })
    }

    const onProductRemove = product => {
        setProductsInCart((oldState) => {
            const productsIndex = oldState.findIndex((item) => item.id === product.id)
            if (productsIndex !== -1) {
                oldState.splice(productsIndex, 1)
            }
            return [...oldState]
        })
    }


    return (
        <>
            {products.length === 0 && (

                <Typography sx={{ lineHeight: 2 }} variant='h6'>
                    Your basket is currently empty
                </Typography>
            )}

            {products.map((product) => (
                <Grid container spacing={3}>

                    <Grid item key={product.id}>
                        <ButtonBase sx={{ width: 128, height: 128, mb:6 }}>
                            <CartImg src={product.image}/>
                        </ButtonBase>
                    </Grid>

                    <Grid item xs={12} sm container mt={5}>
                        <Grid item xs container direction="column" spacing={2}>

                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {product.name}
                                </Typography>

                                <Typography variant="body2" gutterBottom>
                                    ${product.price * product.count}
                                </Typography>
                            </Grid>

                        </Grid>

                        <Grid item xs>

                            <Select
                                value={product.count}
                                label={product.count}
                                type='number'
                                onChange={(event) => {
                                    onQuantityChange(
                                        product.id,
                                        event.target.value
                                    )
                                    }}
                                    sx={{ m: 1, minWidth: 120, height: 30 }}
                            >
                                {[...Array(10).keys()].map(number => {
                                    const num = number + 1;
                                    return <MenuItem value={num} key={num}>{num}</MenuItem>
                                })}
                            </Select>
                        </Grid>

                        <Grid item>
                            <IconButton onClick={() => onProductRemove(product)}>
                                <DeleteForeverOutlinedIcon/>
                            </IconButton>
                        </Grid>
                            
                    </Grid>

                </Grid>
            ))}


            {products.length > 0 && (

                <Button
                    sx={{ mt:1, mb:1 }}
                    variant='contained'
                >
                   Proceed to Checkout
                </Button>
            )}
        </>
    )
}

export default CartDetail