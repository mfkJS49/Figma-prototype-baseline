import { useState, useEffect } from "react";
interface Props { onNavigate: (v: string) => void; }

const metrics = [
  { label: "Knowledge", score: 14, max: 20, pct: 70, color: "#3B5BFF" },
  { label: "Recall", score: 12, max: 20, pct: 60, color: "#7C4DFF" },
  { label: "Precision", score: 13, max: 20, pct: 65, color: "#3B5BFF" },
  { label: "Confidence", score: 15, max: 20, pct: 75, color: "#16A34A" },
];

const weak = ["Banking collapse", "International transmission", "New Deal limitations"];
const strong = ["Causes of the 1929 crash", "Stock market dynamics", "Hoover's initial response"];

const breakdown = [
  { q: "How did the stock market crash begin?", score: 17, status: "strong" },
  { q: "Explain the role of the Federal Reserve.", score: 11, status: "weak" },
  { q: "Why did European economies collapse?", score: 13, status: "ok" },
  { q: "What were the social impacts of the Depression?", score: 16, status: "strong" },
  { q: "How did the New Deal attempt to recover?", score: 10, status: "weak" },
];

export default function Results({ onNavigate }: Props) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (animated ? 0.72 : 0) * circumference;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <button onClick={() => onNavigate("dashboard")} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="font-bold text-[#0F172A] text-sm flex-1" style={{ fontFamily: "Inter Tight" }}>Exam Results</h1>
          <button className="text-xs text-[#3B5BFF] font-medium hover:underline">Share</button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Score hero */}
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 mb-6 shadow-sm flex flex-col sm:flex-row items-center gap-8">
          <div className="relative w-36 h-36 flex-shrink-0">
            <svg width="144" height="144" viewBox="0 0 144 144">
              <circle cx="72" cy="72" r="54" fill="none" stroke="#E5E7EB" strokeWidth="10"/>
              <circle
                cx="72" cy="72" r="54"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 72 72)"
                style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.34,1.56,0.64,1)" }}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B5BFF"/>
                  <stop offset="100%" stopColor="#7C4DFF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>{animated ? "72%" : "0%"}</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide mb-1">Exam Readiness</p>
            <h2 className="text-2xl font-black text-[#0F172A] mb-1" style={{ fontFamily: "Inter Tight" }}>You're getting there.</h2>
            <p className="text-sm text-[#475569] mb-4">Economics — Chapter 4 · {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long" })}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#F59E0B] bg-[#FEF3C7] px-2.5 py-1 rounded-full">3 weak areas</span>
              <span className="text-xs font-medium text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full">3 strong areas</span>
            </div>
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {metrics.map(({ label, score, max, pct, color }) => (
            <div key={label} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm">
              <p className="text-xs text-[#94A3B8] mb-1">{label}</p>
              <p className="text-2xl font-black text-[#0F172A] mb-2" style={{ fontFamily: "Inter Tight" }}>{score}<span className="text-sm text-[#94A3B8] font-medium">/{max}</span></p>
              <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: animated ? `${pct}%` : "0%", background: color, transition: "width 1.2s ease 0.4s" }} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Weak topics */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <p className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Weak topics</p>
            <div className="space-y-3">
              {weak.map(t => (
                <div key={t} className="flex items-center gap-3 p-3 bg-[#FEF2F2] rounded-xl">
                  <div className="w-2 h-2 bg-[#EF4444] rounded-full flex-shrink-0" />
                  <span className="text-sm text-[#0F172A] font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Strong topics */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <p className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Strong topics</p>
            <div className="space-y-3">
              {strong.map(t => (
                <div key={t} className="flex items-center gap-3 p-3 bg-[#F0FDF4] rounded-xl">
                  <div className="w-2 h-2 bg-[#16A34A] rounded-full flex-shrink-0" />
                  <span className="text-sm text-[#0F172A] font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question breakdown */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm mb-8">
          <p className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Question breakdown</p>
          <div className="space-y-3">
            {breakdown.map(({ q, score, status }, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs text-[#94A3B8] w-4 flex-shrink-0">{i + 1}</span>
                <p className="flex-1 text-sm text-[#475569] truncate">{q}</p>
                <div className={`text-xs font-bold px-2 py-0.5 rounded-lg flex-shrink-0 ${
                  status === "strong" ? "bg-[#DCFCE7] text-[#16A34A]" :
                  status === "weak" ? "bg-[#FEF2F2] text-[#EF4444]" :
                  "bg-[#EEF2FF] text-[#3B5BFF]"
                }`}>{score}/20</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={() => onNavigate("upload")} className="flex-1 bg-[#3B5BFF] hover:bg-[#2743D2] text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-[#3B5BFF]/25 transition-all">
            Improve my weak areas
          </button>
          <button onClick={() => onNavigate("examsetup")} className="flex-1 border border-[#E5E7EB] text-[#0F172A] font-semibold py-4 rounded-xl text-sm hover:bg-white hover:shadow-sm transition-all">
            Retake exam
          </button>
        </div>
      </main>
    </div>
  );
}
