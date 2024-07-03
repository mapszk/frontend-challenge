"use client";

import styles from "./textarea.module.css";

interface Props {
  placeholder?: string;
  onChange: (value: string, name: string) => any;
  value: string | number;
  label?: string;
  name: string;
}

export default function Textarea({
  placeholder,
  onChange,
  value,
  label,
  name,
}: Props) {
  const handleChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    onChange(evt.currentTarget.value.toString(), name);
  };

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        data-testid="textarea"
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.textarea}
        value={value}
        id={name}
      />
    </div>
  );
}
