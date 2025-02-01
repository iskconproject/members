import slidesData from '@/data/slides.json';
import { Slide } from '@/types/slide';

export function generateRandomImage(): string {
    const randomImageIndex = Math.floor(Math.random() * 9) + 1;
    return `/images/seva-${randomImageIndex}.jpg`;
}

export function getSlidesWithSevaDetails(): Slide[] {
    // First, process all slides with images
    const processedSlides = slidesData.slides.map(slide => ({
        ...slide,
        imageUrl: slide.imageUrl || generateRandomImage(),
    })) as Slide[];

    // Duplicate historical slides to show them more frequently
    const historicalSlides = processedSlides.filter(
        slide => slide.templateType === 'historical'
    );

    // Add historical slides every 5 regular slides
    const finalSlides: Slide[] = [];
    const repeatInterval = 5; // Show historical slide every 5 slides

    processedSlides.forEach((slide, index) => {
        finalSlides.push(slide);
        // Insert a random historical slide after every 5 regular slides
        if ((index + 1) % repeatInterval === 0 && historicalSlides.length > 0) {
            const randomHistoricalSlide = historicalSlides[
                Math.floor(Math.random() * historicalSlides.length)
            ];
            finalSlides.push({
                ...randomHistoricalSlide,
                id: `${randomHistoricalSlide.id}-repeat-${index}` // Ensure unique IDs
            });
        }
    });

    return finalSlides;
}