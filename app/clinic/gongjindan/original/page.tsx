'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import SubPageHeader from '../../../components/SubPageHeader';

export default function OriginalGongjindan() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <SubPageHeader
                    title="원방공진단"
                    subtitle="황제의 보약, 사향의 기운으로 몸의 활력을 되찾아 드립니다."
                    englishTitle="Original Gongjindan"
                    imageSrc="/공진단.png"
                />

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">효능 및 특징</h2>
                            <p className="text-text/80">
                                정품 사향을 사용하여 막힌 기혈을 뚫어주고,<br />
                                원기를 회복시켜 만성 피로와 면역력 저하를 개선합니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
