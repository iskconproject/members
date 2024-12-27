"use client";

import { inter } from "@/lib/fonts";
import IskconAsansolLogoIcon from "./iskcon-asansol-logo";
import { cn } from "@/lib/utils";

interface SlideHeaderProps {
  title: string;
  subtitle?: string;
  logo?: string;
}

export function SlideHeader({ title, subtitle, logo = "/iskcon-logo.png" }: SlideHeaderProps) {
  console.log(title, subtitle)
  return (
    <div className="sticky top-0 left-0 right-0">
      {/* Curved background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 h-32 rounded-br-[100px]" />
        <div
          className="relative px-6 py-4 flex justify-between items-center px-8"

        >
          <div className="flex-shrink-0 w-20 h-20 relative">
            <IskconAsansolLogoIcon className="text-white w-20 h-20" />
          </div>

          {/* Title */}
          <div
            className="flex-grow text-center mx-4"
          >
            <h1 className={cn(inter.className, 'text-3xl md:text-5xl font-semibold text-white')}>
              {title}
            </h1>
          {/* {subtitle && (
              <p className="text-white/90 mt-2 text-lg">{subtitle}</p>
            )} */}
        </div>

        {/* ISKCON Logo */}

      </div>
    </div>
    </div >
  );
}