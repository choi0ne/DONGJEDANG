import React from 'react';

interface SubPageHeaderProps {
    title?: string;
    subtitle?: string;
    englishTitle?: string;
    imageSrc?: string;
}

export default function SubPageHeader({ title, subtitle, englishTitle, imageSrc }: SubPageHeaderProps) {
    const hasText = title || subtitle || englishTitle;

    return (
        <section
            className={`relative w-full h-[430px] flex items-center justify-center overflow-hidden ${!imageSrc ? 'bg-background' : ''}`}
            style={imageSrc ? {
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            } : {}}
        >
            {/* Overlay for better text readability if image is present AND there is text */}
            {imageSrc && hasText && (
                <div className="absolute inset-0 bg-black/40"></div>
            )}

            {hasText && (
                <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto">
                    {englishTitle && (
                        <span className={`block font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn ${imageSrc ? 'text-white/90' : 'text-primary'}`}>
                            {englishTitle}
                        </span>
                    )}
                    {title && (
                        <h1 className={`font-serif animate-fadeInUp ${imageSrc ? 'text-white text-4xl md:text-5xl font-bold' : 'text-[#333333] font-normal text-[25px] leading-[38px]'} mb-6`}>
                            {title}
                        </h1>
                    )}

                    {subtitle && (
                        <p className={`text-lg max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200 ${imageSrc ? 'text-white/90' : 'text-text/70'}`}>
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
        </section>
    );
}
