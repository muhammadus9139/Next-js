

export default async function getUsers() {
  const result = await fetch("https://dummyjson.com/products");
  return result.json();
}
