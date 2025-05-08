import { HoverEffect } from "../ui/card-hover-effect";
import { Meow_Script } from 'next/font/google';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});

export function DressCode() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16 text-center">
      <h2 className={`text-4xl md:text-5xl xl:text-7xl text-pink-700 ${meowScript.className}`}>
        Dress Code Guide
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Godmothers",
    description: "Please wear a gray gown as part of our honored entourage.",
  },
  {
    title: "Godfathers",
    description: "We invite you to wear a gray Barong to match our theme.",
  },
  {
    title: "Flower Girls & Bearers",
    description: "Dress code is semi-formal for our little stars.",
  },
  {
    title: "Guests (Gentlemen)",
    description: "Kindly wear semi-formal attire to celebrate with us.",
  },
  {
    title: "Guests (Ladies)",
    description: "We’d love for you to come in semi-formal wear.",
  },
  {
    title: "Colors & Theme",
    description: (
      <div className="flex flex-col items-center space-y-4 ">
        <div className="flex space-x-3 justify-center animate-rotate-y animate-infinite animate-duration-[5000ms]">
          <span className="w-6 h-6 rounded-full bg-[#E7E7E7]" title="Gray" />
          <span className="w-6 h-6 rounded-full bg-[#A3A8B2]" title="Light Gray" />
          <span className="w-6 h-6 rounded-full bg-[#F6D673]" title="Yellow" />
          <span className="w-6 h-6 rounded-full bg-[#545E85]" title="Light Navy" />
          <span className="w-6 h-6 rounded-full bg-[#101B4B]" title="Navy" />
        </div>
        <div className="text-sm text-[#7D7D7D] dark:text-[#B0B0B0] flex items-center flex-col gap-4">
         <div>
            We would love to see you in these minimalist tones. <br />
         </div>
         <div>
            Theme: <strong>Enchanted, Fairytale</strong><br />
         </div>
        <div>
            <strong>#IvanSpecialLoveWithJila</strong>
        </div>
        </div>
      </div>
    ),
  },
];
