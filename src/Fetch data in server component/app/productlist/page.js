// 'use client';
// import { useEffect, useState } from "react";

async function productlist() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products;
}

export default async function Page() {
    const products = await productlist();
    console.log(products);

    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    );
                })
            }
        </div>
    );

}
