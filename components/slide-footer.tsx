"use client";

import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SlideContentProps {
  memberName: string;
  info?: string;
  theme?: {
    primary: string;
    secondary: string;
  };
}

export function SlideFooter({
  memberName,
  info,
  theme = {
    primary: "from-purple-600 to-emerald-500",
    secondary: "from-purple-500/20 to-emerald-500/20"
  }
}: SlideContentProps) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0"
    >
      {/* Gradient overlay */}
      <div className={`bg-gradient-to-r ${theme.primary} p-8 rounded-tl-[100px]`}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ left: -100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"

          >
            {memberName}
          </motion.h2>
          {info && (
            <p
              className={cn(inter.className, "text-xl md:text-2xl text-white/90 font-light")}
            >
              {info}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}