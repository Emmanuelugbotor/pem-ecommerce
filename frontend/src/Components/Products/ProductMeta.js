import { Typography } from "@mui/material"
import { ProductMetaWrapper } from "../../styles/products"



function ProductMeta({ product, isMobile }) {
    return (
        <ProductMetaWrapper>
            <Typography variant={isMobile ? 'h6' : 'h5'} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography variant={isMobile ? 'caption' : 'body1'}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}

export default ProductMeta