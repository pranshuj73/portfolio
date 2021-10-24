import Head from 'next/head';
import Navbar from '../components/navbar';
import Main from '../components/main';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Pranshu Jha</title>
        <meta name="description" content="Pranshu Jha's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />

    </main>
  )
}
