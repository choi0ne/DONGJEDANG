'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <NoticeBar />
      <header className="bg-[#F8F7F0] sticky top-0 z-[100]">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-center py-4 gap-4">
            <Link href="/" className="group block shrink-0">
              <img
                src="/신로고_가로1.jpg"
                alt="동제당한의원 로고"
                className="h-9 w-auto object-contain group-hover:opacity-90 transition-opacity mix-blend-multiply"
              />
            </Link>
            <nav className="flex gap-6 flex-wrap items-center justify-center">
              <NavLinks />
            </nav>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative flex justify-center items-center py-4 min-h-[60px]">
            <Link href="/" className="group block" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/신로고_가로1.jpg"
                alt="동제당한의원 로고"
                className="h-7 w-auto object-contain mix-blend-multiply"
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-primary hover:bg-secondary/10 rounded-full transition-colors"
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>

          {/* Drawer */}
          <div className="absolute top-0 left-0 w-[80%] max-w-[300px] h-full bg-[#F8F7F0] shadow-2xl flex flex-col animate-slideInLeft">
            <div className="p-6 flex justify-between items-center">
              <img
                src="/신로고_가로1.jpg"
                alt="동제당한의원 로고"
                className="h-6 w-auto object-contain mix-blend-multiply"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-text/50 hover:text-primary transition-colors"
                aria-label="메뉴 닫기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-6">
              {/* Search Bar */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder=""
                  className="w-full pl-12 pr-4 py-3 border border-black rounded-none focus:outline-none focus:border-primary text-base font-sans"
                />
                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-text/80 hover:text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>동제당한의원</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)} isSubItem>원장소개</MobileNavLink>
                    <MobileNavLink href="/location" onClick={() => setIsMobileMenuOpen(false)} isSubItem>오시는 길</MobileNavLink>
                    <MobileNavLink href="/about/space" onClick={() => setIsMobileMenuOpen(false)} isSubItem>쉼의 시작, 회복의 공간</MobileNavLink>
                    <MobileNavLink href="/about/medicine" onClick={() => setIsMobileMenuOpen(false)} isSubItem>동제당 청정한약</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/detox" onClick={() => setIsMobileMenuOpen(false)}>해독/비만</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/detox" onClick={() => setIsMobileMenuOpen(false)} isSubItem>소개</MobileNavLink>
                    <MobileNavLink href="/clinic/detox/fasting" onClick={() => setIsMobileMenuOpen(false)} isSubItem>절식해독프로그램</MobileNavLink>
                    <MobileNavLink href="/clinic/detox/constitution" onClick={() => setIsMobileMenuOpen(false)} isSubItem>체질식해독프로그램</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/skin" onClick={() => setIsMobileMenuOpen(false)}>피부질환</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/skin/dyshidrosis" onClick={() => setIsMobileMenuOpen(false)} isSubItem>한포진</MobileNavLink>
                    <MobileNavLink href="/clinic/skin/atopy" onClick={() => setIsMobileMenuOpen(false)} isSubItem>아토피피부염</MobileNavLink>
                    <MobileNavLink href="/clinic/skin/eczema" onClick={() => setIsMobileMenuOpen(false)} isSubItem>만성습진</MobileNavLink>
                    <MobileNavLink href="/clinic/skin/seborrheic" onClick={() => setIsMobileMenuOpen(false)} isSubItem>지루성피부염</MobileNavLink>
                    <MobileNavLink href="/clinic/skin/psoriasis" onClick={() => setIsMobileMenuOpen(false)} isSubItem>건선</MobileNavLink>
                    <MobileNavLink href="/clinic/skin/urticaria" onClick={() => setIsMobileMenuOpen(false)} isSubItem>두드러기</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/ent" onClick={() => setIsMobileMenuOpen(false)}>이비인후과질환</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/ent/rhinitis" onClick={() => setIsMobileMenuOpen(false)} isSubItem>비염</MobileNavLink>
                    <MobileNavLink href="/clinic/ent/sinusitis" onClick={() => setIsMobileMenuOpen(false)} isSubItem>축농증</MobileNavLink>
                    <MobileNavLink href="/clinic/ent/otolithiasis" onClick={() => setIsMobileMenuOpen(false)} isSubItem>만성이석증</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/digestive" onClick={() => setIsMobileMenuOpen(false)}>소화기질환</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/digestive/reflux" onClick={() => setIsMobileMenuOpen(false)} isSubItem>역류성식도염</MobileNavLink>
                    <MobileNavLink href="/clinic/digestive/gastritis" onClick={() => setIsMobileMenuOpen(false)} isSubItem>만성위염</MobileNavLink>
                    <MobileNavLink href="/clinic/digestive/ibs" onClick={() => setIsMobileMenuOpen(false)} isSubItem>과민성대장증후군</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/neuro" onClick={() => setIsMobileMenuOpen(false)}>신경정신질환</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/neuro/insomnia" onClick={() => setIsMobileMenuOpen(false)} isSubItem>불면증</MobileNavLink>
                    <MobileNavLink href="/clinic/neuro/anxiety" onClick={() => setIsMobileMenuOpen(false)} isSubItem>불안장애</MobileNavLink>
                    <MobileNavLink href="/clinic/neuro/panic" onClick={() => setIsMobileMenuOpen(false)} isSubItem>공황장애</MobileNavLink>
                    <MobileNavLink href="/clinic/neuro/depression" onClick={() => setIsMobileMenuOpen(false)} isSubItem>우울증</MobileNavLink>
                    <MobileNavLink href="/clinic/neuro/adhd" onClick={() => setIsMobileMenuOpen(false)} isSubItem>ADHD</MobileNavLink>
                    <MobileNavLink href="/clinic/neuro/ocd" onClick={() => setIsMobileMenuOpen(false)} isSubItem>강박증</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/women" onClick={() => setIsMobileMenuOpen(false)}>여성질환</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/women/pcos" onClick={() => setIsMobileMenuOpen(false)} isSubItem>다낭성난소증후군</MobileNavLink>
                    <MobileNavLink href="/clinic/women/menopause" onClick={() => setIsMobileMenuOpen(false)} isSubItem>갱년기증상</MobileNavLink>
                    <MobileNavLink href="/clinic/women/cystitis" onClick={() => setIsMobileMenuOpen(false)} isSubItem>만성방광염/질염</MobileNavLink>
                    <MobileNavLink href="/clinic/women/pregnancy" onClick={() => setIsMobileMenuOpen(false)} isSubItem>임신준비</MobileNavLink>
                    <MobileNavLink href="/clinic/women/postpartum" onClick={() => setIsMobileMenuOpen(false)} isSubItem>산후조리</MobileNavLink>
                    <MobileNavLink href="/clinic/women/sanhuphung" onClick={() => setIsMobileMenuOpen(false)} isSubItem>산후풍</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/pain" onClick={() => setIsMobileMenuOpen(false)}>통증/신경질환</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/pain/headache" onClick={() => setIsMobileMenuOpen(false)} isSubItem>만성두통</MobileNavLink>
                    <MobileNavLink href="/clinic/pain/tinnitus" onClick={() => setIsMobileMenuOpen(false)} isSubItem>이명</MobileNavLink>
                    <MobileNavLink href="/clinic/pain/dizziness" onClick={() => setIsMobileMenuOpen(false)} isSubItem>어지러움</MobileNavLink>
                    <MobileNavLink href="/clinic/pain/tos" onClick={() => setIsMobileMenuOpen(false)} isSubItem>흉곽출구증후군</MobileNavLink>
                    <MobileNavLink href="/clinic/pain/tennis-elbow" onClick={() => setIsMobileMenuOpen(false)} isSubItem>테니스엘보</MobileNavLink>
                    <MobileNavLink href="/clinic/pain/si-joint" onClick={() => setIsMobileMenuOpen(false)} isSubItem>천장관절통</MobileNavLink>
                    <MobileNavLink href="/clinic/pain/knee" onClick={() => setIsMobileMenuOpen(false)} isSubItem>슬관절통</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/growth" onClick={() => setIsMobileMenuOpen(false)}>소아/수험생</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/growth/height" onClick={() => setIsMobileMenuOpen(false)} isSubItem>키성장한약</MobileNavLink>
                    <MobileNavLink href="/clinic/growth/mind" onClick={() => setIsMobileMenuOpen(false)} isSubItem>마음튼튼한약</MobileNavLink>
                    <MobileNavLink href="/clinic/growth/student" onClick={() => setIsMobileMenuOpen(false)} isSubItem>수험생 총명탕</MobileNavLink>
                  </div>
                </div>
                <div className="flex flex-col">
                  <MobileNavLink href="/clinic/gongjindan" onClick={() => setIsMobileMenuOpen(false)}>공진단</MobileNavLink>
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 ml-2">
                    <MobileNavLink href="/clinic/gongjindan/original" onClick={() => setIsMobileMenuOpen(false)} isSubItem>원방공진단</MobileNavLink>
                    <MobileNavLink href="/clinic/gongjindan/deer-antler" onClick={() => setIsMobileMenuOpen(false)} isSubItem>녹용공진단</MobileNavLink>
                    <MobileNavLink href="/clinic/gongjindan/cheongsimhwan" onClick={() => setIsMobileMenuOpen(false)} isSubItem>청심환</MobileNavLink>
                  </div>
                </div>
                <MobileNavLink
                  href="https://map.naver.com/p/entry/place/13240803?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202511271924&locale=ko&svcName=map_pcv5"
                  onClick={() => {
                    alert("해당질환의 진료는 예약진료로 진행하고있습니다.");
                    setIsMobileMenuOpen(false);
                  }}
                  target="_blank"
                >
                  문의하기
                </MobileNavLink>

                <div className="mt-4 pt-4">
                  <MobileNavLink href="/location" onClick={() => setIsMobileMenuOpen(false)} isSubItem>오시는길</MobileNavLink>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLinks() {
  const links = [
    { href: "/about", label: "동제당한의원" },
    { href: "/clinic/detox", label: "해독/비만" },
    { href: "/clinic/skin", label: "피부질환" },
    { href: "/clinic/ent", label: "이비인후과질환" },
    { href: "/clinic/digestive", label: "소화기질환" },
    { href: "/clinic/neuro", label: "신경정신질환" },
    { href: "/clinic/women", label: "여성질환" },
    { href: "/clinic/pain", label: "통증/신경질환" },
    { href: "/clinic/growth", label: "소아/수험생" },
    { href: "/clinic/gongjindan", label: "공진단" },
    { href: "https://map.naver.com/p/entry/place/13240803?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202511271924&locale=ko&svcName=map_pcv5", label: "문의하기" },
  ];

  return (
    <>
      {links.map((link) => {
        if (link.label === "동제당한의원") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/about" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">원장소개</Link>
                  <Link href="/location" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">오시는 길</Link>
                  <Link href="/about/space" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">쉼의 시작, 회복의 공간</Link>
                  <Link href="/about/medicine" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">동제당 청정한약</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "해독/비만") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/detox" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">소개</Link>
                  <Link href="/clinic/detox/fasting" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">절식해독프로그램</Link>
                  <Link href="/clinic/detox/constitution" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">체질식해독프로그램</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "이비인후과질환") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/ent/rhinitis" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">비염</Link>
                  <Link href="/clinic/ent/sinusitis" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">축농증</Link>
                  <Link href="/clinic/ent/otolithiasis" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">만성이석증</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "소화기질환") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/digestive/reflux" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">역류성식도염</Link>
                  <Link href="/clinic/digestive/gastritis" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">만성위염</Link>
                  <Link href="/clinic/digestive/ibs" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">과민성대장증후군</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "신경정신질환") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/neuro/insomnia" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">불면증</Link>
                  <Link href="/clinic/neuro/anxiety" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">불안장애</Link>
                  <Link href="/clinic/neuro/panic" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">공황장애</Link>
                  <Link href="/clinic/neuro/depression" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">우울증</Link>
                  <Link href="/clinic/neuro/adhd" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">ADHD</Link>
                  <Link href="/clinic/neuro/ocd" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">강박증</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "여성질환") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/women/pcos" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">다낭성난소증후군</Link>
                  <Link href="/clinic/women/menopause" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">갱년기증상</Link>
                  <Link href="/clinic/women/cystitis" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">만성방광염/질염</Link>
                  <Link href="/clinic/women/pregnancy" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">임신준비</Link>
                  <Link href="/clinic/women/postpartum" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">산후조리</Link>
                  <Link href="/clinic/women/sanhuphung" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">산후풍</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "통증/신경질환") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/pain/headache" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">만성두통</Link>
                  <Link href="/clinic/pain/tinnitus" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">이명</Link>
                  <Link href="/clinic/pain/dizziness" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">어지러움</Link>
                  <Link href="/clinic/pain/tos" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">흉곽출구증후군</Link>
                  <Link href="/clinic/pain/tennis-elbow" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">테니스엘보</Link>
                  <Link href="/clinic/pain/si-joint" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">천장관절통</Link>
                  <Link href="/clinic/pain/knee" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">슬관절통</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "소아/수험생") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/growth/height" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">키성장한약</Link>
                  <Link href="/clinic/growth/mind" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">마음튼튼한약</Link>
                  <Link href="/clinic/growth/student" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">수험생 총명탕</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "공진단") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/gongjindan/original" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">원방공진단</Link>
                  <Link href="/clinic/gongjindan/deer-antler" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">녹용공진단</Link>
                  <Link href="/clinic/gongjindan/cheongsimhwan" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">청심환</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "피부질환") {
          return (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative py-2 whitespace-nowrap block"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#F8F7F0] shadow-lg rounded-lg overflow-hidden flex flex-col py-2">
                  <Link href="/clinic/skin/dyshidrosis" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">한포진</Link>
                  <Link href="/clinic/skin/atopy" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">아토피피부염</Link>
                  <Link href="/clinic/skin/eczema" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">만성습진</Link>
                  <Link href="/clinic/skin/seborrheic" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">지루성피부염</Link>
                  <Link href="/clinic/skin/psoriasis" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">건선</Link>
                  <Link href="/clinic/skin/urticaria" className="px-4 py-2 font-serif text-[15px] font-medium text-text/80 hover:bg-secondary/5 hover:text-primary transition-colors text-center">두드러기</Link>
                </div>
              </div>
            </div>
          );
        }
        if (link.label === "문의하기") {
          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative group py-2 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                alert("해당질환의 진료는 예약진료로 진행하고있습니다.");
              }}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          );
        }
        return (
          <Link
            key={link.href}
            href={link.href}
            className="text-text/80 font-serif text-[15px] font-medium hover:text-primary hover:font-bold transition-all duration-300 relative group py-2 whitespace-nowrap"
            target={link.href.startsWith('http') ? "_blank" : undefined}
            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            {link.label}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        );
      })}
    </>
  );
}

function MobileNavLink({ href, onClick, children, isSubItem = false, target }: { href: string, onClick: () => void, children: React.ReactNode, isSubItem?: boolean, target?: string }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-[15px] text-text/80 font-serif font-medium hover:text-primary hover:pl-2 transition-all duration-300 block ${!isSubItem && 'pb-2'}`}
      target={target}
      rel={target === '_blank' ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

function NoticeBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white py-5 px-4 text-xl font-medium relative z-[110]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-4">
        <div className="flex-1 text-center">
          <span>[공지] 진료 시간 변경 안내: 매주 수요일은 오후 2시부터 진료합니다. 내원에 착오 없으시길 바랍니다.</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/70 hover:text-white transition-colors p-1"
          aria-label="공지 닫기"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
