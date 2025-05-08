"use client";

import React from "react";
import { Meow_Script } from 'next/font/google';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});

export const Entourage = () => {
  return (
    <div className="py-16 bg-[#FDF9F3] dark:bg-[#2A2E37] text-[#101b4b] dark:text-white">
      <h2 className={`text-3xl md:text-5xl xl:text-7xl font-bold text-center mb-10 text-[#101b4b] dark:text-[#f6d673] ${meowScript.className}`}>
        The Entourage 
      </h2>

      <div className="space-y-12 text-center max-w-xs md:max-w-md lg:max-w-lg xl:max-w-5xl 2xl:max-w-7xl mx-auto">
        {/* Parents of the Groom & Bride */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Parents of the Groom</h3>
            <p>Mr. Maximo Norte</p>
            <p>Mrs. Digna Norte</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Parents of the Bride</h3>
            <p>Mr. Herminio Bonete</p>
            <p>In Loving Memory of Mrs. Imelda Bonete</p>
          </div>
        </div>

        {/* Primary Sponsors */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Primary Sponsors</h3>
          <div className="space-y-1">
            <p>Mr. Wilfredo Bonete Jr. & Mrs. Ma. Thelda Delos Santos</p>
            <p>Mr. Noel Binuya & Mrs. Leonila Escoza</p>
            <p>Mr. Zosimo Advincula Jr. & Mrs. Isabelita Garcia</p>
            <p>Mr. Rosendo Binuya & Mrs. Yolanda Sanqui</p>
            <p>Mr. Danny Bate & Mrs. Gina Bonete</p>
          </div>
        </div>

        {/* Maid of Honor & Best Man */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Maid of Honor</h3>
            <p>Ms. Michaila Shane Bonete</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Best Man</h3>
            <p>Mr. Kevin Adona</p>
          </div>
        </div>

        {/* Secondary Sponsors */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Secondary Sponsors</h3>
          <div className="space-y-1">
            <p><strong>Veil Sponsors:</strong> Ms. Lei Unice Sait & Mr. Lei Jarod Bonete</p>
            <p><strong>Cord Sponsors:</strong> Ms. Princess Roxas & Mr. Byron Macam</p>
            <p><strong>Candle Sponsors:</strong> Ms. Lee Luretta Bonete & Mr. John Carlo Go</p>
          </div>
        </div>

        {/* Bearers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Ring Bearer</h3>
            <p>Lucio Isaac Rigos</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Bible Bearer</h3>
            <p>Hero Valderama</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Coin Bearer</h3>
            <p>Louis Bonete</p>
          </div>
        </div>

        {/* Flower Girls & Boys */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Flower Girls & Boys</h3>
          <p className="max-w-screen-sm mx-auto">
            Anaiah Denisse Manalo, Gia Eliz Norte, Millie Mabale, Grey Dela Cruz, Sabrina Lescano, John Mathew Baldeo, Janessa Dominique Binuya, Hans Rafael Valderama
          </p>
        </div>

        {/* Groomsmen & Bridesmaids */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Groomsmen & Bridesmaids</h3>
          <div className="space-y-1">
            <p>Mr. Emman Ariza & Ms. Hannah Valderama</p>
            <p>Mr. Socrates Anicete & Ms. Jessamae Denine Petalio</p>
            <p>Mr. Haze Ponce & Ms. Sofhia Soniga</p>
            <p>Mr. Sonny Boy Salomon & Ms. Acxel Rose Clores</p>
            <p>Mr. Mikhail de Guzman & Ms. Stephanie Gayle Serrano</p>
            <p>Mr. Edsel Zabat & Ms. Maria Lourdes Valencia</p>
            <p>Mr. Aldrin Medrano & Ms. Monique Eusebio</p>
          </div>
        </div>
      </div>
    </div>
  );
};
