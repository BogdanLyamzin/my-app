'use client'

import Link from "next/link";

import styles from "./product-list.module.css";

const ProductList = ({items = []}) => {
    const elements = items.map(({name, price, id})=> <li key={id} className={styles.item}><Link href={`/products/${id}`}>{name}</Link>. {price}</li>)

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default ProductList;
