
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-prosthetic-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 pt-8 md:pt-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-prosthetic-900 leading-tight">
              Custom Prosthetic Solutions for Everyone, on the fly!
            </h1>
            <p className="text-lg text-prosthetic-700">
              Our AI-powered platform generates tailored prosthetic prototypes based on your unique needs, constraints, and challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-prosthetic-600 hover:bg-prosthetic-700"
                asChild
              >
                <Link to="/generator">Generate Your Prototype</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-prosthetic-300 text-prosthetic-600 hover:bg-prosthetic-100"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="pt-6 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-prosthetic-300 border-2 border-white flex items-center justify-center text-xs font-medium text-prosthetic-700">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-prosthetic-600">
                <span className="font-medium">500+</span> prosthetic solutions generated
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-prosthetic-200 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-prosthetic-300 rounded-full filter blur-3xl opacity-30"></div>
              <img
                src="https://images-ext-1.discordapp.net/external/T84e9IrOotucf9nBMASjpv-bTpcawB77b9nj54ySPaU/https/imgs.search.brave.com/clXLN31mkGJ6cHabo5ZT9InMxJMxJZShHVIekPYWPtE/rs%3Afit%3A860%3A0%3A0%3A0/g%3Ace/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzgyLzcwLzQ0/LzM2MF9GXzI4Mjcw/NDQyNF81ZHBjWEN1/RGd6YU9semQ4bG1p/UHVsRDNGOVBaMUpt/dy5qcGc?format=webp&width=1268&height=634"
                alt="Prosthetic Solution"
                className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
