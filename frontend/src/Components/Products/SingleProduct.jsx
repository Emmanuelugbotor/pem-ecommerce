import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products"
import ProductMeta from "./ProductMeta"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import useDialogModal from "../../Hooks/useDialogModal"
import ProductDetail from "../ProductDetail"
import { useCartContext } from "../../Contexts/UpdateCart"

function SingleProduct({product, isMobile}) {

    const [ ProductDetailDialog, showProductDetailDialog ] = useDialogModal(ProductDetail)

    const { addProductToCart } = useCartContext()

    return (
        <>
        <Product>
            <ProductImage src={product.image}/>

            <ProductMeta product={product} isMobile={isMobile}/>

            <ProductActionsWrapper>
                <Stack direction='row'>
                    <ProductFavButton isFav={0}>
                        <FavoriteIcon/>
                    </ProductFavButton>

                    <ProductActionButton>
                        <ShareIcon color='primary'/>
                    </ProductActionButton>
                    
                    <ProductActionButton onClick={() => showProductDetailDialog()}>
                        <FitScreenIcon color='primary'/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>

        <ProductAddToCart 
            variant="contained" 
            onClick={() => addProductToCart(product)}
        >
            Add To Cart
        </ProductAddToCart>
        <ProductDetailDialog product={product} />
        </>
    )
}

export default SingleProduct
