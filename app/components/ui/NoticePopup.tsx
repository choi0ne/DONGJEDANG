'use client';

import { useState } from 'react';

interface NoticePopupProps {
    message: string;
    onClose?: () => void;
}

export default function NoticePopup({ message, onClose }: NoticePopupProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-black text-white py-5 px-4 text-xl font-medium relative z-[110]">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-4">
                <div className="flex-1 text-center">
                    <span>{message}</span>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        onClose?.();
                    }}
                    className="text-white/70 hover:text-white transition-colors p-1"
                    aria-label="닫기"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
