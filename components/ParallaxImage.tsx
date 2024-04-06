"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import simpleParallax from 'simple-parallax-js';

export default function ParallaxImage({src, alt, className}: {src: string, alt: string, className?: string}) {

  const imageRef = useRef(null);
  useEffect(() => {
    new simpleParallax(imageRef.current!, {
      scale: 1.5,
      delay: 0.6,
      transition: 'cubic-bezier(0.17, 0.87, 1, 1)'
    });
  }, []);

  return (
    <div className={`w-full min-w-[50%] h-full min-h-[500px] md:min-h-[85vh] relative overflow-hidden ${className}`}>
      <Image ref={imageRef} src={src} fill priority className="object-cover object-center" alt={alt} />
    </div>
  );
}