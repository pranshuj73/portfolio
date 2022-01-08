import Head from 'next/head';

// COMPONENTS
import Navbar from '../components/navbar';
import Main from '../components/main';
import About from '../components/about';
// import Projects from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <main className="dark:bg-primary bg-gray-100">
      <Head>
        <title>Pranshu Jha</title>
        <meta name="description" content="Pranshu Jha's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      {/* <Projects /> */}
      <Contact />

    </main>
  )
}
