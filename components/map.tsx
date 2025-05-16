'use client'

import { GoogleMap } from "@react-google-maps/api";
import { Meow_Script } from 'next/font/google';

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
});

// Only set height here, and let Tailwind handle width
const defaultMapContainerStyle = {
  width: '100%',
  height: '550px',
  borderRadius: '15px',
};

const defaultMapCenter = {
  lat: 14.5995, // Metro Manila
  lng: 120.9842,
};

const defaultMapZoom = 12;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'hybrid',
};

const MapComponent = () => {
  return (
    <div className="w-full flex py-16 justify-center flex-col items-center bg-[#FFFDF7] dark:bg-[#1C1F26] p-4 rounded-xl">
      <h2
        className={`text-5xl xl:text-7xl font-bold text-center text-pink-700 dark:text-pink-400 pb-6 ${meowScript.className}`}
      >
        Location
      </h2>
      {/* This div controls the responsive width */}
      <div className="w-[26%] md:w-[55%] lg:w-[60%] xl:w-[70%]">
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        />
      </div>
    </div>
  );
};

export { MapComponent };
