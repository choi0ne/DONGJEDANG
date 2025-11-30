'use client';

import { useState } from 'react';

export default function GoogleMap() {
    const [zoom, setZoom] = useState(16);

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 1, 20));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 1, 10));
    };

    return (
        <div className="w-full aspect-[16/9] md:aspect-[21/9] relative shadow-lg rounded-lg overflow-hidden bg-[#222] group">
            {/* Google Maps Iframe (Acting as Background) - Dark Mode & Dynamic Zoom */}
            {/* Scaled up to 250% to completely eliminate any visible UI elements even on narrow mobile screens */}
            <div className="absolute inset-[-75%] w-[250%] h-[250%]">
                <iframe
                    key={zoom} // Force re-render on zoom change to update iframe content immediately
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={`https://maps.google.com/maps?q=인천광역시+동구+동산로+88&hl=ko&z=${zoom}&output=embed`}
                    className="w-full h-full invert-[90%] hue-rotate-180 brightness-95 contrast-[1.1] grayscale-[30%]"
                    style={{ pointerEvents: 'none' }} // Disable interaction to keep overlay centered visually and hide 'View larger map' link
                    title="Google Map Background"
                ></iframe>
            </div>

            {/* Custom Overlay (CSS Implementation) */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                <div className="bg-white border border-[#ccc] px-4 py-3 shadow-md rounded-[6px] mb-1 text-center min-w-[180px]">
                    <div className="font-bold text-[#222] text-[15px] mb-1">동제당한의원</div>
                    <div className="text-[13px] text-[#555]">인천 동구 동산로 88</div>
                </div>
                {/* Triangle Arrow */}
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white relative -top-[1px] drop-shadow-sm"></div>
            </div>

            {/* Map Marker - Google Style Red Pin (Smaller Size) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mt-6">
                <svg width="34" height="45" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <path d="M20 0C8.9543 0 0 8.9543 0 20C0 35 20 52 20 52C20 52 40 35 40 20C40 8.9543 31.0457 0 20 0Z" fill="#EA4335" />
                    <circle cx="20" cy="20" r="8" fill="#B31412" />
                </svg>
            </div>

            {/* Zoom Controls - Vertical Bar Style */}
            <div className="absolute bottom-4 right-4 flex flex-col bg-white rounded shadow-md z-20 overflow-hidden">
                <button
                    onClick={handleZoomIn}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-colors font-bold text-xl border-b border-gray-200"
                    aria-label="Zoom In"
                >
                    +
                </button>
                <button
                    onClick={handleZoomOut}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-colors font-bold text-xl"
                    aria-label="Zoom Out"
                >
                    −
                </button>
            </div>
        </div>
    );
}
