"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => {
          const isIvan = word === "Ivan";
          const isJila = word === "Jila";
          const isAmp = word === "&";
  
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0 whitespace-pre text-center block",
                {
                  "mr-[10rem] md:mr-[16rem] lg:mr-[20rem]": isIvan,
                  "ml-[10rem] md:ml-[16rem] lg:ml-[20rem]": isJila,
                  "-mt-14 -mb-14 md:-mt-20 md:-mb-20 lg:-mt-[7rem] lg:-mb-[7rem]": isAmp,
                }
              )}
              style={{
                filter: filter ? "blur(8px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  
  return (
    <div className={cn(" text-white", className)}>
      {/* Add the exclusive font here with the style tag */}
        <div
         className={`mt-6 tracking-wider ${tangerine.className}`} // Apply the font locally
      >
        {renderWords()}
      </div>
    </div>
  );
};
