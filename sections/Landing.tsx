"use client";

import {Divider} from "@nextui-org/react";
import Section from '@/components/Section';
import { motion } from 'framer-motion'
import LocalTime from "@/components/LocalTime";
import Image from "next/image";

import { Manrope } from "next/font/google"

const headingFont = Manrope({
  weight: "600",
  subsets: ["latin"],
});

export default function Landing() {
  // get the local time of a particular timezone
  let date = new Date();
  let options = {timeZone: 'America/New_York'};
  let eastCoastTime = date.toLocaleString('en-US', options);


  const headingContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({ opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 * i }, }),
  };

  const headingChild = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100,}, },
    hidden: { opacity: 0, y: 40, transition: { type: "spring", damping: 12, stiffness: 100,}, },
  };

  const detailsContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({ opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.5 + 0.12 * i, delay: 0.5 }, }),
  };

  const detailsChild = {
    visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 12, stiffness: 100}, },
    hidden: { opacity: 0, x: -40, transition: { type: "spring", damping: 12, stiffness: 100}, },
  };

  return (
    <Section className="md:max-w-screen-xl text-heading" id='hey'>
      <motion.div className="w-full -mt-[15%] md:mt-0 mb-[5%]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <motion.div
          variants={detailsContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-between mb-2"
        >
          <motion.p variants={detailsChild}>Based in Chennai, IN → <LocalTime /></motion.p>
          <motion.p variants={detailsChild} className="hidden md:block">✦ Status → <b>Open to work</b></motion.p>
        </motion.div>

        <Divider  />

      </motion.div>
      <motion.div
        variants={headingContainer}
        initial="hidden"
        animate="visible"
        className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold w-full p-0 ${headingFont.className}`}
      >
        <motion.span variants={headingChild} className="inline-block mr-2 sm:mr-4 md:mr-6">Hey!</motion.span>
        <motion.span variants={headingChild} className="inline-block mr-2 sm:mr-4 md:mr-6">I'm</motion.span>
        <motion.span variants={headingChild} className="inline-block mr-2 sm:mr-4 md:mr-6">Pranshu</motion.span>
        <motion.div variants={headingChild} className="inline-block">
          <Image className="h-auto w-10 xs:w-12 sm:w-14 md:w-18 lg:w-24 -mb-2" src="/smiley.svg" alt="smiley svg" width={40} height={40} />
        </motion.div>
      </motion.div>

      <motion.div
        variants={detailsContainer}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col mt-[10%]"
      >
        <motion.span variants={detailsChild} className="my-2">Currently → <b>Senior Developer, Rook</b></motion.span>
        <motion.span variants={detailsChild} className="my-2">Studying → <b>BE CSE @ RIT</b></motion.span>
        {/* <span className="my-1">Previously → Google • Microsoft</span> */}
        <motion.span variants={detailsChild} className="my-2">Creating → <b>Magic ✨</b></motion.span>
      </motion.div>

      <a className='absolute bottom-20 w-8 h-8' href='#about'>
        <motion.svg
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="animate-bounce w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </a>
    </Section>
  )
}