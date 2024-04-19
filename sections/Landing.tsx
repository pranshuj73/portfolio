"use client";

import {Divider} from "@nextui-org/react";
import Section from '@/components/Section';
import { motion } from 'framer-motion'
import LocalTime from "@/components/LocalTime";
import Image from "next/image";

import { Manrope, Onest } from "next/font/google"
import ScrollIndicator from "@/components/ScrollIndicator";
import { useEffect } from "react";
import { hello } from "@/lib/hello";

const headingFont = Onest({
  weight: "600",
  subsets: ["latin"],
});

export default function Landing() {
  useEffect(() => { console.log(hello) }, []);

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
    <Section className="md:max-w-screen-2xl text-heading !mt-8" id='hey'>
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
        <motion.span variants={headingChild} className="inline-block mr-2 sm:mr-4 md:mr-6">Hi,</motion.span>
        <motion.span variants={headingChild} className="inline-block mr-2 sm:mr-4 md:mr-6">this</motion.span>
        <motion.span variants={headingChild} className="inline-block mr-2 sm:mr-4 md:mr-6">is</motion.span>
        <motion.span variants={headingChild} className="inline-block mr-2 sm:mr-4 md:mr-6">Pranshu.</motion.span>
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

      <a className='absolute bottom-28 w-8 h-8' href='#about'>
        <ScrollIndicator />
      </a>
    </Section>
  )
}