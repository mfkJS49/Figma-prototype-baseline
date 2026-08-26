import { useState, useEffect, useRef } from "react";

type View = string;
interface LandingProps {
  onNavigate: (v: View) => void;
}

/* ─── Phone screen components ─────────────────────────────── */

function ScreenUpload() {
  return (
    <div className="h-full bg-[#F8FAFC] px-4 py-3 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs text-[#94A3B8]">← Back</span>
        <span className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Prepare your exam</span>
        <span className="text-xs text-[#94A3B8]">···</span>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M11 1H3a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7l-6-6z" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 1v6h6M13 12H5M13 16H5M7 8H5" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0F172A] truncate">SES — Chapitre 4.pdf</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">2.4 MB · 28 pages</p>
            </div>
            <div className="w-6 h-6 bg-[#DCFCE7] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center gap-2">
            <div className="w-2 h-2 bg-[#16A34A] rounded-full" />
            <span className="text-xs font-medium text-[#16A34A]">Course ready · 47 questions generated</span>
          </div>
        </div>
        <div className="bg-[#EEF2FF] rounded-2xl border border-dashed border-[#3B5BFF]/30 p-4 flex flex-col items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 13V7M10 7L7 10M10 7l3 3" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 15a4 4 0 01-.4-7.97A6 6 0 0117 9h.5a3.5 3.5 0 01.5 6.96" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs text-[#3B5BFF] font-medium">Add another document</span>
        </div>
        <div className="mt-auto">
          <button className="w-full bg-[#3B5BFF] text-white rounded-xl py-3 text-sm font-semibold shadow-md" style={{ fontFamily: "Inter Tight" }}>
            Start AI Exam
          </button>
        </div>
      </div>
    </div>
  );
}

function ScreenExam() {
  return (
    <div className="h-full bg-[#0F172A] px-4 py-3 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
          <span className="text-xs text-[#94A3B8]">Live</span>
        </div>
        <span className="text-sm font-semibold text-white" style={{ fontFamily: "Inter Tight" }}>AI Exam</span>
        <div className="bg-[#1E293B] rounded-lg px-2 py-1">
          <span className="text-xs font-mono text-[#7C4DFF]">06:42</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-1 bg-[#1E293B] rounded-full overflow-hidden">
          <div className="h-full w-[37.5%] bg-[#3B5BFF] rounded-full" />
        </div>
        <span className="text-xs text-[#94A3B8] whitespace-nowrap">3 of 8</span>
      </div>
      <div className="bg-[#1E293B] rounded-2xl p-4 mb-4 flex-shrink-0">
        <span className="text-xs text-[#7C4DFF] font-medium uppercase tracking-wide">Question 3</span>
        <p className="text-sm font-semibold text-white mt-1 leading-relaxed" style={{ fontFamily: "Inter Tight" }}>
          Explain how the 1929 crisis became a global crisis.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-[#3B5BFF]/20 rounded-full" style={{ animation: "pulse-ring 1.5s ease infinite" }} />
          <div className="w-14 h-14 bg-[#3B5BFF] rounded-full flex items-center justify-center shadow-lg shadow-[#3B5BFF]/30">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 1a3 3 0 013 3v7a3 3 0 01-6 0V4a3 3 0 013-3z" fill="white"/>
              <path d="M5 9a6 6 0 0012 0M11 17v4M7 21h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="flex items-end gap-0.5 h-8">
          {[0.4,0.7,1,0.6,0.9,0.5,0.8,1,0.3,0.7,0.9,0.4,0.6,0.8,0.5].map((h, i) => (
            <div
              key={i}
              className="w-1 bg-[#3B5BFF] rounded-full"
              style={{
                height: `${h * 100}%`,
                animation: `waveform ${0.6 + i * 0.08}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.05}s`
              }}
            />
          ))}
        </div>
        <span className="text-xs text-[#3B5BFF] font-medium">Listening…</span>
      </div>
      <div className="bg-[#1E293B] rounded-xl p-3 flex-1 min-h-0">
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          <span className="text-white">The 1929 crisis spread globally through several mechanisms. First, the financial panic in the US led to...</span>
          <span className="inline-block w-0.5 h-3 bg-[#3B5BFF] ml-0.5 animate-pulse align-middle" />
        </p>
      </div>
      <button className="mt-3 text-xs text-[#475569] text-center py-2">End exam</button>
    </div>
  );
}

function ScreenFollowUp() {
  return (
    <div className="h-full bg-[#0F172A] px-4 py-3 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
          <span className="text-xs text-[#94A3B8]">Live</span>
        </div>
        <span className="text-sm font-semibold text-white" style={{ fontFamily: "Inter Tight" }}>AI Exam</span>
        <div className="bg-[#1E293B] rounded-lg px-2 py-1">
          <span className="text-xs font-mono text-[#7C4DFF]">05:18</span>
        </div>
      </div>
      <div className="mb-4 bg-[#1E293B]/60 rounded-2xl p-3 opacity-50">
        <p className="text-xs text-[#94A3B8]">Explain how the 1929 crisis became a global crisis.</p>
      </div>
      <div className="bg-[#1E293B] rounded-2xl p-4 mb-4 border border-[#7C4DFF]/30 animate-slide-up">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 bg-[#7C4DFF] rounded-full flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="3" fill="white" />
            </svg>
          </div>
          <span className="text-xs text-[#7C4DFF] font-medium">Follow-up question</span>
        </div>
        <p className="text-sm font-semibold text-white leading-relaxed" style={{ fontFamily: "Inter Tight" }}>
          Good. You mentioned the United States. Why were European economies affected as well?
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 mb-4 mt-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-[#7C4DFF]/20 rounded-full" style={{ animation: "pulse-ring 1.5s ease infinite" }} />
          <div className="w-14 h-14 bg-[#7C4DFF] rounded-full flex items-center justify-center shadow-lg shadow-[#7C4DFF]/30">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 1a3 3 0 013 3v7a3 3 0 01-6 0V4a3 3 0 013-3z" fill="white"/>
              <path d="M5 9a6 6 0 0012 0M11 17v4M7 21h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="flex items-end gap-0.5 h-8">
          {[0.5,0.8,0.4,1,0.6,0.9,0.3,0.7,1,0.5,0.8,0.4,0.9,0.6,0.7].map((h, i) => (
            <div
              key={i}
              className="w-1 bg-[#7C4DFF] rounded-full"
              style={{
                height: `${h * 100}%`,
                animation: `waveform ${0.7 + i * 0.06}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.06}s`
              }}
            />
          ))}
        </div>
        <span className="text-xs text-[#7C4DFF] font-medium">Listening…</span>
      </div>
      <button className="text-xs text-[#475569] text-center py-2">End exam</button>
    </div>
  );
}

function ScreenResults() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(t);
  }, []);

  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (animated ? 0.72 : 0) * circumference;

  return (
    <div className="h-full bg-[#F8FAFC] px-4 py-3 flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#94A3B8]">← Back</span>
        <span className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Exam Readiness</span>
        <span className="text-xs text-[#3B5BFF]">Share</span>
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-24 h-24">
          <svg width="96" height="96" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="38" fill="none" stroke="#E5E7EB" strokeWidth="8" />
            <circle
              cx="48" cy="48" r="38"
              fill="none"
              stroke="#3B5BFF"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 48 48)"
              style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.34,1.56,0.64,1)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>{animated ? "72%" : "0%"}</span>
          </div>
        </div>
        <p className="text-sm font-medium text-[#475569] mt-1">You're getting there.</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { label: "Knowledge", score: "14/20", pct: 70 },
          { label: "Recall", score: "12/20", pct: 60 },
          { label: "Precision", score: "13/20", pct: 65 },
          { label: "Confidence", score: "15/20", pct: 75 },
        ].map(({ label, score, pct }) => (
          <div key={label} className="bg-white rounded-xl border border-[#E5E7EB] p-3 shadow-sm">
            <p className="text-xs text-[#94A3B8]">{label}</p>
            <p className="text-sm font-bold text-[#0F172A] mt-0.5" style={{ fontFamily: "Inter Tight" }}>{score}</p>
            <div className="mt-2 h-1 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3B5BFF] rounded-full"
                style={{
                  width: animated ? `${pct}%` : "0%",
                  transition: "width 1s ease 0.3s"
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-3 mb-3 shadow-sm">
        <p className="text-xs font-medium text-[#0F172A] mb-2">Weak topics</p>
        {["Banking collapse", "International transmission", "New Deal limitations"].map((t) => (
          <div key={t} className="flex items-center gap-2 py-1">
            <div className="w-1.5 h-1.5 bg-[#EF4444] rounded-full flex-shrink-0" />
            <span className="text-xs text-[#475569]">{t}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-auto pt-2">
        <button className="flex-1 bg-[#3B5BFF] text-white rounded-xl py-2.5 text-xs font-semibold shadow-md">
          Improve my score
        </button>
        <button className="flex-1 bg-white border border-[#E5E7EB] text-[#0F172A] rounded-xl py-2.5 text-xs font-medium">
          Full report
        </button>
      </div>
    </div>
  );
}

function PhoneMockup() {
  const [screen, setScreen] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setScreen(s => (s + 1) % 4);
        setTransitioning(false);
      }, 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const screens = [ScreenUpload, ScreenExam, ScreenFollowUp, ScreenResults];
  const ScreenComponent = screens[screen];

  const labels = ["Upload", "Exam", "Follow-up", "Results"];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative animate-float" style={{ animationDuration: "5s" }}>
        {/* Glow */}
        <div className="absolute -inset-8 rounded-full opacity-40" style={{
          background: "radial-gradient(ellipse, rgba(59,91,255,0.25) 0%, rgba(124,77,255,0.15) 50%, transparent 70%)",
          filter: "blur(20px)"
        }} />
        {/* Phone shell */}
        <div className="relative w-[260px] h-[520px] rounded-[40px] shadow-2xl overflow-hidden"
          style={{ background: "linear-gradient(160deg, #1E293B 0%, #0F172A 100%)" }}>
          {/* Side buttons */}
          <div className="absolute -right-1 top-20 w-1 h-12 bg-[#1E293B] rounded-r-sm" />
          <div className="absolute -left-1 top-20 w-1 h-8 bg-[#1E293B] rounded-l-sm" />
          <div className="absolute -left-1 top-32 w-1 h-8 bg-[#1E293B] rounded-l-sm" />
          {/* Inner screen border */}
          <div className="absolute inset-[3px] rounded-[37px] overflow-hidden bg-[#F8FAFC]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0F172A] rounded-b-2xl z-20 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#1E293B] rounded-full" />
              <div className="w-10 h-1 bg-[#1E293B] rounded-full" />
            </div>
            {/* Status bar */}
            <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-5 h-6 z-10">
              <span className="text-[10px] font-medium text-[#0F172A]">9:41</span>
              <div className="flex items-center gap-1">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="#0F172A"><rect x="0" y="3" width="2" height="7" rx="0.5"/><rect x="3" y="2" width="2" height="8" rx="0.5"/><rect x="6" y="1" width="2" height="9" rx="0.5"/><rect x="9" y="0" width="2" height="10" rx="0.5"/></svg>
                <div className="flex items-center gap-0.5 border border-[#0F172A]/30 rounded-sm px-0.5 py-0.5">
                  <div className="w-5 h-2.5 bg-[#0F172A] rounded-[1px]" />
                  <div className="w-1 h-1.5 bg-[#0F172A]/40 rounded-r-sm -ml-0.5" />
                </div>
              </div>
            </div>
            {/* Screen content */}
            <div
              className="absolute inset-0 pt-12 overflow-hidden"
              style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.2s ease" }}
            >
              <ScreenComponent />
            </div>
          </div>
        </div>
      </div>
      {/* Screen indicators */}
      <div className="flex items-center gap-3">
        {labels.map((label, i) => (
          <button
            key={label}
            onClick={() => { setTransitioning(true); setTimeout(() => { setScreen(i); setTransitioning(false); }, 200); }}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div className={`h-0.5 w-8 rounded-full transition-all duration-300 ${i === screen ? "bg-[#3B5BFF] w-10" : "bg-[#E5E7EB]"}`} />
            <span className={`text-[10px] font-medium transition-colors ${i === screen ? "text-[#3B5BFF]" : "text-[#94A3B8]"}`}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Section: FAQ ─────────────────────────────────────────── */
const faqs = [
  { q: "What is a credit?", a: "One credit equals approximately one minute of AI exam time. Use credits to take as many practice exams as you need." },
  { q: "Can I upload my own course?", a: "Yes. Exam Ready creates questions directly from the documents you provide — PDFs, slides, notes, or photos." },
  { q: "Is Exam Ready only for oral exams?", a: "No. Speaking is used as an active recall method. You can prepare for written tests, finals, partials, and oral exams alike." },
  { q: "Do monthly credits roll over?", a: "Monthly Premium credits reset each billing cycle. Extra purchased credits never expire." },
  { q: "Do purchased credits expire?", a: "No. Extra credits you purchase remain available until you use them." },
  { q: "Do I need a credit card to try it?", a: "No. Your first 10 credits are completely free with no payment information required." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-[#0F172A] text-sm" style={{ fontFamily: "Inter Tight" }}>{faq.q}</span>
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className={`flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            >
              <path d="M4 6l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "200px" : "0" }}
          >
            <p className="px-6 pb-4 text-sm text-[#475569] leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Section: Progress SVG chart ─────────────────────────── */
function ProgressChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const points = [
    { day: "Day 1", pct: 43 },
    { day: "Day 3", pct: 58 },
    { day: "Day 5", pct: 71 },
    { day: "Day 7", pct: 88 },
  ];

  const w = 400, h = 140, pad = 32;
  const xStep = (w - pad * 2) / 3;
  const yRange = h - pad * 2;
  const yPos = (pct: number) => pad + yRange - (pct - 35) / 60 * yRange;
  const xPos = (i: number) => pad + i * xStep;

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xPos(i)} ${animated ? yPos(p.pct) : yPos(35)}`).join(" ");

  return (
    <div ref={ref} className="w-full">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ maxHeight: 140 }}>
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[40, 60, 80].map(v => (
          <line key={v} x1={pad} y1={yPos(v)} x2={w - pad} y2={yPos(v)} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        ))}
        {/* Area */}
        <path
          d={`${pathD} L ${xPos(3)} ${h - pad} L ${xPos(0)} ${h - pad} Z`}
          fill="url(#areaGrad)"
          style={{ transition: "d 1s ease" }}
        />
        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="#3B5BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "d 1s ease" }}
        />
        {/* Dots + labels */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={xPos(i)} cy={animated ? yPos(p.pct) : yPos(35)} r="5" fill="white" stroke="#3B5BFF" strokeWidth="2.5"
              style={{ transition: `cy 1s ease` }} />
            <text x={xPos(i)} y={animated ? yPos(p.pct) - 10 : yPos(35) - 10} textAnchor="middle" fontSize="11" fill="#3B5BFF" fontWeight="700" fontFamily="Inter Tight"
              style={{ transition: `y 1s ease` }}>
              {p.pct}%
            </text>
            <text x={xPos(i)} y={h - 6} textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="Inter">{p.day}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── Main Landing Page ────────────────────────────────────── */
export default function Landing({ onNavigate }: LandingProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* ── NAV ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB] shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => onNavigate("landing")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#3B5BFF] rounded-xl flex items-center justify-center shadow-md">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" fill="white"/>
                <path d="M4 8a4 4 0 008 0M8 13v2M5 15h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-bold text-[#0F172A] text-base" style={{ fontFamily: "Inter Tight" }}>Exam Ready</span>
          </button>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {["Features", "How it works", "Pricing", "FAQ"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A] font-medium rounded-lg hover:bg-[#F1F5F9] transition-all">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => onNavigate("login")} className="text-sm font-medium text-[#475569] hover:text-[#0F172A] px-3 py-2 rounded-lg hover:bg-[#F1F5F9] transition-all">
              Log in
            </button>
            <button onClick={() => onNavigate("login")} className="bg-[#3B5BFF] hover:bg-[#2743D2] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-[#3B5BFF]/20 transition-all hover:shadow-lg hover:shadow-[#3B5BFF]/30">
              Try for free
            </button>
          </div>
          <button className="md:hidden p-2 text-[#475569]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileMenuOpen
                ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                : <><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              }
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E5E7EB] px-6 py-4 flex flex-col gap-2">
            {["Features", "How it works", "Pricing", "FAQ"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-[#475569]">{item}</a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-[#F1F5F9] mt-1">
              <button onClick={() => onNavigate("login")} className="flex-1 text-sm font-medium text-[#475569] border border-[#E5E7EB] py-2.5 rounded-xl">Log in</button>
              <button onClick={() => onNavigate("login")} className="flex-1 bg-[#3B5BFF] text-white text-sm font-semibold py-2.5 rounded-xl">Try for free</button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-3 py-1.5 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 bg-[#3B5BFF] rounded-full animate-pulse" />
              <span className="text-xs font-medium text-[#475569]">AI-powered exam preparation</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#0F172A] leading-[1.05] tracking-tight mb-6" style={{ fontFamily: "Inter Tight" }}>
              Find out if you're<br />
              <span style={{ background: "linear-gradient(135deg, #3B5BFF 0%, #7C4DFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                actually ready
              </span>
              <br />for your exam.
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-md">
              Upload your course, let AI test you out loud, and get a clear readiness score showing exactly what you know and what you still need to revise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button onClick={() => onNavigate("login")} className="bg-[#3B5BFF] hover:bg-[#2743D2] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#3B5BFF]/25 transition-all hover:shadow-xl hover:shadow-[#3B5BFF]/35 hover:-translate-y-0.5 text-sm">
                Take your first exam free
              </button>
              <button className="flex items-center justify-center gap-2 text-[#0F172A] font-semibold px-6 py-3.5 rounded-xl border border-[#E5E7EB] hover:bg-white hover:shadow-md transition-all text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#3B5BFF" strokeWidth="1.5"/>
                  <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="#3B5BFF"/>
                </svg>
                See how it works
              </button>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {["No credit card required", "10 free credits", "Built from your own course"].map(b => (
                <div key={b} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs text-[#475569] font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right — phone mockup */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="border-y border-[#E5E7EB] bg-white py-5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs font-medium text-[#94A3B8] mr-2 whitespace-nowrap">Prepare for</span>
          {["High school exams", "University exams", "Partials", "Oral exams", "Competitive exams", "Finals"].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#475569]">{item}</span>
              {i < 5 && <span className="text-[#E5E7EB]">·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Three steps. That's it.</h2>
            <p className="text-[#475569] text-lg">Turn any course into a personalized AI exam in minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01", title: "Upload your course", text: "Drop your PDF, slides, notes or course photos. Exam Ready understands and structures the material.",
                icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V9l-5-7z" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 2v7h7M11 12v5M8.5 14.5l2.5 2.5 2.5-2.5" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              {
                num: "02", title: "Take your AI exam", text: "Answer questions out loud while the AI adapts the difficulty based on your responses.",
                icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 1a3 3 0 013 3v7a3 3 0 01-6 0V4a3 3 0 013-3z" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 9a6 6 0 0012 0M11 17v4M7 21h8" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round"/></svg>
              },
              {
                num: "03", title: "Know exactly what to revise", text: "Receive your readiness score, weak topics and detailed feedback instantly.",
                icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
            ].map(({ num, title, text, icon }) => (
              <div key={num} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B5BFF]/10 transition-colors">
                    {icon}
                  </div>
                  <span className="text-3xl font-black text-[#E5E7EB]" style={{ fontFamily: "Inter Tight" }}>{num}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Inter Tight" }}>{title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATION ── */}
      <section id="features" className="py-24 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#3B5BFF] text-sm font-semibold uppercase tracking-widest mb-4">Why Exam Ready</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3" style={{ fontFamily: "Inter Tight" }}>Not another study chatbot.</h2>
            <p className="text-3xl lg:text-4xl font-black mb-0" style={{ fontFamily: "Inter Tight", background: "linear-gradient(135deg, #3B5BFF 0%, #7C4DFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A real exam experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Built from your course", text: "Questions come directly from the documents you upload — not generic trivia.", icon: "📄" },
              { title: "Voice-first", text: "You must actually retrieve the answer from memory instead of simply reading it.", icon: "🎙️" },
              { title: "Adaptive questions", text: "The exam gets easier or harder depending on your answers in real time.", icon: "⚡" },
              { title: "Actionable feedback", text: "Know exactly what you mastered and what you need to revise before it's too late.", icon: "📊" },
            ].map(({ title, text, icon }) => (
              <div key={title} className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8 hover:border-[#3B5BFF]/40 hover:bg-[#1E293B]/80 transition-all group">
                <span className="text-2xl mb-4 block">{icon}</span>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "Inter Tight" }}>{title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READINESS SCORE SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left — score card */}
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 shadow-xl shadow-[#3B5BFF]/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide mb-1">Exam Readiness</p>
                <p className="text-4xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>72% Ready</p>
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3B5BFF20, #7C4DFF20)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z" stroke="#3B5BFF" strokeWidth="1.5"/>
                  <path d="M12 6v6l4 2" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Knowledge", val: 70, score: "14/20" },
                { label: "Recall", val: 60, score: "12/20" },
                { label: "Precision", val: 65, score: "13/20" },
              ].map(({ label, val, score }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-[#0F172A]">{label}</span>
                    <span className="text-sm font-bold text-[#3B5BFF]">{score}</span>
                  </div>
                  <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${val}%`, background: "linear-gradient(90deg, #3B5BFF, #7C4DFF)" }} />
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-[#F1F5F9]">
                <p className="text-xs font-semibold text-[#0F172A] mb-3">Weak topics</p>
                {["Banking collapse", "International transmission", "New Deal limitations"].map(t => (
                  <div key={t} className="flex items-center gap-2 py-1">
                    <div className="w-2 h-2 bg-[#EF4444] rounded-full" />
                    <span className="text-xs text-[#475569]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0F172A] mb-4 leading-tight" style={{ fontFamily: "Inter Tight" }}>
              One score.<br />Clear priorities.
            </h2>
            <p className="text-[#475569] text-lg mb-8 leading-relaxed">
              Exam Ready shows you whether you truly know the material and exactly where your gaps are — so you can revise with precision, not anxiety.
            </p>
            <div className="space-y-4 mb-10">
              {["See your strongest topics", "Identify weak areas instantly", "Retake exams and track improvement"].map(b => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#EEF2FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#0F172A]">{b}</span>
                </div>
              ))}
            </div>
            <button onClick={() => onNavigate("login")} className="bg-[#3B5BFF] hover:bg-[#2743D2] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#3B5BFF]/25 transition-all hover:shadow-xl hover:shadow-[#3B5BFF]/35 text-sm">
              Test my knowledge
            </button>
          </div>
        </div>
      </section>

      {/* ── PROGRESS SECTION ── */}
      <section className="py-24 px-6 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Watch yourself become exam ready.</h2>
            <p className="text-[#475569] text-lg">Retake AI exams and see your readiness improve as your knowledge becomes stronger.</p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Readiness over time</span>
              <span className="text-xs text-[#94A3B8]">Economics — Chapter 4</span>
            </div>
            <ProgressChart />
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Everything becomes clear after one exam.</h2>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {/* Upload card */}
            <div className="col-span-12 md:col-span-5 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide mb-4">Upload</p>
              <div className="border-2 border-dashed border-[#3B5BFF]/20 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] hover:border-[#3B5BFF]/40 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 14V8M11 8L8 11M11 8l3 3" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 16a4 4 0 01-.4-7.97A6 6 0 0118 11h.5a3.5 3.5 0 01.5 6.96" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#0F172A]">Drop your course here</p>
                <p className="text-xs text-[#94A3B8]">PDF · PPTX · DOCX · Images</p>
              </div>
            </div>
            {/* Live exam card */}
            <div className="col-span-12 md:col-span-7 bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide">Live Exam</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EF4444] rounded-full animate-pulse" />
                  <span className="text-xs text-[#94A3B8]">Listening</span>
                </div>
              </div>
              <p className="text-white font-semibold text-sm mb-4 leading-relaxed" style={{ fontFamily: "Inter Tight" }}>
                Explain the role of the Federal Reserve during the Great Depression.
              </p>
              <div className="flex items-end gap-0.5 h-10 mb-4">
                {Array.from({ length: 28 }, (_, i) => (
                  <div key={i} className="w-1.5 bg-[#3B5BFF] rounded-full"
                    style={{ height: `${20 + Math.sin(i * 0.8) * 60 + Math.random() * 20}%`, animation: `waveform ${0.5 + i * 0.05}s ease infinite alternate`, animationDelay: `${i * 0.04}s` }} />
                ))}
              </div>
              <p className="text-xs text-[#475569]">
                <span className="text-[#94A3B8]">The Federal Reserve failed to inject liquidity... the money supply contracted by...</span>
                <span className="inline-block w-0.5 h-3 bg-[#3B5BFF] ml-0.5 animate-pulse align-middle" />
              </p>
            </div>
            {/* Results card */}
            <div className="col-span-12 md:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide mb-4">Results</p>
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#3B5BFF" strokeWidth="8" strokeLinecap="round"
                      strokeDasharray="188.5" strokeDashoffset="52.8" transform="rotate(-90 40 40)"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>72%</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {[["Knowledge","70%"],["Recall","60%"],["Precision","65%"]].map(([l,v]) => (
                    <div key={l} className="flex items-center gap-2">
                      <span className="text-xs text-[#475569] w-16 flex-shrink-0">{l}</span>
                      <div className="flex-1 h-1.5 bg-[#F1F5F9] rounded-full">
                        <div className="h-full rounded-full bg-[#3B5BFF]" style={{ width: v }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Dashboard card */}
            <div className="col-span-12 md:col-span-5 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide mb-4">Dashboard</p>
              <div className="space-y-3">
                {[
                  { subject: "History", score: 54, color: "#F59E0B" },
                  { subject: "Economics", score: 72, color: "#3B5BFF" },
                  { subject: "Marketing", score: 86, color: "#16A34A" },
                ].map(({ subject, score, color }) => (
                  <div key={subject} className="flex items-center gap-3">
                    <span className="text-sm text-[#0F172A] font-medium w-20">{subject}</span>
                    <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${score}%`, background: color }} />
                    </div>
                    <span className="text-sm font-bold text-[#0F172A] w-8 text-right" style={{ fontFamily: "Inter Tight" }}>{score}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Simple pricing for serious studying.</h2>
            <p className="text-[#475569] text-lg">Start free. Upgrade when you need more practice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Free */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 flex flex-col shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#475569] mb-2">Free</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>€0</span>
                </div>
                <p className="text-xs text-[#94A3B8] mt-1">10 credits included</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {["10 minutes of AI exams", "Upload your own course", "Readiness score", "No credit card required"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#475569]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate("login")} className="w-full border border-[#E5E7EB] text-[#0F172A] font-semibold py-3 rounded-xl text-sm hover:bg-[#F8FAFC] transition-all">
                Start free
              </button>
            </div>
            {/* Premium */}
            <div className="relative bg-[#3B5BFF] rounded-2xl p-8 flex flex-col shadow-2xl shadow-[#3B5BFF]/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#7C4DFF] text-white text-xs font-bold px-3 py-1 rounded-full">Most popular</span>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#A5B4FC] mb-2">Premium</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white" style={{ fontFamily: "Inter Tight" }}>€8.99</span>
                  <span className="text-[#A5B4FC] text-sm mb-1">/ month</span>
                </div>
                <p className="text-xs text-[#A5B4FC] mt-1">100 credits every month</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {["100 minutes of AI exams", "Unlimited course uploads", "Detailed readiness reports", "Weak topic detection", "Exam history", "Progress tracking"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate("login")} className="w-full bg-white text-[#3B5BFF] font-bold py-3 rounded-xl text-sm hover:bg-[#F0F4FF] transition-all shadow-lg">
                Get Premium
              </button>
            </div>
            {/* Extra credits */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 flex flex-col shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#475569] mb-2">Extra Credits</p>
                <p className="text-xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Need more practice?</p>
              </div>
              <div className="space-y-3 flex-1">
                {[
                  { credits: "+20 credits", price: "€3.49" },
                  { credits: "+50 credits", price: "€5.99" },
                  { credits: "+100 credits", price: "€9.99" },
                ].map(({ credits, price }) => (
                  <div key={credits} className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] hover:border-[#3B5BFF]/30 hover:bg-[#EEF2FF] transition-all cursor-pointer">
                    <span className="text-sm font-semibold text-[#0F172A]">{credits}</span>
                    <span className="text-sm font-bold text-[#3B5BFF]">{price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#94A3B8] text-center mt-6">Purchased credits never expire.</p>
              <button onClick={() => onNavigate("billing")} className="mt-4 w-full border border-[#E5E7EB] text-[#0F172A] font-semibold py-3 rounded-xl text-sm hover:bg-[#F8FAFC] transition-all">
                Buy credits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Frequently asked questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,91,255,0.08) 0%, rgba(124,77,255,0.05) 50%, transparent 100%)"
        }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-[#0F172A] mb-6 leading-tight" style={{ fontFamily: "Inter Tight" }}>
            Your exam is coming.<br />Find out if you're ready.
          </h2>
          <p className="text-[#475569] text-lg mb-8">
            Upload your course and take your first AI exam in minutes.
          </p>
          <button onClick={() => onNavigate("login")} className="bg-[#3B5BFF] hover:bg-[#2743D2] text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#3B5BFF]/30 transition-all hover:shadow-2xl hover:shadow-[#3B5BFF]/40 hover:-translate-y-1 text-base">
            Take my first exam
          </button>
          <p className="text-sm text-[#94A3B8] mt-4">10 free credits · No credit card required</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E5E7EB] bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#3B5BFF] rounded-xl flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" fill="white"/>
                    <path d="M4 8a4 4 0 008 0M8 13v2M5 15h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="font-bold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Exam Ready</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">AI-powered exam preparation for students who want to know where they really stand.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-4">Product</p>
              <ul className="space-y-2">
                {["Features", "Pricing", "FAQ"].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-4">Company</p>
              <ul className="space-y-2">
                {["Contact", "Privacy", "Terms"].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-4">Follow us</p>
              <ul className="space-y-2">
                {["TikTok", "Instagram"].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E5E7EB] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#94A3B8]">© 2026 Exam Ready. All rights reserved.</p>
            <p className="text-xs text-[#94A3B8]">Made for students who are serious about their future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
