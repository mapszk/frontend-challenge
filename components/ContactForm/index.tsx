"use client";

import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import styles from "./form.module.css";
import toast from "react-hot-toast";
import Title from "../common/Title";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeName = (value: string) => setName(value);
  const handleChangeEmail = (value: string) => setEmail(value);
  const handleChangeMessage = (value: string) => setMessage(value);

  const submit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!name) return toast.error("Debes ingresar un nombre");
    if (!email) return toast.error("Debes ingresar un email");
    if (!message) return toast.error("Debes ingresar un mensaje");
    try {
      setLoading(true);
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error();
      toast.success("Email enviado! Revisa tu correo");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error("Ha ocurrido un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <Title>Contacto</Title>
      <form onSubmit={submit} className={styles.form}>
        <Input
          onChange={handleChangeName}
          placeholder="Ingresa un nombre..."
          name="name"
          value={name}
          label="Nombre"
        />
        <Input
          onChange={handleChangeEmail}
          placeholder="Ingresa un email..."
          name="email"
          type="email"
          value={email}
          label="Email"
        />
        <Textarea
          onChange={handleChangeMessage}
          placeholder="Ingresa un mensaje..."
          name="message"
          value={message}
          label="Mensaje"
        />
        <Button disabled={loading} type="submit" className={styles.submit}>
          Enviar
        </Button>
      </form>
    </section>
  );
}
