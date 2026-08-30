import getUsers from '../../../../services/getUsers';

export async function generateStaticParams() {
  const data = await getUsers();
  const products = data?.products ?? [];

  return products.map((item) => ({ userId: String(item.id) }));
}

export default async function Page({ params }) {
  const { userId } = params;
  const data = await getUsers();
  const products = data?.products ?? [];
  const product = products.find((item) => String(item.id) === String(userId));

  if (!product) {
    return (
      <div>
        <h3>User detail page</h3>
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div>
      <h3>User detail page</h3>
      <h4>id: {product.id}</h4>
      <h4>title: {product.title}</h4>
      <h4>brand: {product.brand}</h4>
      <h4>price: ${product.price}</h4>
    </div>
  );
}
