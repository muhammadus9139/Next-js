'use client';
import { useState } from 'react';
import style from '../style.module.css';

export default function Page() {

    const [color, setColor] = useState('green');

    return (
        <main>
            <h1 className={color === 'red' ? style.red : style.green}>
                Condition style
            </h1>

            <h2 style={{ backgroundColor: color === 'red' ? 'red' : 'green' }}>
                heading 2
            </h2>
            <button onClick={() => setColor(color === 'red' ? 'green' : 'red')}>
                Toggle Color
            </button>

            <h3 id={style.brown}>heading 3</h3>
        </main>
    );
}
