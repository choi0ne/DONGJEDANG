import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Reservation() {
    return (
        <div className="min-h-screen bg-background text-text">
            <Header />

            <main className="max-w-[1100px] mx-auto px-5 py-20">
                <h1 className="text-4xl font-bold mb-12 text-center font-serif text-primary">
                    진료 예약
                </h1>

                <div className="bg-white p-10 rounded-xl shadow-sm border border-secondary/20 max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-lg mb-2">여기는 온라인으로 예약하는 섹션입니다.</p>
                        <p className="text-text/70">아래 항목에 정확히 기입해주세요~</p>
                    </div>

                    {/* Reservation Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-primary mb-2">이름</label>
                            <input type="text" className="block w-full rounded-md border-secondary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border bg-background" placeholder="홍길동" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-primary mb-2">연락처</label>
                            <input type="tel" className="block w-full rounded-md border-secondary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border bg-background" placeholder="010-0000-0000" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-primary mb-2">예약 희망일</label>
                            <input type="date" className="block w-full rounded-md border-secondary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border bg-background" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-primary mb-2">증상 및 메모</label>
                            <textarea className="block w-full rounded-md border-secondary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border bg-background" rows={4} placeholder="증상을 간단히 적어주세요."></textarea>
                        </div>
                        <button type="button" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300">
                            예약 신청하기
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}
