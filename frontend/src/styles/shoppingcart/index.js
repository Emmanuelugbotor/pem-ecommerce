import { styled } from "@mui/material/styles"
import { Box } from "@mui/system"


export const CartDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4),
    color: '#696969'
}))


export const CartDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineWeight: 1.5,
}))


export const CartImg = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
})