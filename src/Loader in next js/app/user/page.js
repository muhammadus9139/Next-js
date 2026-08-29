

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=5');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  return data.products;
}

export default async function Page() {
  const products = await getProducts();

  return (
    <main>
      <h1>User page</h1>
      <div>
     {
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
         ))
     }
      </div>
    </main>
  );
}
