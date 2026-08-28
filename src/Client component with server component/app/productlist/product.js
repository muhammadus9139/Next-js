'use client'

export default function Product({price}) {
    return (
        <div>
           <button onClick={()=>alert(price)}>Check price</button>
        </div>
    );
}
