
import slidesData from '@/data/slides.json';
import { Slide } from '@/types/slide';

export function generateRandomImage(): string {
    const randomImageIndex = Math.floor(Math.random() * 9) + 1;
    return `/images/seva-${randomImageIndex}.jpg`;
}

export function getSlidesWithSevaDetails(): Slide[] {
    return slidesData.slides.map(slide => {
        return {
            ...slide,
            imageUrl: slide.imageUrl || generateRandomImage(),
        } as Slide;
    });
}