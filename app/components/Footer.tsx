'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#9F9E99] text-white/80 py-12 border-t border-secondary/10 font-sans text-sm">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left Side: Info & Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    {/* Links */}
                    <div className="flex gap-4 font-medium text-text/80 items-center">
                        <img
                            src="/신로고_가로1.jpg"
                            alt="동제당한의원 로고"
                            className="h-6 w-auto object-contain opacity-80 mix-blend-multiply -translate-y-[2px]"
                        />
                        <div className="h-4 w-[1px] bg-text/20"></div>
                        <Link href="/terms" className="hover:text-primary transition-colors text-xs">이용약관</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors text-xs">개인정보처리방침</Link>
                    </div>

                    {/* Info */}
                    <div className="space-y-1 leading-relaxed">
                        <p className="flex flex-wrap justify-center md:justify-start gap-x-3">
                            <span>상호: 동제당한의원</span>
                            <span className="text-secondary/30">|</span>
                            <span>대표: 최장혁</span>
                            <span className="text-secondary/30">|</span>
                            <span>전화: 032-765-7733</span>
                        </p>
                        <p className="flex flex-wrap justify-center md:justify-start gap-x-3">
                            <span>주소: 인천시 동구 동산로 88 2층</span>
                            <span className="text-secondary/30">|</span>
                            <span>사업자등록번호: 121-91-29641</span>
                        </p>
                    </div>
                </div>

                {/* Right Side: Buttons */}
                <div className="flex gap-2">
                    {/* Naver Blog Button */}
                    <Link
                        href="https://blog.naver.com/dongjedang"
                        target="_blank"
                        className="flex items-center justify-center w-7 h-7 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 transition-colors"
                        aria-label="네이버 블로그"
                    >
                        <span className="font-black font-sans text-xs leading-none">N</span>
                    </Link>

                    {/* Inquiry Button */}
                    <Link
                        href="https://map.naver.com/p/entry/place/13240803?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202511271924&locale=ko&svcName=map_pcv5"
                        target="_blank"
                        className="flex items-center justify-center w-7 h-7 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 transition-colors"
                        aria-label="문의하기"
                        onClick={() => {
                            alert("해당질환의 진료는 예약진료로 진행하고있습니다.");
                        }}
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </Link>
                </div>

            </div>
        </footer>
    );
}
