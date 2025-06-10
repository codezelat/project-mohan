"use client";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

const cardAnimationLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
}

const cardAnimationRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
}


export default function MarketAnalysis() {
  return (
    <motion.section
      {...sectionAnimation}
      className="w-full min-h-screen flex justify-center items-center p-8 box-border bg-ethereal relative"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12 font-space">
          A New Cultural Economy Awaits
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-lg">
          <motion.div {...cardAnimationLeft} className="glass-dark p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h4 className="font-bold text-white text-2xl mb-4 font-space">
              Digitally-Driven Audiences
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Gen Z & Millennials crave{" "}
              <span className="text-purple-400 font-semibold">novel, visual, and shareable experiences</span>. Traditional book marketing doesn't reach them.
            </p>
          </motion.div>
          <motion.div {...cardAnimationRight} className="glass-dark p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h4 className="font-bold text-white text-2xl mb-4 font-space">
              The Next Wave
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Gen Alpha is captivated by{" "}
              <span className="text-blue-400 font-semibold">interactive and gamified content</span> like chatbots and AR experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
