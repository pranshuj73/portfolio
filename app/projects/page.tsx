import Footer from "@/components/footer";
import Header from "@/components/header";
import Showcase from "@/components/showcase";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Showcase />
      <Footer />
    </main>
  )
}