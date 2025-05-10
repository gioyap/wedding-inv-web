'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { Meow_Script } from 'next/font/google';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});


const faqs = [
  {
    question: 'What is RSVP for?',
    answer: `Kindly let us know if you’ll be attending so we can plan seating, catering, and all the details to make the day perfect for everyone.

The deadline for RSVP is on or before January 20, 2025, so we can get an accurate headcount.

This is REQUIRED for us to finalize the arrangements. See the last page for the RSVP link.`,
  },
  {
    question: 'Where can we park?',
    answer:
      'You’re welcome to park in the Event Place parking area, which has space for up to 50 cars for your convenience.',
  },
  {
    question: 'Gift Note',
    answer:
      'Your presence on our special day is the greatest gift we could ask for. While we deeply appreciate the thoughtfulness of gifts, simply celebrating with us is more than enough to make our day unforgettable.',
  },
  {
    question: 'Can I bring a plus one?',
    answer:
      'We kindly ask that you honor this invitation, which has been reserved exclusively for you. The number of seats allocated to you will be shared by the bride or groom and must be strictly followed. Thank you for understanding that we are unable to accommodate additional guests.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-h-screen md:min-h-0 lg:min-h-screen text-[#101b4b] dark:text-[#f6d673] mx-auto max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-3xl py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className={`text-5xl xl:text-7xl font-bold text-center mb-10 ${meowScript.className}`}>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 dark:border-gray-600 pb-4"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between w-full text-left text-lg font-bold focus:outline-none dark:text-white"
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-4 whitespace-pre-line text-base dark:text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
