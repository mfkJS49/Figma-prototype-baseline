interface Props { onNavigate: (v: string) => void; }

const history = [
  { exam: "Exam 1", date: "Aug 18", score: 43, subject: "Economics — Ch. 4" },
  { exam: "Exam 2", date: "Aug 20", score: 58, subject: "Economics — Ch. 4" },
  { exam: "Exam 3", date: "Aug 22", score: 72, subject: "Economics — Ch. 4" },
  { exam: "Exam 4", date: "Aug 25", score: 88, subject: "Economics — Ch. 4" },
];

const weakProgress = [
  { topic: "Banking collapse", before: 30, after: 65 },
  { topic: "International transmission", before: 25, after: 58 },
  { topic: "New Deal limitations", before: 40, after: 72 },
];

export default function Progress({ onNavigate }: Props) {
  const w = 500, h = 130, pad = 36;
  const xStep = (w - pad * 2) / (history.length - 1);
  const yRange = h - pad * 2;
  const yPos = (s: number) => pad + yRange - ((s - 35) / 60) * yRange;
  const xPos = (i: number) => pad + i * xStep;
  const pathD = history.map((p, i) => `${i === 0 ? "M" : "L"} ${xPos(i)} ${yPos(p.score)}`).join(" ");
  const circumference = 2 * Math.PI * 54;
  const latestScore = history[history.length - 1].score;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <button onClick={() => onNavigate("dashboard")} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="font-bold text-[#0F172A] text-sm flex-1" style={{ fontFamily: "Inter Tight" }}>Progress</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Current score */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative w-28 h-28 flex-shrink-0">
            <svg width="112" height="112" viewBox="0 0 112 112">
              <circle cx="56" cy="56" r="44" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
              <circle cx="56" cy="56" r="44" fill="none" stroke="#3B5BFF" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={circumference} strokeDashoffset={circumference - (latestScore / 100) * circumference}
                transform="rotate(-90 56 56)" style={{ transition: "stroke-dashoffset 1.5s ease" }}/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>{latestScore}%</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#94A3B8] mb-1">Current readiness</p>
            <h2 className="text-2xl font-black text-[#0F172A] mb-1" style={{ fontFamily: "Inter Tight" }}>Economics — Ch. 4</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                +{latestScore - history[0].score}% since start
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm mb-6">
          <p className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Readiness over time</p>
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ maxHeight: 130 }}>
            <defs>
              <linearGradient id="pgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {[40, 60, 80].map(v => (
              <line key={v} x1={pad} y1={yPos(v)} x2={w - pad} y2={yPos(v)} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4"/>
            ))}
            <path d={`${pathD} L ${xPos(3)} ${h - pad} L ${xPos(0)} ${h - pad} Z`} fill="url(#pgGrad)"/>
            <path d={pathD} fill="none" stroke="#3B5BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {history.map((p, i) => (
              <g key={i}>
                <circle cx={xPos(i)} cy={yPos(p.score)} r="5" fill="white" stroke="#3B5BFF" strokeWidth="2.5"/>
                <text x={xPos(i)} y={yPos(p.score) - 10} textAnchor="middle" fontSize="10" fill="#3B5BFF" fontWeight="700" fontFamily="Inter Tight">{p.score}%</text>
                <text x={xPos(i)} y={h - 4} textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="Inter">{p.date}</text>
              </g>
            ))}
          </svg>
        </div>

        {/* Exam history */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm mb-6">
          <p className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Exam history</p>
          <div className="space-y-3">
            {[...history].reverse().map(({ exam, date, score, subject }) => {
              const color = score >= 80 ? "#16A34A" : score >= 60 ? "#3B5BFF" : "#F59E0B";
              return (
                <div key={exam} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F8FAFC] cursor-pointer" onClick={() => onNavigate("results")}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                    <span className="text-xs font-black" style={{ color, fontFamily: "Inter Tight" }}>{score}%</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A]">{exam}</p>
                    <p className="text-xs text-[#94A3B8]">{subject} · {date}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weak topic progress */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Weak topic progress</p>
          <div className="space-y-5">
            {weakProgress.map(({ topic, before, after }) => (
              <div key={topic}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#0F172A]">{topic}</span>
                  <span className="text-xs font-bold text-[#16A34A]">+{after - before}%</span>
                </div>
                <div className="relative h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-[#E5E7EB]" style={{ width: `${before}%` }} />
                  <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${after}%`, background: "linear-gradient(90deg, #3B5BFF, #16A34A)" }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-[#94A3B8]">Before: {before}%</span>
                  <span className="text-xs text-[#16A34A] font-medium">Now: {after}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
