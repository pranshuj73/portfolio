"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import simpleParallax from 'simple-parallax-js';

export default function ParallaxImage() {

  const imageRef = useRef(null);
  useEffect(() => {
    new simpleParallax(imageRef.current!, {
      scale: 1.2,
      delay: 0.6,
      transition: 'cubic-bezier(0.17, 0.87, 1, 1)'
    });
  }, []);

  return (
    <div className="m-4 w-full h-full min-h-[60vh] relative overflow-hidden rounded-lg grayscale hover:grayscale-0 duration-700 delay-150 transition-all ease-soft-spring">
      <Image ref={imageRef} src={"/about.jpg"} fill priority className="object-cover object-center" alt="Pranshu Jha" />
    </div>
  );
}