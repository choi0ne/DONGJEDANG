'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';

const titleMap: { [key: string]: string } = {
  'clinic': '진료 안내',
  'detox': '해독/비만 클리닉',
  'fasting': '절식 해독 프로그램',
  'constitution': '체질식 해독 프로그램',
  'skin': '피부 질환 클리닉',
  'dyshidrosis': '한포진',
  'atopy': '아토피 피부염',
  'eczema': '만성 습진',
  'seborrheic': '지루성 피부염',
  'psoriasis': '건선',
  'urticaria': '두드러기',
  'ent': '이비인후과 질환',
  'rhinitis': '비염',
  'sinusitis': '축농증',
  'otolithiasis': '만성 이석증',
  'digestive': '소화기 질환',
  'reflux': '역류성 식도염',
  'gastritis': '만성 위염',
  'ibs': '과민성 대장 증후군',
  'neuro': '신경정신 질환',
  'insomnia': '불면증',
  'anxiety': '불안 장애',
  'panic': '공황 장애',
  'depression': '우울증',
  'adhd': 'ADHD',
  'ocd': '강박증',
  'women': '여성 질환',
  'pcos': '다낭성 난소 증후군',
  'menopause': '갱년기 증상',
  'cystitis': '만성 방광염/질염',
  'pregnancy': '임신 준비',
  'postpartum': '산후 조리',
  'sanhuphung': '산후풍',
  'pain': '통증/신경 질환',
  'headache': '만성 두통',
  'tinnitus': '이명',
  'dizziness': '어지러움',
  'tos': '흉곽출구 증후군',
  'tennis-elbow': '테니스 엘보',
  'si-joint': '천장관절통',
  'knee': '슬관절통',
  'growth': '소아/수험생 클리닉',
  'height': '키성장 한약',
  'mind': '마음 튼튼 한약',
  'student': '수험생 총명탕',
  'gongjindan': '공진단 클리닉',
  'original': '원방 공진단',
  'deer-antler': '녹용 공진단',
  'cheongsimhwan': '청심환',
  'obesity': '비만 클리닉',
  'neuralgia': '신경통'
};

export default function Page() {
    const pathname = usePathname();
    const lastSegment = pathname?.split('/').pop() || '';
    const title = titleMap[lastSegment] || lastSegment.toUpperCase();

    return (
        <div className="min-h-screen font-sans text-[#222]">
            <Header />
            <main className="max-w-[1200px] mx-auto px-6 py-32 text-center animate-fadeInUp">
                <span className="text-[#d4af37] font-bold tracking-widest uppercase mb-4 block">Dongjedang Clinic</span>
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-[#222]">{title}</h1>
                <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-12"></div>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                    동제당한의원은 환자분의 건강한 삶을 위해 최선을 다합니다.<br/>
                    상세한 진료 내용은 내원 시 친절하게 안내해 드리겠습니다.
                </p>
            </main>
            <Footer />
        </div>
    );
}
