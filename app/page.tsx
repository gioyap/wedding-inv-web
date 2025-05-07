"use client";
import Intro from "@/components/app/intro";
import { InfiniteMovingCards } from "@/components/app/movingcards";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "motion/react";
import React from "react";

const words = `Ivan & Jila`;

export default function  ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
 <>
     <ImagesSlider className="xl:w-screen h-screen relative" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50"
      >
        <div className=" gap-64 lg:gap-12 xl:gap-32 2xl:gap-16 flex flex-col">
        <motion.div className="font-bold text-[5rem] md:text-[8rem] xl:text-[10rem] text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
         <TextGenerateEffect words={words} />
        </motion.div>

        <p className=" text-white text-sm md:text-lg max-w-xs md:max-w-2xl text-center mx-auto">
          THE BEGINNING OF HAPPILY EVER AFTER SAVE THE DATE FEBRUARY 9,2025
        </p>
        </div>
      </motion.div>
    </ImagesSlider>

    <section>
      <Intro/>
    </section>
    
    <section>
      <InfiniteMovingCards/>
    </section>
 </>
  );
}
