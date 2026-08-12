export default function Home() {
    return (
        <main>
            <h1>Home page</h1>
            <User name="usama" />
            <User name="ali" />
            <User name="ahmad" />
        </main>
    );
}

const User = (props) => {
    return (
        <div>
            <h2>User component: {props.name}</h2>
        </div>
    );
};
