'use client';

import React, { useRef } from 'react';
import { Meow_Script } from 'next/font/google';
import { motion, useInView } from 'framer-motion';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-500px' });

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
      className="min-h-screen flex flex-col justify-center items-center bg-pink-50 text-center px-4 py-16"
    >
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
        className={`text-5xl lg:text-[5rem] text-pink-700 mb-6 ${meowScript.className}`}
      >
        It's a Match!
      </motion.div>

      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className=' max-w-xs md:max-w-2xl px-4 text-lg md:text-2xl lg:text-xl xl:text-2xl text-gray-700'
      >
        <p className=" mb-4">
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
        className="pt-32 text-pink-600 text-xl font-semibold tracking-wide"
        style={{ transformOrigin: 'bottom center', perspective: 1000 }}
      >
        #IvanSpecialLoveWithJila
      </motion.p>
    </div>
  );
};

export default Intro;
