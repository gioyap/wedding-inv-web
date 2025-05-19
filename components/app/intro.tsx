'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Meow_Script } from 'next/font/google';
import { motion, useInView } from 'framer-motion';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  const flipUpVariants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 3.2, ease: 'easeOut' },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-[#FFFDF7] dark:bg-[#1C1F26] text-gray-800 dark:text-gray-100 text-center px-4 py-16"
    >
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
        className={`text-5xl lg:text-[5rem] text-pink-700 dark:text-pink-400 mb-6 ${meowScript.className}`}
      >
        It's a Match!
      </motion.div>

      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl mx-auto text-lg md:text-2xl lg:text-xl xl:text-2xl"
      >
        <p className="mb-4">
          Our fairy tale begins, and we would be honored to have you with us as we create memories filled with love and magic.
        </p>
        <p>
          This marks the beginning of our happily ever after, and your presence will make it even more special.
        </p>
      </motion.div>

      <motion.p
        variants={flipUpVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="pt-32 text-pink-600 dark:text-pink-300 text-xl font-semibold tracking-wide"
        style={{ transformOrigin: 'bottom center', perspective: 1000 }}
      >
        #IvanSpecialLoveWithJila
      </motion.p>
    </div>
  );
};

export default Intro;
