import { motion } from 'framer-motion';
import { SevaSlide } from '@/types/slide';
import Image from 'next/image';

interface SevaTemplateProps {
    slide: SevaSlide;
    isActive: boolean;
}

export const SevaTemplate = ({ slide, isActive }: SevaTemplateProps) => {
    return (
        <div className="relative h-full w-full overflow-hidden">
            {slide.imageUrl && (
                <Image
                    src={slide.imageUrl}
                    alt="background"
                    fill
                    className="object-cover opacity-30"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-700/70" />

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative z-10 p-8 h-full flex flex-col justify-between"
            >
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-white">{slide.memberName}</h1>

                </div>

                {slide.address && (
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-orange-200">Address</h3>
                        <p className="mt-2 text-lg text-orange-100">{slide.address}</p>
                    </div>
                )}

                {slide.address && (
                    <div className="text-orange-200 mt-auto">
                        <p>{slide.address}</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};