'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Link from 'next/link';

export default function Home() {
  const [detoxTitle, setDetoxTitle] = useState('해독요법');
  const [detoxDesc, setDetoxDesc] = useState('몸 안의 독소를 배출하여 건강을 되찾으세요.');

  useEffect(() => {
    const docRef = doc(db, "detox_content", "main_detox_info");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        if (data.title) setDetoxTitle(data.title);
        if (data.description) setDetoxDesc(data.description);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-text bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#F8F7F0]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/korean-pattern.png")' }}>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center">
          <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase mb-6 animate-fadeIn">
            Natural Healing Center
          </span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-8 leading-tight animate-fadeInUp">
            쉼의 시간,<br />
            <span className="text-primary">회복의 공간</span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-text/70 mb-12 max-w-2xl leading-relaxed animate-fadeInUp delay-100">
            자연을 닮은 치료로 몸과 마음의 균형을 찾아드립니다.<br />
            동제당한의원이 당신의 건강한 일상을 응원합니다.
          </p>

          {/* Image Carousel */}
          <div className="w-full max-w-5xl mx-auto mt-8 mb-12 overflow-hidden rounded-xl shadow-2xl animate-fadeInUp delay-200">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] group">
              {/* Carousel Container */}
              <div className="flex h-full animate-scroll hover:pause">
                {/* Image Set 1 */}
                <div className="flex-shrink-0 w-full h-full relative">
                  <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80" alt="한약재" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="flex-shrink-0 w-full h-full relative">
                  <img src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80" alt="약탕기" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="flex-shrink-0 w-full h-full relative">
                  <img src="https://images.unsplash.com/photo-1626202378376-e865f3336c7c?auto=format&fit=crop&q=80" alt="침구실" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="flex-shrink-0 w-full h-full relative">
                  <img src="https://images.unsplash.com/photo-1606422869502-f6739f509348?auto=format&fit=crop&q=80" alt="진맥" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                {/* Duplicate for infinite scroll effect */}
                <div className="flex-shrink-0 w-full h-full relative">
                  <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80" alt="한약재" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Overlay Text (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/80 font-serif text-lg tracking-widest uppercase border border-white/30 px-6 py-2 bg-black/10 backdrop-blur-sm">Premium Korean Medicine</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Clinic Section */}
      <section className="py-24 bg-[#F8F7F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Clinic</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text">진료 안내</h2>
            <div className="w-12 h-1 bg-secondary/30 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl border border-secondary/10">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-primary group-hover:text-primary shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">통증 클리닉</h3>
              <p className="text-text/70 group-hover:text-white/90 leading-relaxed">
                급만성 통증, 디스크, 관절염 등<br />
                근본적인 원인을 찾아 치료합니다.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl border border-secondary/10">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-primary group-hover:text-primary shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">해독 요법</h3>
              <p className="text-text/70 group-hover:text-white/90 leading-relaxed">
                체내 독소를 배출하고<br />
                면역력을 증진시킵니다.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl border border-secondary/10">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-primary group-hover:text-primary shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">보약 클리닉</h3>
              <p className="text-text/70 group-hover:text-white/90 leading-relaxed">
                개인별 체질에 맞춘 처방으로<br />
                기력을 회복시켜 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Detox Section */}
      <section className="py-24 bg-[#F8F7F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/korean-pattern.png")' }}></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
                  alt="Detox Therapy"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Special Care</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text mb-8 leading-tight">{detoxTitle}</h2>
              <p className="text-lg text-text/70 mb-10 leading-relaxed">
                {detoxDesc}
              </p>
              <Link href="/clinic/detox" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group">
                자세히 보기
                <span className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
