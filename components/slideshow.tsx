"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { slides, carouselConfig } from "@/config/slides";
import SlideLayout from "@/components/slide-layout";

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideOrder, setSlideOrder] = useState<number[]>([]);

  useEffect(() => {
    // Initialize slide order
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
    if (!carouselConfig.autoplay || slideOrder.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slideOrder.length);
    }, carouselConfig.interval);

    return () => clearInterval(interval);
  }, [slideOrder]);

  if (slideOrder.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
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