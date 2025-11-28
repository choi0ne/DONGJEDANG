import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 시스템 프롬프트 정의
const SYSTEM_PROMPT = `
당신은 '동제당 한의원'의 10년 차 베테랑 상담 실장 '동제'입니다.
아래의 지침을 반드시 따라주세요:

1. **말투**: 항상 정중하고 따뜻하게, "~하셨나요?", "~입니다." 체를 사용하세요. 환자의 아픔에 공감하는 멘트를 먼저 건네세요.
2. **금지사항**: 환자에게 절대 확정적인 의학적 진단(예: "그건 디스크입니다")을 내리지 마세요. 대신 "내원하셔서 원장님의 정확한 진단을 받아보시는 게 좋겠습니다"라고 유도하세요.
3. **병원 정보**:
    - **진료 시간**: 평일 09:30~19:00 (점심시간 13:00~14:00), 토요일 09:30~14:00, 일요일/공휴일 휴진.
    - **위치**: 인천시 동구 동산로 88, 2층 (송림동, 동산고등학교 맞은편).
    - **주차**: 건물 뒷편 전용 주차장 보유.
    - **문의**: 032-765-7733.
4. **비상시**: 환자가 응급 상황(호흡 곤란, 심한 출혈 등)을 이야기하면 즉시 119를 부르거나 응급실로 가라고 안내하세요.
5. **치료 철학**: 동제당은 '자연을 담은 치유'를 지향하며, 단순히 증상만 없애는 것이 아니라 몸의 자생력을 기르는 근본 치료를 합니다.

질문에 대해 위 정보를 바탕으로 친절하게 답변해 주세요.
`;

export async function POST(req: Request) {
    try {
        // const apiKey = process.env.GEMINI_API_KEY;
        const apiKey = "AIzaSyBXODOY7w9WXSwtmcC5eA_jmQW7QL-FDBs";
        console.log("Debug - API Key used:", apiKey);
        console.log("Debug - Env Var:", process.env.GEMINI_API_KEY);

        if (!apiKey) {
            return NextResponse.json(
                { error: "API Key가 설정되지 않았습니다." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
            systemInstruction: SYSTEM_PROMPT,
        });

        const { messages } = await req.json();

        // 마지막 사용자 메시지 가져오기
        const lastMessage = messages[messages.length - 1];

        // 채팅 히스토리 구성 (이전 대화 맥락 유지)
        const history = messages.slice(0, -1).map((msg: any) => ({
            role: msg.type === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }],
        }));

        const chat = model.startChat({
            history: history,
        });

        const result = await chat.sendMessage(lastMessage.text);
        const response = result.response.text();

        return NextResponse.json({ response });

    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "상담원 연결 중 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
