import ProductDetailsCard from "@/modules/ProductDetailsCard/ProductDetailsCard";

import { getProductById } from "@/api/products";

const OneProductPage = async ({params})=> {
    const data = await getProductById(params.id);

    return (
        <ProductDetailsCard {...data} />
        // <ProductDetailsCard name={data.name} price={data.price} id={data.id} />
    )
}

export default OneProductPage;