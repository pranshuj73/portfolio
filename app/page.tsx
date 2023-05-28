import Footer from '@/components/footer'
import Header from '@/components/header'
import Landing from '@/components/landing'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Landing />
      <Footer />
    </main>
  )
}
