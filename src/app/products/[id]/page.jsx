import ProductDetailsCard from "@/modules/ProductDetailsCard/ProductDetailsCard";

import { getAllProducts, getProductById } from "@/api/products";

export async function generateStaticParams() {
    const data = await getAllProducts();

    return data.map(({id}) => ({
        id,
    }))
}

const OneProductPage = async ({params})=> {
    const data = await getProductById(params.id);

    return (
        <ProductDetailsCard {...data} />
        // <ProductDetailsCard name={data.name} price={data.price} id={data.id} />
    )
}

export default OneProductPage;