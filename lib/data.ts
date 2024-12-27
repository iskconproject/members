import sevasData from '@/data/sevas.json';
import slidesData from '@/data/slides.json';
import { Seva } from '@/types/seva';
import { Slide } from '@/types/slide';

export function generateRandomImage(): string {
    const randomImageIndex = Math.floor(Math.random() * 3) + 1;
    return `/images/seva-${randomImageIndex}.jpg`;
}

export function getSevas(): Seva[] {
    return sevasData.sevas;
}

export function getSlides(): Slide[] {
    return slidesData.slides;
}

export function getSeva(id: number): Seva | undefined {
    return sevasData.sevas.find(seva => seva.id === id);
}

export function getSlidesBySeva(sevaId: number): Slide[] {
    return slidesData.slides.filter(slide => slide.sevaId === sevaId);
}

export function getSlidesWithSevaDetails(): Slide[] {
    return slidesData.slides.map(slide => {
        const seva = getSeva(slide.sevaId);
        return {
            ...slide,
            sevaName: seva?.name,
            sevaTitle: seva?.title,
            imageUrl: generateRandomImage()
        };
    });
}