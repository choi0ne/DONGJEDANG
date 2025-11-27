'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PainClinic() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main className="max-w-[1200px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase mb-2 block animate-fadeIn">Clinic</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                        통증/신경질환 클리닉
                    </h1>
                    <div className="w-16 h-1 bg-primary/30 mx-auto animate-fadeInUp delay-100"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp delay-200">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                            alt="통증 치료"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-serif text-primary">통증의 원인을 찾아 근본적으로 치료합니다</h2>
                        <p className="text-lg text-text/80 leading-relaxed">
                            디스크, 관절염, 오십견, 교통사고 후유증 등 다양한 통증 질환을 봉독요법, 약침, 추나요법 등으로 치료합니다.
                            단순한 진통이 아닌, 손상된 조직을 재생하고 염증을 제거하여 통증 없는 편안한 일상을 돌려드립니다.
                        </p>
                        <ul className="space-y-3 text-text/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>목 / 허리 디스크</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>관절염 / 오십견</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>교통사고 후유증</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
