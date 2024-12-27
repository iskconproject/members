"use client";

import { motion } from "framer-motion";
import { Slide } from "@/types/slide";
import { SlideHeader } from "@/components/slide-header";
import { SlideFooter } from "@/components/slide-footer";

interface SlideLayoutProps {
  slide: Slide;
  isActive: boolean;
}

export default function SlideLayout({ slide, isActive }: SlideLayoutProps) {
  if (slide.customComponent) {
    const CustomComponent = slide.customComponent;
    return <CustomComponent {...slide.customProps} isActive={isActive} />;
  }


  return (
    <motion.div
      className={`absolute inset-0 w-full h-full ${isActive ? "block" : "hidden"
        }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image - Static */}
      <div className="absolute inset-0">
        <img
          src={slide.imageUrl}
          alt={slide.sevaName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Content Container */}
      {isActive && (
        <>
          <div>
            <SlideHeader
              title={slide.sevaTitle || 'Hare Krishna'}
              subtitle={slide.address}
            />
          </div>

          <div

          >
            <SlideFooter
              memberName={slide.memberName}
              info={slide.address}
            />
          </div>
        </>
      )}
    </motion.div>
  );
}