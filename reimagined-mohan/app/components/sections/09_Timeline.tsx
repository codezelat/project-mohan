"use client";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function Timeline() {
  return (
    <motion.section
      {...sectionAnimation}
      className="w-screen h-screen flex justify-center items-center p-8 box-border bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20"
    >
      <div className="w-full max-w-5xl animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12 font-space">
          Our Path to Launch
        </h2>
        <div className="glass-dark p-10 rounded-3xl">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2 font-space">Phase 1: TEASE</h3>
                  <p className="text-slate-300 text-lg">Launch the \"Who is Mohan?\" mystery campaign. Host pop-up café events.</p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-pink-400 mb-2 font-space">Phase 2: LAUNCH</h3>
                  <p className="text-slate-300 text-lg">Release the AI cinematic clips and activate the chatbot.</p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2 font-space">Phase 3: IMMERSE</h3>
                  <p className="text-slate-300 text-lg">Unveil the full CIBF 2025 booth experience.</p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-2 font-space">Phase 4: AMPLIFY</h3>
                  <p className="text-slate-300 text-lg">Fuel conversation with influencer content and fan creations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
