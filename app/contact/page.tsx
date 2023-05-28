import ContactForm from "@/components/contactFrom";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact() {
  return (
    <main className="flex screen-height flex-col items-center justify-between">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  )
}