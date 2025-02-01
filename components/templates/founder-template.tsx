import { motion } from 'framer-motion';
import { FounderSlide } from '@/types/slide';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { inter } from '@/lib/fonts';

interface FounderTemplateProps {
    slide: FounderSlide;
    isActive: boolean;
}

export const FounderTemplate = ({ slide, isActive }: FounderTemplateProps) => {
    return (
        <div className="relative h-full w-full overflow-hidden">
            {slide.imageUrl && (
                <Image
                    src={slide.imageUrl}
                    alt="background"
                    fill
                    className="object-cover"
                />
            )}

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative z-10 p-8 h-full flex flex-col justify-between"
            >



                <div className='bg-purple-900 bg-opacity-90 min-w-lg max-w-lg p-8 rounded-lg absolute bottom-8 right-8'>
                    <div className="space-y-6 w-fit bg-violet-600 py-2 px-6 rounded-lg absolute -top-12 -left-0">
                        <h2 className={cn('text-lg uppercase font-semibold text-white', inter.className)}>Founder Member</h2>

                    </div>
                    <h1 className="text-4xl font-bold text-white">{slide.memberName}</h1>

                    {slide.address && (
                        <div className={cn(inter.className, "mt-6")}>
                            <h3 className="text-2xl font-semibold text-purple-200">Address</h3>
                            <p className="mt-2 text-base text-purple-100">{slide.address}</p>
                        </div>
                    )}
                </div>


            </motion.div>
        </div>
    );
};