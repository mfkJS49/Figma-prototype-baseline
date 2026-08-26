interface Props { onNavigate: (v: string) => void; }

const recentExams = [
  { subject: "Economics — Ch. 4", score: 72, date: "Today", color: "#3B5BFF" },
  { subject: "History — WWI", score: 58, date: "Yesterday", color: "#F59E0B" },
  { subject: "Marketing — Segmentation", score: 86, date: "3 days ago", color: "#16A34A" },
];

export default function Dashboard({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#3B5BFF] rounded-lg flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" fill="white"/>
                <path d="M4 8a4 4 0 008 0M8 13v2M5 15h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-bold text-[#0F172A] text-sm" style={{ fontFamily: "Inter Tight" }}>Exam Ready</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate("billing")} className="flex items-center gap-1.5 bg-[#EEF2FF] px-3 py-1.5 rounded-lg hover:bg-[#E0E7FF] transition-colors">
              <div className="w-2 h-2 bg-[#3B5BFF] rounded-full" />
              <span className="text-xs font-semibold text-[#3B5BFF]">83 credits</span>
            </button>
            <div className="w-8 h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center text-xs font-semibold text-[#475569]">M</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <p className="text-sm text-[#94A3B8] mb-1">Good morning</p>
          <h1 className="text-3xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Ready for your next exam?</h1>
        </div>

        {/* Main CTA card */}
        <div className="bg-[#3B5BFF] rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-10" style={{
            background: "radial-gradient(circle, white 0%, transparent 70%)",
            transform: "translate(30%, -30%)"
          }} />
          <p className="text-[#A5B4FC] text-sm font-medium mb-2">Start now</p>
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "Inter Tight" }}>New AI Exam</h2>
          <p className="text-[#A5B4FC] text-sm mb-6">Upload a course and let the AI test your knowledge in minutes.</p>
          <button
            onClick={() => onNavigate("upload")}
            className="bg-white text-[#3B5BFF] font-bold px-5 py-3 rounded-xl text-sm shadow-lg hover:bg-[#F0F4FF] transition-all"
          >
            Start new exam →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Recent exams */}
          <div className="md:col-span-2 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Recent exams</h3>
              <button onClick={() => onNavigate("progress")} className="text-xs text-[#3B5BFF] font-medium hover:underline">View all</button>
            </div>
            <div className="space-y-3">
              {recentExams.map(({ subject, score, date, color }) => (
                <div key={subject} className="flex items-center gap-4 p-3 hover:bg-[#F8FAFC] rounded-xl transition-colors cursor-pointer" onClick={() => onNavigate("results")}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                    <span className="text-sm font-black" style={{ color, fontFamily: "Inter Tight" }}>{score}%</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] truncate">{subject}</p>
                    <p className="text-xs text-[#94A3B8]">{date}</p>
                  </div>
                  <div className="w-24 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${score}%`, background: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credits */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Inter Tight" }}>Credits</h3>
            <p className="text-xs text-[#94A3B8] mb-6">Monthly reset in 18 days</p>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-24 h-24 mb-4">
                <svg width="96" height="96" viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="38" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
                  <circle cx="48" cy="48" r="38" fill="none" stroke="#3B5BFF" strokeWidth="8" strokeLinecap="round"
                    strokeDasharray="238.76" strokeDashoffset={238.76 * (1 - 0.83)} transform="rotate(-90 48 48)"/>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>83</span>
                  <span className="text-xs text-[#94A3B8]">/ 100</span>
                </div>
              </div>
              <button onClick={() => onNavigate("billing")} className="text-xs text-[#3B5BFF] font-medium hover:underline">Buy more credits</button>
            </div>
          </div>
        </div>

        {/* Progress graph */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Progress this week</h3>
            <button onClick={() => onNavigate("progress")} className="text-xs text-[#3B5BFF] font-medium hover:underline">Full history</button>
          </div>
          <svg viewBox="0 0 500 100" className="w-full" style={{ maxHeight: 100 }}>
            <defs>
              <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {[20,40,60,80].map(y => (
              <line key={y} x1="40" y1={y} x2="480" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4"/>
            ))}
            <path d="M 60 75 L 155 65 L 250 52 L 345 38 L 440 22" fill="none" stroke="#3B5BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M 60 75 L 155 65 L 250 52 L 345 38 L 440 22 L 440 90 L 60 90 Z" fill="url(#dashGrad)"/>
            {[[60,75,"43%","Day 1"],[155,65,"54%","Day 3"],[250,52,"68%","Day 5"],[345,38,"72%","Day 6"],[440,22,"86%","Today"]].map(([x,y,pct,day]) => (
              <g key={String(day)}>
                <circle cx={Number(x)} cy={Number(y)} r="4" fill="white" stroke="#3B5BFF" strokeWidth="2.5"/>
                <text x={Number(x)} y={Number(y)-8} textAnchor="middle" fontSize="9" fill="#3B5BFF" fontWeight="700" fontFamily="Inter Tight">{pct}</text>
                <text x={Number(x)} y="98" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="Inter">{day}</text>
              </g>
            ))}
          </svg>
        </div>
      </main>
    </div>
  );
}
