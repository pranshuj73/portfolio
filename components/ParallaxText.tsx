"use client"

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function Parallax({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 500
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -125, v)}%`);



  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
      <motion.div className="mx-3 opacity-60 text-2xl w-full flex flex-nowrap whitespace-nowrap transition-all ease-soft-spring duration-1000" style={{ x }}>
        <span className="mx-1">{children}</span>
        <span className="mx-1">{children}</span>
        <span className="mx-1">{children}</span>
        <span className="mx-1">{children}</span>
        <span className="mx-1">{children}</span>
      </motion.div>
  );
}

export default function ParallaxText() {
  return (
    <div className="overflow-hidden w-full my-16">
      <Parallax baseVelocity={-5}>Full-Stack Developer ● Web3 Enthusiast ● Building In Public ●</Parallax>
      <Parallax baseVelocity={5}>Full-Stack Developer ● Web3 Enthusiast ● Building In Public ●</Parallax>
    </div>
  )
};