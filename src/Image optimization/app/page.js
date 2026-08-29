import Image from 'next/image';
import styles from '../style.module.css';

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.badge}>Next.js image optimization</p>
        <h1>Optimized images with the built-in Image component</h1>
        <p className={styles.text}>
          The <strong>next/image</strong> component automatically serves resized,
          compressed, and modern-format versions of the image for the browser.
        </p>

        <Image
          src="/example.svg"
          alt="Example illustration showing optimized image delivery"
          width={800}
          height={450}
          priority
          className={styles.image}
        />

        <ul className={styles.list}>
          <li>Automatic responsive sizing</li>
          <li>Lazy loading by default</li>
          <li>Modern format support like WebP/AVIF</li>
        </ul>
      </section>
    </main>
  );
}
