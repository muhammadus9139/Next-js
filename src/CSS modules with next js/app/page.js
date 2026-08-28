import custom from './custom.module.css';
import other from './other.module.css';
import outside from './style/outside.module.css';

export default function User() {
    return (
        <main>
            <h1 className={outside.main}>
                Style and CSS with Next.js
            </h1>
            <h1 className={other.main}>
                Style and CSS with Next.js
            </h1>
            <h1 className={custom.main}>
                Style and CSS with Next.js
            </h1>
        </main>
    );
}
