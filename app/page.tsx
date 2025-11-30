'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const banners = [
  { type: 'image', src: '/메인베너.jpg' },
  { type: 'image', src: '/메인베너2.jpg' },
  { type: 'video', src: '/메인베너3.mp4' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 15000); // Change slide every 15 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#222] bg-[#F8F7F0]">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#EAE9E4]">
        {/* Main Banner Slider */}
        {banners.map((banner, index) => (
          <div
            key={banner.src}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {banner.type === 'video' ? (
              <video
                src={banner.src}
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full transform scale-105"
              />
            ) : (
              <Image
                src={banner.src}
                alt={`동제당한의원 메인 배너 ${index + 1}`}
                fill
                className="object-cover transform scale-105"
                priority={index === 0}
              />
            )}
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 z-10"></div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border-2 border-gray-800 transition-all duration-300 ${index === currentSlide ? 'bg-gray-800' : 'bg-transparent hover:bg-gray-800/20'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#000145] mb-6 leading-tight"
            style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}
          >
            멈춤의 시작, 또다른 시작
          </h1>


          <h2
            className="text-2xl md:text-3xl font-bold text-[#000145] mb-12"
            style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}
          >
            안녕하세요. 동제당한의원입니다.
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-loose font-light word-keep-all" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
            <p>
              동제당한의원은 18여년간 다양한 난치성 질환을 치료하고 있습니다.<br />
              다양한 질환들을 증상과 체질에 맞춰 1:1 맞춤 치료 프로그램을 체계적으로 진행하고 있습니다.
            </p>
            <p>
              내원하시면 문진, 망진, 맥진, 복진 등을 진행하며<br />
              정확한 몸 상태를 체크한 후에 적절한 치료 계획을 세우게 됩니다.
            </p>
            <p>
              치료 기간은 환자의 몸 상태에 따라 달라질 수 있습니다.<br />
              다양한 치험례와 노하우를 지속적으로 연구 발전해나가고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Column Feature Section */}
      <section className="py-16 px-6 bg-[#F8F7F0] text-[#222]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">

          {/* Column 1 */}
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl font-bold mb-8 text-[#000145]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
              동제당 한의원과 함께
            </h3>
            <div className="space-y-6 leading-loose font-light text-lg text-gray-700" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
              <p>
                동제당한의원에서<br />
                건강한 변화의 시작을 알립니다.
              </p>
              <p>
                가족을 품는 정성 가득한 한약으로<br />
                마음을 따뜻하게 감싸드리며,<br />
                새로운 시작을 위해<br />
                함께 걸어가는<br />
                건강 이야기를 나눠요.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col h-full">
            {/* Top */}
            <div className="flex-1 flex flex-col items-center justify-start pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-6 mt-4 text-[#000145]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                따뜻한 한방치료
              </h3>
              <p className="leading-loose font-light text-lg text-gray-700" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                한방치료의 따뜻한 포옹으로<br />
                오래된 질환에 대한 걱정과 의구심을<br />
                녹여드리는<br />
                원칙을 준수한 치료법
              </p>
            </div>
            {/* Bottom */}
            <div className="flex-1 flex flex-col items-center justify-end pt-8">
              <h3 className="text-xl font-bold mb-6 text-[#000145]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                마음을 함께 나누는 친절한 상담
              </h3>
              <p className="leading-loose font-light text-lg text-gray-700" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                마음을 열고<br />
                친절하게 상담하며,<br />
                가슴에 담긴 이야기를<br />
                함께 듣습니다
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col h-full">
            {/* Top */}
            <div className="flex-1 flex flex-col items-center justify-start pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-6 mt-4 text-[#000145]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                정확한 진단과 처방
              </h3>
              <p className="leading-loose font-light text-lg text-gray-700" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                정확한 진단과<br />
                알맞은 처방으로<br />
                건강한 변화를<br />
                이끌어드립니다
              </p>
            </div>
            {/* Bottom */}
            <div className="flex-1 flex flex-col items-center justify-end pt-8">
              <h3 className="text-xl font-bold mb-6 text-[#000145]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                건강한 일상을 지키는 사후 관리
              </h3>
              <p className="leading-loose font-light text-lg text-gray-700" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                정기적인 문진과<br />
                꼼꼼한 사후 관리로<br />
                건강한 일상을<br />
                함께 유지해요
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-6 bg-[#F8F7F0]">
        <div className="max-w-[1200px] mx-auto">

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center">

            {/* Column 1: Medical Hours */}
            <div className="flex flex-col h-full border-t border-gray-300 pt-8">
              <h3 className="text-[17px] font-bold mb-8 text-[#222]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                진료시간
              </h3>
              <div className="space-y-2 text-[15px] text-gray-600 font-light leading-relaxed mb-8" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                <p>평일 09:30~19:00</p>
                <p>점심시간 13:00~14:00</p>
                <p>토요일 09:30~14:00</p>
                <p>일요일, 공휴일 휴진</p>
              </div>
              <div className="mt-auto space-y-4">
                <p className="text-xs text-gray-500">진료는 사전예약제로 운영됩니다.</p>
                <p className="text-xl font-bold text-[#000145]">032.765.7733</p>
              </div>
            </div>

            {/* Column 2: Blog */}
            <div className="flex flex-col h-full border-t border-gray-300 pt-8">
              <h3 className="text-[17px] font-bold mb-8 text-[#222]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                블로그
              </h3>
              <div className="space-y-2 text-[15px] text-gray-600 font-light leading-relaxed mb-8" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                <p>동제당이 들려드리는</p>
                <p>약재이야기, 건강이야기 등을</p>
                <p>블로그에서 만나보세요.</p>
              </div>
              <div className="mt-auto">
                <a
                  href="https://blog.naver.com/dongjedang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-gray-400 text-gray-700 text-xs hover:bg-gray-100 transition-colors"
                >
                  블로그 바로가기
                </a>
              </div>
            </div>

            {/* Column 3: Location */}
            <div className="flex flex-col h-full border-t border-gray-300 pt-8">
              <h3 className="text-[17px] font-bold mb-8 text-[#222]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                오시는 길
              </h3>
              <div className="space-y-2 text-[15px] text-gray-600 font-light leading-relaxed mb-8" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                <p>인천시 동구 동산로 88 2층</p>
                <p>(송림동 59-1)</p>
                <p>이마트 트레이더스 맞은편</p>
                <p>송림 패션몰 옆</p>
              </div>
              <div className="mt-auto">
                <Link
                  href="/location"
                  className="inline-block px-6 py-3 border border-gray-400 text-gray-700 text-xs hover:bg-gray-100 transition-colors"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* Column 4: Reservation */}
            <div className="flex flex-col h-full border-t border-gray-300 pt-8">
              <h3 className="text-[17px] font-bold mb-8 text-[#222]" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                예약
              </h3>
              <div className="space-y-2 text-[15px] text-gray-600 font-light leading-relaxed mb-8" style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}>
                <p>환자 한분한분을 보다 세밀하게 진료하기</p>
                <p>위해 원칙상 예약제로 운영됩니다. 사전</p>
                <p>예약 없이 방문시 대기시간이 다소 길어</p>
                <p>질 수 있습니다.</p>
              </div>
              <div className="mt-auto">
                <a
                  href="https://m.place.naver.com/hospital/13240803/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-gray-400 text-gray-700 text-xs hover:bg-gray-100 transition-colors"
                >
                  문의하기
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
