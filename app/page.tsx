"use client";

import Scaffold from '@/components/Scaffold'
import { motion } from 'framer-motion'


export default function Home() {
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
    <Scaffold>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className='text-6xl md:text-8xl font-semibold uppercase leading-tight'
      >
        <motion.span variants={child} className="inline-block mr-6">Hey! </motion.span>
        <motion.span variants={child} className="inline-block mr-6">I'm </motion.span>
        <motion.span variants={child} className="inline-block">Pranshu</motion.span>
        <motion.span variants={child} className="inline-block">,</motion.span>
        <br/>
        <motion.span variants={child} className="inline-block mr-6">a </motion.span>
        <motion.span variants={child} className="inline-block">Full</motion.span>
        <motion.span variants={child} className="inline-block">-</motion.span>
        <motion.span variants={child} className="inline-block mr-6">Stack </motion.span>
        <motion.span variants={child} className="inline-block">Developer</motion.span>
      </motion.div>

      <motion.div
        className='absolute bottom-20'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <svg className="animate-bounce w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

    </Scaffold>
  )
}
