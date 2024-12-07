import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[60vh] bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Find Your Perfect Getaway</h1>
        <p className="text-xl mb-8">Discover amazing destinations that match your preferences and budget</p>
      </div>
    </div>
  );
} 