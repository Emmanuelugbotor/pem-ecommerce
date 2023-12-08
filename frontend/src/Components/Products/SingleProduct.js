import { Product, ProductImage } from "../../styles/products"
import ProductMeta from "./ProductMeta"

function SingleProduct({product, matches}) {
    return (
        <Product>
            <ProductImage src={product.image}/>
            <ProductMeta product={product} matches={matches}/>
        </Product>
  )
}

export default SingleProduct
