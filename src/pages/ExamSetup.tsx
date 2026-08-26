import { useState } from "react";
interface Props { onNavigate: (v: string) => void; }

export default function ExamSetup({ onNavigate }: Props) {
  const [duration, setDuration] = useState("10");
  const [difficulty, setDifficulty] = useState("Normal");
  const [topics, setTopics] = useState("entire");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-xl mx-auto px-6 h-14 flex items-center gap-4">
          <button onClick={() => onNavigate("upload")} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="font-bold text-[#0F172A] text-sm flex-1" style={{ fontFamily: "Inter Tight" }}>Exam setup</h1>
          <span className="text-xs text-[#94A3B8]">Step 2 of 3</span>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 py-10">
        {/* Course */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-6 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 bg-[#EEF2FF] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M9 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9l-5-7H9z" stroke="#3B5BFF" strokeWidth="1.4" strokeLinejoin="round"/>
              <path d="M9 2v7h7" stroke="#3B5BFF" strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Economics — Chapter 4</p>
            <p className="text-xs text-[#94A3B8]">2 documents · 40 pages</p>
          </div>
          <button className="ml-auto text-xs text-[#3B5BFF] font-medium hover:underline" onClick={() => onNavigate("upload")}>Change</button>
        </div>

        {/* Settings */}
        <div className="space-y-6">
          {/* Duration */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Exam duration</p>
            <div className="flex gap-3">
              {["5 min", "10 min", "15 min"].map(d => (
                <button
                  key={d}
                  onClick={() => setDuration(d.replace(" min", ""))}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all ${
                    duration === d.replace(" min", "")
                      ? "bg-[#3B5BFF] text-white border-[#3B5BFF] shadow-md shadow-[#3B5BFF]/20"
                      : "border-[#E5E7EB] text-[#475569] hover:border-[#3B5BFF]/40 hover:text-[#3B5BFF]"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Difficulty</p>
            <div className="flex gap-3">
              {[
                { label: "Easy", color: "#16A34A" },
                { label: "Normal", color: "#3B5BFF" },
                { label: "Hard", color: "#EF4444" },
              ].map(({ label, color }) => (
                <button
                  key={label}
                  onClick={() => setDifficulty(label)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all ${
                    difficulty === label
                      ? "text-white border-transparent shadow-md"
                      : "border-[#E5E7EB] text-[#475569] hover:border-opacity-40"
                  }`}
                  style={difficulty === label ? { background: color, boxShadow: `0 4px 12px ${color}33` } : {}}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Topics</p>
            <div className="space-y-2">
              {[
                { value: "entire", label: "Entire course", sub: "All chapters and themes" },
                { value: "select", label: "Select chapters", sub: "Choose specific topics to focus on" },
              ].map(({ value, label, sub }) => (
                <button
                  key={value}
                  onClick={() => setTopics(value)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    topics === value ? "border-[#3B5BFF] bg-[#EEF2FF]" : "border-[#E5E7EB] hover:border-[#3B5BFF]/30"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    topics === value ? "border-[#3B5BFF]" : "border-[#E5E7EB]"
                  }`}>
                    {topics === value && <div className="w-2 h-2 bg-[#3B5BFF] rounded-full" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">{label}</p>
                    <p className="text-xs text-[#94A3B8]">{sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate("exam")}
          className="w-full mt-8 bg-[#3B5BFF] hover:bg-[#2743D2] text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-[#3B5BFF]/25 transition-all"
        >
          Start Exam →
        </button>
      </main>
    </div>
  );
}
