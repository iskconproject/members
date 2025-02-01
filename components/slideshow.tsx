"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { slides, carouselConfig } from "@/config/slides";
import SlideLayout from "@/components/slide-layout";
import IskconAsansolLogoIcon from "./iskcon-asansol-logo";

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideOrder, setSlideOrder] = useState<number[]>([]);

  const shuffleSlides = useCallback(() => {
    const order = Array.from({ length: slides.length }, (_, i) => i);
    if (carouselConfig.randomize) {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    }
    setSlideOrder(order);
  }, []);

  useEffect(() => {
    shuffleSlides();
  }, [shuffleSlides]);

  useEffect(() => {
    if (!carouselConfig.autoplay || slideOrder.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slideOrder.length);
    }, carouselConfig.interval);

    return () => clearInterval(interval);
  }, [slideOrder]);

  if (slideOrder.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute bg-white/90 rounded-full z-20 w-32 h-32 flex justify-center items-center top-10 left-10">
        <IskconAsansolLogoIcon className="w-24 h-24 text-red-700" />
      </div>
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <SlideLayout
            key={slide.id}
            slide={slide}
            isActive={slideOrder[currentIndex] === index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}