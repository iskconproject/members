import { motion } from 'framer-motion';
import { HistoricalSlide } from '@/types/slide';
import Image from 'next/image';

interface HistoricalTemplateProps {
    slide: HistoricalSlide;
    isActive: boolean;
}

export const HistoricalTemplate = ({ slide, isActive }: HistoricalTemplateProps) => {
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
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-amber-700/70" />
            
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 p-8 h-full flex flex-col justify-between"
            >
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-white">{slide.memberName}</h1>
                    
                    {slide.address && (
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-amber-200">Address</h3>
                            <p className="mt-2 text-lg text-amber-100">{slide.address}</p>
                        </div>
                    )}
                </div>
                
                {slide.address && (
                    <div className="text-amber-200 mt-auto">
                        <p>{slide.address}</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};