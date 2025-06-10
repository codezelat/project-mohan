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
};

const cardAnimationRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function AiFeatures() {
  return (
    <motion.section
      {...sectionAnimation}
      className="w-screen h-screen flex justify-center items-center p-8 box-border bg-ethereal"
    >
      <div className="w-full max-w-6xl animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12 font-space">
          AI-Powered Storytelling
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...cardAnimationLeft} className="glass-dark p-8 rounded-2xl card-hover">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </div>
            <h4 className="font-bold text-white text-2xl mb-4 font-space">Surreal Cinematic Clips</h4>
            <p className="text-slate-300 text-lg leading-relaxed">
              AI-generated campaign of short, surreal video clips that evoke the <span className="text-purple-400 font-semibold">mood of magic realism</span>, not just sell a plot.
            </p>
          </motion.div>
          <motion.div {...cardAnimationRight} className="glass-dark p-8 rounded-2xl card-hover">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-white text-2xl mb-4 font-space">Interactive AI Chatbot</h4>
            <p className="text-slate-300 text-lg leading-relaxed">
              Exclusive chatbot for <span className="text-blue-400 font-semibold">roleplaying with literary characters</span>, accessed via QR codes in books and events.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
