import Head from 'next/head';
import React from "react";

// components
import Navbar from '../components/navbar';
import Main from '../components/main';
import About from '../components/about';

// fullpage
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Pranshu Jha</title>
        <meta name="description" content="Pranshu Jha's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ReactFullpage
          navigation
          render={comp => (
              <ReactFullpage.Wrapper>
                <div className="section"><Main /></div>
                <div className="section"><About /></div>
              </ReactFullpage.Wrapper>
            )
          }
      />
    </main>
  )
}
