"use client";

import styles from "./button.module.css";

interface Props {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => any;
}

export default function Button({
  type,
  disabled,
  onClick,
  children,
  className,
}: Props) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type || "button"}
    >
      {children}
    </button>
  );
}
