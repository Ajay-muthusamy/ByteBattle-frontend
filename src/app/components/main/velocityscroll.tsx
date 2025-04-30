import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className=" whitespace-nowrap flex">
      <motion.div className="text-2xl md:text-5xl font-semibold uppercase text-white" style={{ x }}>
        <span className="mr-6">{children}</span>
        <span className="mr-6">{children}</span>
        <span className="mr-6">{children}</span>
        <span className="mr-6">{children}</span>
      </motion.div>
    </div>
  );
}

export default function VelocityScroll() {
  return (
    <section className="flex flex-col py-10 pop bg-[#2b0a41] rounded-lg mt-20 space-x-2 pop">
      <ParallaxText baseVelocity={-5} >HTML - CSS -  JAVASCRIPT - </ParallaxText>
      <ParallaxText baseVelocity={1} >REACT JQUERY TYPESCRIPT</ParallaxText>
    </section>
  );
}
