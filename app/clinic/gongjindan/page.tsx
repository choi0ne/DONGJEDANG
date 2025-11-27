'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubPageHeader from '../../components/SubPageHeader';

export default function GongjindanClinic() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <SubPageHeader
                    title="동제당 공진단"
                    imageSrc="/공진단.png"
                />

                <div className="max-w-[1200px] mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp delay-200">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1626202378377-664402602796?q=80&w=2070&auto=format&fit=crop"
                                alt="공진단"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold font-serif text-primary">황제의 보약, 공진단</h2>
                            <p className="text-lg text-text/80 leading-relaxed">
                                공진단은 예로부터 황제에게 진상되던 명약으로, 원기를 회복하고 면역력을 강화하는 데 탁월한 효과가 있습니다.
                                동제당한의원의 공진단은 엄선된 정품 사향과 녹용, 당귀, 산수유를 사용하여 전통 방식 그대로 정성껏 조제합니다.
                            </p>
                            <ul className="space-y-3 text-text/80">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    <span>만성 피로 회복</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    <span>면역력 및 체력 증진</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    <span>기억력 개선 및 노화 방지</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
