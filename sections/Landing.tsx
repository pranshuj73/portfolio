"use client";

import Section from '@/components/Section';
import { motion } from 'framer-motion'

export default function Landing() {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1, y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100,},
    },
    hidden: {
      opacity: 0, y: 40,
      transition: { type: "spring", damping: 12, stiffness: 100,},
    },
  };

  return (
    <Section>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold uppercase'
      >
        <p>
          <motion.span variants={child} className="inline-block mr-6">Hey! </motion.span>
          <motion.span variants={child} className="inline-block mr-6">I'm </motion.span>
          <span className='whitespace-nowrap'>
            <motion.span variants={child} className="inline-block">Pranshu</motion.span>
            <motion.span variants={child} className="inline-block">,</motion.span>
          </span>
        </p>
        <p>
          <motion.span variants={child} className="inline-block mr-6">a </motion.span>
          <motion.span variants={child} className="inline-block">Full</motion.span>
          <motion.span variants={child} className="inline-block">-</motion.span>
          <motion.span variants={child} className="inline-block mr-6">Stack </motion.span>
          <motion.span variants={child} className="inline-block">Developer</motion.span>
        </p>
      </motion.div>

      <motion.svg
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-20 animate-bounce w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000"
      >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </motion.svg>
    </Section>
  )
}