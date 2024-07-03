import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="https://thispersondoesnotexist.com/"
          fill={true}
          alt="Profile image"
        />
      </div>
      <div className={styles.texts}>
        <h1 className={styles.title}>Martin Pilaszek</h1>
        <h2 className={styles.subtitle}>Front-end developer</h2>
      </div>
    </header>
  );
}
