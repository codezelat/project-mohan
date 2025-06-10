"use client";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function SocialStrategy() {
  return (
    <motion.section
      {...sectionAnimation}
      className="w-screen h-screen flex justify-center items-center p-8 box-border bg-gradient-to-bl from-slate-900 via-purple-900/20 to-pink-900/20"
    >
      <div className="w-full max-w-5xl text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 font-space">
          Engaging Audiences Where They Live
        </h2>
        <div className="glass-dark p-10 rounded-3xl">
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Prioritizing <span className="text-purple-400 font-bold">TikTok, YouTube Shorts, and Facebook Reels</span> for fast, trend-driven engagement. Our content recreates dream-like scenes from the books, amplified by paid collaborations with Gen Z influencers.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="glass p-6 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📱</span>
              </div>
              <h4 className="text-pink-400 font-semibold text-lg">TikTok</h4>
            </div>
            <div className="glass p-6 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎬</span>
              </div>
              <h4 className="text-red-400 font-semibold text-lg">YouTube Shorts</h4>
            </div>
            <div className="glass p-6 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📘</span>
              </div>
              <h4 className="text-blue-400 font-semibold text-lg">Facebook Reels</h4>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
