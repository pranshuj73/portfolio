import Footer from "@/components/footer";
import Header from "@/components/header";
import Introduction from "@/components/introduction";

export default function About() {
  return (
    <main className="flex screen-height flex-col items-center justify-between">
      <Header />
      <Introduction />
      <Footer />
    </main>
  )
}