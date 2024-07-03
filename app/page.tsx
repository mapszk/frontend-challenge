import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Interests from "@/components/Interests";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <Toaster position="bottom-center" />
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
}
