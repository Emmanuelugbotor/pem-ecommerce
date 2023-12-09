import { useState } from "react"
import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products"
import ProductMeta from "./ProductMeta"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FitScreenIcon from "@mui/icons-material/FitScreen"


function SingleProductDesktop({product, matches}) {

    const [showOptions, setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true)
    }
    const handleMouseLeave = () => {
        setShowOptions(false)
    }

    return (
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image}/>
            <ProductFavButton isFav={0}>
                <FavoriteIcon/>
            </ProductFavButton>
            {showOptions && (
                <ProductAddToCart show={showOptions} variant="contained">
                    Add To Cart
                </ProductAddToCart>
            )}
            <ProductActionsWrapper show={showOptions}>
                <Stack direction='column'>
                    <ProductActionButton>
                        <ShareIcon color='primary'/>
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreenIcon color='primary'/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>  
        <ProductMeta product={product} matches={matches}/>
        </>
    )
}

export default SingleProductDesktop
