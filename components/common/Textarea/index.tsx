"use client";

import styles from "./textarea.module.css";

interface Props {
  onChange: (value: string, name: string) => any;
  value: string | number;
  label?: string;
  name: string;
}

export default function Textarea({ onChange, value, label, name }: Props) {
  const handleChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    onChange(evt.currentTarget.value.toString(), name);
  };

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        data-testid="textarea"
        onChange={handleChange}
        className={styles.textarea}
        value={value}
        id={name}
      />
    </div>
  );
}
