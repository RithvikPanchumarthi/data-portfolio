import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile.js';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/data-portfolio/bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero">
              <span className="block text-white">RITHVIK</span>
              <span className="block text-white">PANCHUMARTHI</span>
              <span className="block text-white">DATA ENGINEER</span>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-xs text-white/50 tracking-widest uppercase"
            >
              Minneapolis, MN, USA (Open to Relocation)
            </motion.p>

            <motion.a
              href="https://linktr.ee/rithvikpanchumarthi"
              target="_blank"
              rel="noopener noreferrer"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="inline-block mt-4 text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
            >
              Resume & Links
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
