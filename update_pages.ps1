
$template = @"
'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';

const titleMap: { [key: string]: string } = {
  'about': '동제당 한의원',
  'space': '쉼의 시작, 회복의 공간',
  'medicine': '동제당 청정 한약'
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
"@

$files = Get-ChildItem -Path "app/about" -Recurse -Filter "page.tsx"

foreach ($file in $files) {
    Set-Content -Path $file.FullName -Value $template -Encoding UTF8
    Write-Host "Updated: $($file.FullName)"
}
