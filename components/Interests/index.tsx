import Title from "../common/Title";
import styles from "./interests.module.css";

export default function Interests() {
  return (
    <section className={styles.section}>
      <Title>Intereses</Title>
      <div className={styles.grid}>
        <div data-testid="grid-item" className={styles.gridItem}>
          Cine
        </div>
        <div data-testid="grid-item" className={styles.gridItem}>
          Lectura
        </div>
        <div data-testid="grid-item" className={styles.gridItem}>
          Tenis
        </div>
        <div data-testid="grid-item" className={styles.gridItem}>
          Tecnología
        </div>
        <div data-testid="grid-item" className={styles.gridItem}>
          Viajar
        </div>
        <div data-testid="grid-item" className={styles.gridItem}>
          Mascotas
        </div>
        <div data-testid="grid-item" className={styles.gridItem}>
          Música
        </div>
      </div>
    </section>
  );
}
