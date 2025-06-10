"use client";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function Contact() {
  return (
    <motion.section
      {...sectionAnimation}
      className="w-screen h-screen flex justify-center items-center p-8 box-border bg-cosmic relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30"></div>
      <div className="w-full max-w-5xl text-center animate-fade-in-up relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-8 font-space animate-float">
          Let's Redefine Literary Engagement
        </h2>
        <div className="glass-dark p-12 rounded-3xl animate-glow">
          <div className="text-2xl text-slate-300 leading-relaxed space-y-6">
            <p className="text-3xl font-bold text-purple-400 mb-8">
              Codezela Technologies is ready to lead the way.
            </p>
            <p className="text-xl">
              Contact us to discuss how we can bring this vision to life.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="glass p-6 rounded-xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h4 className="text-purple-400 font-semibold text-xl mb-2">Email Us</h4>
                <p className="text-slate-300 text-lg">info@codezela.com</p>
              </div>

              <div className="glass p-6 rounded-xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="text-blue-400 font-semibold text-xl mb-2">Call Us</h4>
                <p className="text-slate-300 text-lg">011 485 8899 | 072 733 3577</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
