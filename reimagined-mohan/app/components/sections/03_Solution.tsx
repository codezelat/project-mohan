"use client";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function Solution() {
    return (
        <motion.section 
            {...sectionAnimation}
            className="w-screen min-h-screen flex justify-center items-center p-8 box-border bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20"
        >
            <div className="w-full max-w-5xl text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 font-space">
                    Legacy Meets Innovation
                </h2>
                <div className="glass-dark p-10 rounded-3xl animate-glow">
                    <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-light">
                    Position Mohan Madawala as the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                        first author in Sri Lanka to fuse serious literature with
                        cutting-edge, tech-driven engagement
                    </span>.
                    </p>
                    <div className="mt-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <p className="mt-6 text-xl text-slate-400 font-light">
                        Making literature a dynamic, must-have cultural experience for a
                        new generation.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}

