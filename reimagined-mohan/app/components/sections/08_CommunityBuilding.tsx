"use client";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function CommunityBuilding() {
  return (
    <motion.section
      {...sectionAnimation}
      className="w-screen h-screen flex justify-center items-center p-8 box-border bg-ethereal"
    >
      <div className="w-full max-w-5xl text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 font-space">
          Building the Movement
        </h2>
        <div className="glass-dark p-10 rounded-3xl">
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Partner with <span className="text-purple-400 font-semibold">cafés and creative hubs</span> for pop-up literary events, including readings, workshops, and unique <span className="text-pink-400 font-semibold">"AI x Literature" salons</span> to bridge physical and digital worlds.
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">☕</span>
              </div>
              <p className="text-purple-400 font-semibold">Café Events</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <p className="text-pink-400 font-semibold">Creative Hubs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <p className="text-blue-400 font-semibold">AI Salons</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
