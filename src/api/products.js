import request from "./request";

export const getAllProducts = () => {
    return request("/products");
}

export const getProductById = id => {
    return request(`/products/${id}`)
}

export const addProduct = (body) => {
    return request("/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}