import {Roboto} from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Page() {
  return (
    <main>
     <h1>Font optimization in next js</h1>
     <h1 className={roboto.className}>Font with next js font feature</h1>
    </main>
  );
}
