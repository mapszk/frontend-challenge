import styles from "./interests.module.css";

export default function Interests() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Intereses</h1>
      <div className={styles.grid}>
        <div className={styles.gridItem}>Cine</div>
        <div className={styles.gridItem}>Lectura</div>
        <div className={styles.gridItem}>Tenis</div>
        <div className={styles.gridItem}>Tecnología</div>
        <div className={styles.gridItem}>Viajar</div>
        <div className={styles.gridItem}>Mascotas</div>
        <div className={styles.gridItem}>Música</div>
      </div>
    </section>
  );
}
