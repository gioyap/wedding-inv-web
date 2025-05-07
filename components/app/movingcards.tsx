"use client";

import React, { useState, useEffect } from "react";
import { InfiniteMovingImages } from "../ui/infinite-moving-cards";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight, Maximize, Minimize } from "lucide-react"; // optional icons
import { Navbar } from "../navbar";

export function InfiniteMovingCards() {
  const imagePaths = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
  };
  
  const showPrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + imagePaths.length) % imagePaths.length);
  };

  const toggleFullScreen = () => {
    const elem = document.documentElement;
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };  

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
  
    if (isModalOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
  
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
  
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);  

  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <Navbar hideNavbar={isModalOpen} />
      {/* Clickable moving images */}
      <InfiniteMovingImages
        items={imagePaths}
        direction="left"
        speed="fast"
        onImageClick={openModal}
      />

      {/* Modal */}
     {isModalOpen && (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50 touch-none">
        <button onClick={toggleFullScreen} className="absolute top-4 left-4 text-gray-700 hidden lg:block">
          {isFullscreen ? <Minimize size={24}/> : <Maximize size={24}/>}
        </button>
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-700">
          <X size={32} />
        </button>
        <button onClick={showPrev} className="absolute left-4 text-gray-700">
          <ArrowLeft size={32} />
        </button>
        <Image
          key={currentIndex}
          src={imagePaths[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={500}
          height={600}
          className={`rounded ${
            direction === "next" ? "animate-fade-left" : "animate-fade-right"
          }`}
        />
        <button onClick={showNext} className="absolute right-4 text-gray-700">
          <ArrowRight size={32} />
        </button>
      </div>
    )}
    </div>
  );
}
