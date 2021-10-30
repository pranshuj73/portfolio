import Image from 'next/image';
import pfp from '../public/pfp.png';

import { useState } from 'react';

import { BsCaretDownFill } from 'react-icons/bs';

export default function Main() {
  const [showIndicator, setShowIndicator] = useState(true);
  setTimeout(() => {
    setShowIndicator(false)
  }, 6000);
  return (
    <main className="pt-14 flex flex-col-reverse md:flex-row md:items-center justify-center min-h-screen" id="main">
      <section className="md:w-5/12 flex flex-col justify-center items-center my-2 md:pr-2">
        <div className="px-3 text-center md:text-left">
          <p className="px-1 text-xl sub-text hidden md:block">Hi, my name is</p>
          <h1 className="md:flex mb-3">Pranshu Jha<span className="hidden md:block">.</span></h1>
          <p className="px-1 text-xl md:text-3xl sub-text">I like building things for the web.</p>
          <p className="sub-text text-sm md:text-lg mt-2">Aspring Software Developer, currently in first year of my Bachelors in CSE.<br className="hidden sm:block md:hidden"/> Currently working on upskilling myself & exploring new tech.</p>
        </div>
      </section>
      <section className="md:w-5/12 flex flex-col justify-center items-center my-2 md:border-l-2">
        <div className="min-w-[200px] lg:min-w-[300px] md:w-5/12 lg:w-4/12 shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out rounded-full">
          <Image alt="Pranshu Jha" src={pfp} layout="responsive" />
        </div>
      </section>
      <i className={showIndicator ? 'absolute bottom-7 left-1/2 -m-3.5 animate-bounce' : 'hidden'}><BsCaretDownFill size="1.75em" /></i>
    </main>
  )
}