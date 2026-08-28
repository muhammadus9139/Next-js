'use client';

import { useEffect, useState } from "react";

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function getProducts() {
            let response = await fetch("https://dummyjson.com/products");
            let data = await response.json();
            console.log(data);
            setProducts(data.products);
        }

        getProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>

            {
                products.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
