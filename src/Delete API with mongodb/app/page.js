import Link from "next/link";
export default function Page() {
  
  return (
    <main>
      <Link href="/addproduct"> Add products</Link>
      <br />
      <Link href="/productlist"> Product list</Link>

    </main>
  );
}
