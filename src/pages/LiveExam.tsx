import { useState, useEffect } from "react";
interface Props { onNavigate: (v: string) => void; }

const questions = [
  "Explain how the 1929 crisis became a global crisis.",
  "Good. You mentioned the United States. Why were European economies affected as well?",
  "What role did protectionist policies play in worsening the Depression?",
];

const aiStates = ["Listening…", "Analyzing your answer…", "Preparing next question…"];

export default function LiveExam({ onNavigate }: Props) {
  const [qIndex, setQIndex] = useState(0);
  const [aiStatus, setAiStatus] = useState(0);
  const [transcript, setTranscript] = useState("The 1929 crisis spread globally through several mechanisms. First, the financial panic in the US led to the withdrawal of American capital from European markets...");
  const [seconds, setSeconds] = useState(398); // ~6:38

  useEffect(() => {
    const t = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#1E293B] px-6 h-14 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
          <span className="text-xs font-medium text-[#94A3B8]">Live</span>
        </div>
        <span className="text-sm font-semibold" style={{ fontFamily: "Inter Tight" }}>AI Exam · Economics</span>
        <div className="bg-[#1E293B] rounded-xl px-3 py-1.5 border border-[#334155]">
          <span className="text-sm font-mono font-bold text-[#7C4DFF]">{min}:{sec}</span>
        </div>
      </header>

      {/* Progress */}
      <div className="px-6 py-4 border-b border-[#1E293B] flex items-center gap-4">
        <div className="flex-1 h-1.5 bg-[#1E293B] rounded-full overflow-hidden">
          <div className="h-full bg-[#3B5BFF] rounded-full transition-all duration-500" style={{ width: `${((qIndex + 1) / 8) * 100}%` }} />
        </div>
        <span className="text-xs text-[#94A3B8] whitespace-nowrap font-medium">Question {qIndex + 1} of 8</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-6 py-8 gap-6">
        {/* Previous question (dimmed) */}
        {qIndex > 0 && (
          <div className="bg-[#1E293B]/50 rounded-2xl p-5 border border-[#334155]/50">
            <p className="text-xs text-[#475569] font-medium mb-1">Previous question</p>
            <p className="text-sm text-[#475569]">{questions[qIndex - 1]}</p>
          </div>
        )}

        {/* Current question */}
        <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#334155] flex-shrink-0">
          {qIndex > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-[#7C4DFF] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="2.5" fill="white"/></svg>
              </div>
              <span className="text-xs font-semibold text-[#7C4DFF]">Follow-up</span>
            </div>
          )}
          <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide mb-3">Question {qIndex + 1}</p>
          <p className="text-lg font-semibold leading-relaxed" style={{ fontFamily: "Inter Tight" }}>{questions[Math.min(qIndex, questions.length - 1)]}</p>
        </div>

        {/* Mic + waveform */}
        <div className="flex flex-col items-center gap-5 py-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full opacity-30" style={{ animation: "pulse-ring 1.8s ease infinite", background: "#3B5BFF" }} />
            <button className="relative w-20 h-20 bg-[#3B5BFF] rounded-full flex items-center justify-center shadow-2xl shadow-[#3B5BFF]/40 hover:bg-[#2743D2] transition-colors">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3a4 4 0 014 4v7a4 4 0 01-8 0V7a4 4 0 014-4z" fill="white"/>
                <path d="M6 12a8 8 0 0016 0M14 22v4M10 26h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="flex items-end gap-1 h-12">
            {Array.from({ length: 36 }, (_, i) => {
              const h = 15 + Math.abs(Math.sin(i * 0.6)) * 85;
              return (
                <div
                  key={i}
                  className="w-1.5 rounded-full bg-[#3B5BFF]"
                  style={{
                    height: `${h}%`,
                    animation: `waveform ${0.5 + i * 0.04}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.03}s`,
                    opacity: 0.5 + h / 200
                  }}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#3B5BFF] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#3B5BFF]">{aiStates[aiStatus]}</span>
          </div>
        </div>

        {/* Transcript */}
        <div className="bg-[#1E293B] rounded-2xl p-5 border border-[#334155] flex-1 min-h-0">
          <p className="text-xs text-[#475569] font-medium uppercase tracking-wide mb-3">Live transcript</p>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            {transcript}
            <span className="inline-block w-0.5 h-4 bg-[#3B5BFF] ml-1 animate-pulse align-middle" />
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => { if (qIndex < questions.length - 1) setQIndex(q => q + 1); setAiStatus(s => (s + 1) % 3); setTranscript(""); }}
            className="flex-1 bg-[#1E293B] hover:bg-[#334155] border border-[#334155] text-white font-semibold py-3.5 rounded-xl text-sm transition-all"
          >
            Next question
          </button>
          <button
            onClick={() => onNavigate("results")}
            className="px-5 py-3.5 rounded-xl text-sm font-medium text-[#475569] hover:text-[#94A3B8] border border-[#334155] hover:border-[#475569] transition-all"
          >
            End exam
          </button>
        </div>
      </div>
    </div>
  );
}
