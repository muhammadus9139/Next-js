import styles from '../../style.module.css';

export default function Loading() {
  return (
    <main className={styles.loaderPage}>
      <div className={styles.loaderCard}>
        <div className={styles.spinner} aria-label="Loading" />
        <h2>Loading user list...</h2>
        <p>Please wait while we fetch the latest products.</p>
      </div>
    </main>
  );
}
