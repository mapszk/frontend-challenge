"use client";

import styles from "./input.module.css";

interface Props {
  type?: string;
  onChange: (value: string, name: string) => any;
  value: string | number;
  label?: string;
  name: string;
}

export default function Input({ type, onChange, value, label, name }: Props) {
  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    onChange(evt.currentTarget.value.toString(), name);
  };

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={styles.input}
        value={value}
        onChange={handleChange}
        type={type || "text"}
        id={name}
      />
    </div>
  );
}