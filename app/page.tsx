import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Interests from "@/components/Interests";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
}
