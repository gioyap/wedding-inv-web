"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { JSX, useRef, useState } from "react";

export const CardHoverImage = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string | JSX.Element;
    image: string;
    hoverImage: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:px-12 2xl:px-0 py-10 gap-6 max-w-xs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto",
        className
      )}
    >
      {items.map((item, idx) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-200px" });

        return (
          <motion.div
            key={item.title}
            ref={ref}
            className="relative group block h-96 xl:h-[32rem] w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, rotateX: 90, transformPerspective: 1000 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    rotateX: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  }
                : {}
            }
          >
            {/* Preload the hover image */}
            <div
              className="hidden"
              style={{ backgroundImage: `url(${item.hoverImage})` }}
            />

            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 rounded-md bg-black/50 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                />
              )}
            </AnimatePresence>

            <Card
              image={item.image}
              hoverImage={item.hoverImage}
              isHovered={hoveredIndex === idx}
            >
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Card = ({
  children,
  image,
  hoverImage,
  isHovered,
}: {
  children: React.ReactNode;
  image: string;
  hoverImage: string;
  isHovered: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full shadow-xl overflow-hidden transition-all duration-500 border border-transparent dark:border-neutral-800 relative flex flex-col justify-end p-4",
        "bg-cover bg-center"
      )}
      style={{
        backgroundImage: `url(${isHovered ? hoverImage : image})`,
      }}
    >
      <div className="relative z-20">
        <div className="text-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold text-xl md:text-2xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-sm md:text-base mt-2", className)}>{children}</p>
  );
};
