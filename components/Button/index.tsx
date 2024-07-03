"use client";

import styles from "./button.module.css";

interface Props {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: () => any;
}

export default function Button({ type, onClick, children }: Props) {
  return (
    <button className={styles.button} onClick={onClick} type={type || "button"}>
      {children}
    </button>
  );
}
