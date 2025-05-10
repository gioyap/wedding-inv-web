'use client';

import Link from 'next/link';
import { Meow_Script } from 'next/font/google';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});

export default function InvitationPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 bg-[#FFFDF7] dark:bg-[#1C1F26] text-gray-800 dark:text-gray-100 flex items-center justify-center text-center py-16 lg:pl-28 xl:pl-0 ">
        <div className="space-y-4 max-w-md">
          <h1 className={`text-5xl lg:text-[5rem] font-bold text-pink-700 dark:text-pink-400 ${meowScript.className}`}>
            Save the Date!
          </h1>
          <p>Sunday, February 9, 2025</p>
          <p>Farm de Soler Resort and Events Place</p>
          <p className=' pb-12'>Ceremony starts at 4:00 PM</p>
          <p>Click below to confirm your attendance!</p>
          <p className="text-lg font-semibold">Your RSVP is REQUIRED.</p>
          <Link
            href="/"
            className="inline-block bg-pink-700 dark:bg-pink-400 text-white dark:text-[#101b4b] font-semibold py-2 px-4 rounded-lg shadow hover:opacity-90 transition"
          >
            RSVP
          </Link>
        </div>
      </div>

      {/* Right Column - Full Width & Height GIF */}
      <div className="w-full lg:w-1/2 h-[50vh] md:h-auto">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
          alt="Wedding Celebration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
