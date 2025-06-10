"use client";
import { motion } from "framer-motion";

const animationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function Hero() {
  return (
    <motion.section
      {...animationProps}
      className="w-full min-h-screen flex justify-center items-center p-8 box-border bg-cosmic relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="w-full max-w-5xl text-center glass-dark p-8 md:p-12 rounded-3xl relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 font-space mb-6 shimmer-text">
            Who is Mohan?
          </h1>
        </div>
        <h3 className="text-xl md:text-3xl text-slate-300 mt-8 font-light leading-relaxed">
          A revolutionary project to{" "}
          <span className="text-purple-400 font-semibold">reimagine Sri Lankan literature</span> for the digital age.
        </h3>
        <div className="mt-10 p-6 glass rounded-2xl animate-glow">
          <p className="text-lg text-purple-300 font-medium">
            Fusing magic realism with artificial intelligence to create a transcendent literary icon for CIBF 2025.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
