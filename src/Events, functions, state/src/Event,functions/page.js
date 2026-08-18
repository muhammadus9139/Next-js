'use client'; // client components like onclick ko use krny k liye use client likhna ha q k ye client side components hain or next js server pr b render hota ha

export default function Home() {

    const apple = (item) => {
        alert(item);
    }

    return (
        <main>
            <h1>Home page</h1>
            <button onClick={()=>apple("fruit")}>click me</button>
        </main>
    );
}

