import { motion } from 'framer-motion';
import { BaseSlide } from '@/types/slide';
import Image from 'next/image';

interface DefaultTemplateProps {
    slide: BaseSlide;
    isActive: boolean;
}

export const DefaultTemplate = ({ slide, isActive }: DefaultTemplateProps) => {
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
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-700/70" />
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center"
            >
                <h1 className="text-4xl font-bold text-white mb-4">{slide.memberName}</h1>
                
                {slide.address && (
                    <div className="text-gray-200 mt-4">
                        <p>{slide.address}</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};