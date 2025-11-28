'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<'home' | 'chat' | 'settings' | 'contact-info' | 'start-chat'>('home');
    const [messages, setMessages] = useState<{ type: 'bot' | 'user', text: string }[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

    // Settings State
    const [userInfo, setUserInfo] = useState({ name: '', contact: '' });
    const [countryCode, setCountryCode] = useState('+82');
    const [language, setLanguage] = useState('ko');
    const [isTranslationEnabled, setIsTranslationEnabled] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            console.log("File selected:", e.target.files[0]);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isLoading, view]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userText = inputValue;
        setInputValue("");

        // 사용자 메시지 추가
        const newMessages = [...messages, { type: 'user' as const, text: userText }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessages(prev => [...prev, { type: 'bot', text: data.response }]);
            } else {
                console.error("API Error:", data.error);
                setMessages(prev => [...prev, { type: 'bot', text: "죄송합니다. 잠시 후 다시 시도해 주세요. (API 키 확인 필요)" }]);
            }
        } catch (error) {
            console.error("Network Error:", error);
            setMessages(prev => [...prev, { type: 'bot', text: "네트워크 오류가 발생했습니다." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    const handleInquiryClick = () => {
        setView('chat');
        // 첫 진입 시 웰컴 메시지가 없으면 추가
        if (messages.length === 0) {
            setMessages([{
                type: 'bot', text: `안녕하세요.
동제당 한의원 입니다!
질환 치료 관련 문의사항이 있다면 알려주세요.
최대한 빠른 답변을
제공하고자 노력하고 있지만,
문의량이 많아 답변이 다소 지연될 수 있는 점 양해부탁드립니다

운영시간중 답변은 최대한 3시간 이내
신속히 안내드리겠습니다.
운영시간외에는
익일 순차적으로 도와드릴게요!` }]);
        }
    };

    const handleBackToHome = () => {
        setView('home');
    };

    const handleStartNewChat = () => {
        setMessages([]);
        setView('chat');
        // Add welcome message for new chat
        setMessages([{
            type: 'bot', text: `안녕하세요.
동제당 한의원 입니다!
질환 치료 관련 문의사항이 있다면 알려주세요.` }]);
    };

    const handleSaveContactInfo = () => {
        setView('settings');
        // Here you would typically save these settings
        console.log("Contact Info saved:", { ...userInfo, countryCode });
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-10 right-10 z-[250] w-[60px] h-[60px] bg-[#2F5233] text-white rounded-full shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center border-2 border-white/20"
                    aria-label="AI 상담 열기"
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-10 right-10 z-[250] w-[567px] h-[945px] max-h-[calc(100vh-150px)] bg-[#F8F7F0] rounded-[30px] shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fadeInUp font-nanum">
                    {/* Header */}
                    <div className="bg-white/80 backdrop-blur-md p-4 flex justify-between items-center text-black border-b border-gray-100 z-10 sticky top-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#2F5233] flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm">
                                동
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-base font-nanum text-[#222222]">동제당한의원</span>
                                <span className="text-[10px] text-gray-500 font-nanum">자연을 담은 치유</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Back Button Logic */}
                            {(view === 'settings' || view === 'contact-info' || view === 'start-chat') && (
                                <button
                                    onClick={() => {
                                        if (view === 'contact-info') setView('settings');
                                        else if (view === 'start-chat') handleBackToHome();
                                        else handleBackToHome();
                                    }}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto p-0 scrollbar-hide bg-[#F8F7F0]">

                        {/* HOME VIEW */}
                        {view === 'home' && (
                            <div className="p-6 space-y-8">
                                <div className="space-y-4 mt-10 text-center">
                                    <h2 className="text-2xl font-bold text-[#222222] leading-relaxed font-nanum">
                                        안녕하세요.<br />
                                        <span className="text-[#2F5233]">동제당한의원</span> 입니다.
                                    </h2>
                                    <p className="text-sm text-gray-500 leading-relaxed font-nanum">
                                        궁금한 점이 있으신가요?<br />
                                        언제든지 편하게 물어봐주세요.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {/* Start Inquiry Button */}
                                    <button
                                        onClick={() => setView('start-chat')}
                                        className="w-full bg-[#2F5233] hover:bg-[#264229] text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden font-nanum"
                                    >
                                        <div className="relative z-10 flex justify-between items-center">
                                            <div>
                                                <span className="block text-sm opacity-80 mb-1">새로운 문의하기</span>
                                                <span className="block text-lg font-bold">상담 시작하기</span>
                                            </div>
                                            <div className="bg-white/20 p-2 rounded-full">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>

                                    {/* Quick Links */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-[#2F5233]/30 transition-all text-left font-nanum group">
                                            <span className="block text-xs text-gray-400 mb-1 group-hover:text-[#2F5233]">진료 시간</span>
                                            <span className="block text-sm font-bold text-[#222222]">안내 보기</span>
                                        </button>
                                        <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-[#2F5233]/30 transition-all text-left font-nanum group">
                                            <span className="block text-xs text-gray-400 mb-1 group-hover:text-[#2F5233]">오시는 길</span>
                                            <span className="block text-sm font-bold text-[#222222]">지도 보기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CHAT VIEW */}
                        {view === 'chat' && (
                            <div className="p-4 space-y-4 min-h-full">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                                        {msg.type === 'bot' && (
                                            <div className="w-8 h-8 rounded-full bg-[#2F5233] flex items-center justify-center text-white text-[10px] font-bold mr-2 mt-1 shadow-sm shrink-0">
                                                동
                                            </div>
                                        )}
                                        <div
                                            className={`max-w-[80%] p-4 rounded-[20px] text-sm leading-relaxed shadow-sm font-nanum ${msg.type === 'user'
                                                    ? 'bg-[#2F5233] text-white rounded-tr-none'
                                                    : 'bg-white text-[#222222] border border-gray-100 rounded-tl-none'
                                                }`}
                                        >
                                            {msg.text.split('\n').map((line, i) => (
                                                <span key={i}>
                                                    {line}
                                                    {i < msg.text.split('\n').length - 1 && <br />}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start animate-fadeIn">
                                        <div className="w-8 h-8 rounded-full bg-[#2F5233] flex items-center justify-center text-white text-[10px] font-bold mr-2 mt-1 shadow-sm">
                                            동
                                        </div>
                                        <div className="bg-white p-4 rounded-[20px] rounded-tl-none border border-gray-100 shadow-sm">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}

                        {/* START CHAT VIEW */}
                        {view === 'start-chat' && (
                            <div className="flex flex-col items-center justify-center h-full p-6 animate-fadeIn text-center">
                                <div className="w-20 h-20 bg-[#2F5233]/10 rounded-full flex items-center justify-center mb-6">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2F5233" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#222222] mb-3 font-nanum">새 문의 시작하기</h3>
                                <p className="text-gray-500 mb-8 text-sm font-nanum leading-relaxed">
                                    기존 대화 내용이 초기화되고<br />
                                    새로운 상담이 시작됩니다.
                                </p>
                                <button
                                    onClick={handleStartNewChat}
                                    className="w-full py-4 bg-[#2F5233] hover:bg-[#264229] text-white rounded-2xl font-bold transition-colors shadow-lg font-nanum"
                                >
                                    시작하기
                                </button>
                            </div>
                        )}

                        {/* SETTINGS VIEW */}
                        {view === 'settings' && (
                            <div className="p-5 space-y-6 animate-fadeIn">
                                <h3 className="text-xl font-bold text-[#222222] font-nanum">설정</h3>

                                {/* Contact Info Section */}
                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                    <h4 className="text-sm font-bold text-[#222222] mb-3 font-nanum">내 정보</h4>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-[#222222] font-nanum">{userInfo.name || '이름 없음'}</span>
                                            <span className="text-xs text-gray-500 font-nanum">{countryCode} {userInfo.contact || '연락처 없음'}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setView('contact-info')}
                                        className="w-full py-3 bg-[#F8F7F0] hover:bg-gray-100 text-[#222222] text-sm font-medium rounded-xl transition-colors border border-gray-200 font-nanum"
                                    >
                                        정보 수정하기
                                    </button>
                                </div>

                                {/* Language Section */}
                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
                                    <h4 className="text-sm font-bold text-[#222222] font-nanum">언어 설정</h4>
                                    <div>
                                        <select
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                            className="w-full px-3 py-3 bg-[#F8F7F0] border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F5233] text-sm appearance-none font-nanum"
                                        >
                                            <option value="ko">한국어 (Korean)</option>
                                            <option value="en">English</option>
                                            <option value="zh">中文 (Chinese)</option>
                                            <option value="ja">日本語 (Japanese)</option>
                                            <option value="other">Other (All Languages)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CONTACT INFO VIEW */}
                        {view === 'contact-info' && (
                            <div className="p-5 space-y-6 animate-fadeIn">
                                <h3 className="text-xl font-bold text-[#222222] font-nanum">내 연락처 정보</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 font-nanum">이름</label>
                                        <input
                                            type="text"
                                            value={userInfo.name}
                                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F5233] text-sm transition-all font-nanum"
                                            placeholder="이름을 입력하세요"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 font-nanum">휴대폰 번호</label>
                                        <div className="flex gap-2">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="w-[100px] px-2 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F5233] text-sm appearance-none text-center font-nanum"
                                            >
                                                <option value="+82">🇰🇷 +82</option>
                                                <option value="+1">🇺🇸 +1</option>
                                            </select>
                                            <input
                                                type="tel"
                                                value={userInfo.contact}
                                                onChange={(e) => setUserInfo({ ...userInfo, contact: e.target.value })}
                                                className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F5233] text-sm transition-all font-nanum"
                                                placeholder="번호를 입력하세요"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button
                                        onClick={handleSaveContactInfo}
                                        className="w-full py-4 bg-[#2F5233] hover:bg-[#264229] text-white rounded-xl font-bold transition-colors shadow-md font-nanum"
                                    >
                                        저장하기
                                    </button>
                                    <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed font-nanum">
                                        대화를 하다 오프라인이 되시면 위 연락처로<br />
                                        답변 알림을 받을 수 있어요.<br />
                                        연락처를 정확히 기재해주세요.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area (Only in Chat View) */}
                    {view === 'chat' && (
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="메세지를 입력하세요"
                                    className="w-full pl-5 pr-14 py-4 bg-[#F8F7F0] border-none rounded-[24px] focus:ring-2 focus:ring-[#2F5233]/20 focus:bg-white transition-all text-sm font-nanum shadow-inner"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="absolute right-2 p-2 bg-[#2F5233] text-white rounded-full hover:bg-[#264229] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Bottom Navigation */}
                    <div className="h-[60px] bg-white border-t border-gray-100 flex justify-around items-center shrink-0 z-20">
                        <button
                            onClick={() => setView('home')}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${view === 'home' ? 'text-[#2F5233]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={view === 'home' ? "2.5" : "2"}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-[10px] mt-1 font-nanum font-medium">홈</span>
                        </button>
                        <button
                            onClick={() => setView('start-chat')}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${view === 'chat' || view === 'start-chat' ? 'text-[#2F5233]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={view === 'chat' || view === 'start-chat' ? "2.5" : "2"}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span className="text-[10px] mt-1 font-nanum font-medium">대화</span>
                        </button>
                        <button
                            onClick={() => setView('settings')}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${view === 'settings' || view === 'contact-info' ? 'text-[#2F5233]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={view === 'settings' || view === 'contact-info' ? "2.5" : "2"}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-[10px] mt-1 font-nanum font-medium">설정</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Phone Number Modal */}
            {isPhoneModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsPhoneModalOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl p-8 shadow-2xl w-full max-w-sm text-center animate-fadeInUp">
                        <h3 className="text-lg font-bold text-text mb-2">전화 문의</h3>
                        <p className="text-text/60 mb-6 text-sm">아래 번호로 연락주시면 친절히 안내해드리겠습니다.</p>

                        <a href="tel:032-765-7733" className="block text-3xl font-bold text-black mb-6 hover:scale-105 transition-transform">
                            032-765-7733
                        </a>

                        <button
                            onClick={() => setIsPhoneModalOpen(false)}
                            className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-text/80 rounded-xl font-medium transition-colors"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
