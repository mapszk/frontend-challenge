import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/profile.jpg"
          fill={true}
          alt="Profile image"
        />
      </div>
      <div className={styles.texts}>
        <h1 className={styles.title}>John Doe</h1>
        <h2 className={styles.subtitle}>Desarrollador web</h2>
      </div>
    </header>
  );
}
