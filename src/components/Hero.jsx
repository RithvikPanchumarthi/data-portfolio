import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile.js';
import BuilderStats from './BuilderStats';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative w-full bg-background pt-[var(--header-height)]">
      <div className="flex items-start pt-8 md:pt-12 pb-12 md:pb-16 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm sm:text-base text-muted-foreground max-w-sm md:max-w-md leading-relaxed"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-xs text-muted-foreground tracking-widest uppercase"
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
              className="inline-block mt-4 text-sm text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
            >
              Resume & Links
            </motion.a>
          </motion.div>
        </div>
      </div>

      <BuilderStats />
    </section>
  );
};

export default Hero;
