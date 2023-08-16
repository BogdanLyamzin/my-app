import ProductList from "@/modules/ProductList/ProductList";

import { getAllProducts } from "@/api/products";

const Products = async ()=> {
    const data = await getAllProducts();

    return (
        <ProductList items={data} />
    )
}

export default Products;