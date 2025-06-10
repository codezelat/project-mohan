"use client";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function CreativeConcept() {
  return (
    <motion.section
      {...sectionAnimation}
      className="w-screen h-screen flex justify-center items-center p-8 box-border bg-cosmic relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-900/30"></div>
      <div className="w-full max-w-5xl text-center animate-fade-in-up relative z-10">
        <div className="glass-dark p-12 rounded-3xl animate-glow">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 font-space">
            We Will Build a Myth
          </h2>
          <div className="text-left max-w-4xl mx-auto">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Our core creative is the <span className="text-purple-400 font-bold text-2xl">"Who is Mohan?"</span> digital campaign, designed to build a mythic identity for the author.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <h4 className="text-purple-400 font-semibold">Mystery</h4>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📖</span>
                </div>
                <h4 className="text-pink-400 font-semibold">Story Fragments</h4>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💭</span>
                </div>
                <h4 className="text-blue-400 font-semibold">Fan Theories</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
