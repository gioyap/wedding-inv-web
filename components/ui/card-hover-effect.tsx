import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { JSX, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string | JSX.Element;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-32 lg:px-12 2xl:px-0 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={item.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
              className="absolute inset-0 h-full w-full bg-[#C88EA7]/80 dark:bg-[#9C536B]/80 block rounded-3xl"
              layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full max-w-xs md:max-w-md mx-auto p-4 overflow-hidden bg-[#F7DADA] dark:bg-[#2E3138] border border-[#EDE6DA] dark:border-[#BFA74F] group-hover:border-[#C88EA7] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
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
    <h4 className={cn(
      "text-[#333333] dark:text-[#F8F8F2] font-bold tracking-wide mt-4",
      className
    )}>
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
    <div
      className={cn(
        "mt-8 text-[#7D7D7D] dark:text-[#B0B0B0] tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
