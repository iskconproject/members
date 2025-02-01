"use client";

import { motion } from "framer-motion";
import { Slide, TemplateType } from "@/types/slide";
import { DefaultTemplate } from "./templates/default-template";
import { FounderTemplate } from "./templates/founder-template";
import { SevaTemplate } from "./templates/seva-template";
import { HistoricalTemplate } from "./templates/historical-template";

interface SlideLayoutProps {
  slide: Slide;
  isActive: boolean;
}

const getTemplate = (type: TemplateType): React.ComponentType<{ slide: any; isActive: boolean }> => {
  switch (type) {
    case "founder":
      return FounderTemplate;
    case "seva":
      return SevaTemplate;
    case "historical":
      return HistoricalTemplate;
    default:
      return DefaultTemplate;
  }
};

export default function SlideLayout({ slide, isActive }: SlideLayoutProps) {
  const Template = getTemplate(slide.templateType);

  return (
    <motion.div
      className={`absolute inset-0 w-full h-full ${isActive ? "block" : "hidden"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Template slide={slide} isActive={isActive} />
    </motion.div>
  );
}