import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function FAQ() {
    const primaryColor = '#2c5f2d';

    return (
        <div className="min-h-screen bg-[#f9fbf7] text-[#333]">
            <Header />

            <main className="max-w-[1100px] mx-auto px-5 py-20">
                <h1 className="text-4xl font-bold mb-10 text-center font-[family-name:var(--font-nanum-myeongjo)]" style={{ color: primaryColor }}>
                    자주 묻는 질문 (FAQ)
                </h1>

                <div className="bg-white p-10 rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                    <div className="space-y-6">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-xl font-bold">예약은 가능한가요?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                <p>예! 당일 및 미리 예약 가능합니다.</p>
                            </div>
                        </details>
                        <hr className="border-gray-200" />

                        {/* Add more FAQ items here as needed */}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
