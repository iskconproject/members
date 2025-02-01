import { getSlidesWithSevaDetails } from "@/lib/data";
import { Slide, CarouselConfig } from "@/types/slide";

export const slides: Slide[] = getSlidesWithSevaDetails();

export const carouselConfig: CarouselConfig = {
  autoplay: true,
  interval: 5000,
  randomize: true,
  transition: {
    duration: 0.7,
    ease: "easeInOut"
  },
  showIndicators: true,
  pauseOnHover: true
};