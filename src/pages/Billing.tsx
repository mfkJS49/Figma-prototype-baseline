import { useState } from "react";
interface Props { onNavigate: (v: string) => void; }

export default function Billing({ onNavigate }: Props) {
  const [buying, setBuying] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <button onClick={() => onNavigate("dashboard")} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="font-bold text-[#0F172A] text-sm flex-1" style={{ fontFamily: "Inter Tight" }}>Credits & Billing</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Current plan */}
        <div className="bg-[#3B5BFF] rounded-3xl p-8 mb-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-56 h-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[#A5B4FC] text-sm font-medium mb-1">Current plan</p>
              <h2 className="text-2xl font-black text-white" style={{ fontFamily: "Inter Tight" }}>Premium</h2>
            </div>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">€8.99/month</span>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#A5B4FC] text-sm">Monthly credits</span>
              <span className="text-white font-bold text-sm">83 / 100</span>
            </div>
            <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: "83%" }} />
            </div>
          </div>
          <p className="text-[#A5B4FC] text-xs">Resets in 18 days</p>
        </div>

        {/* Extra credits */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Buy extra credits</h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">Credits never expire</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { credits: "+20 credits", price: "€3.49", desc: "~20 min of AI exams", popular: false },
              { credits: "+50 credits", price: "€5.99", desc: "~50 min of AI exams", popular: true },
              { credits: "+100 credits", price: "€9.99", desc: "~100 min of AI exams", popular: false },
            ].map(({ credits, price, desc, popular }) => (
              <div
                key={credits}
                className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                  buying === credits
                    ? "border-[#3B5BFF] bg-[#EEF2FF]"
                    : "border-[#E5E7EB] hover:border-[#3B5BFF]/30 hover:bg-[#F8FAFC]"
                }`}
                onClick={() => setBuying(buying === credits ? null : credits)}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${buying === credits ? "border-[#3B5BFF]" : "border-[#E5E7EB]"}`}>
                  {buying === credits && <div className="w-2.5 h-2.5 bg-[#3B5BFF] rounded-full" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#0F172A]">{credits}</span>
                    {popular && <span className="text-xs font-semibold text-[#7C4DFF] bg-[#EDE9FE] px-2 py-0.5 rounded-full">Best value</span>}
                  </div>
                  <span className="text-xs text-[#94A3B8]">{desc}</span>
                </div>
                <span className="text-base font-black text-[#3B5BFF]" style={{ fontFamily: "Inter Tight" }}>{price}</span>
              </div>
            ))}
          </div>
          <button
            className={`w-full mt-5 py-3.5 rounded-xl text-sm font-bold transition-all ${
              buying
                ? "bg-[#3B5BFF] text-white shadow-lg shadow-[#3B5BFF]/25 hover:bg-[#2743D2]"
                : "bg-[#F1F5F9] text-[#94A3B8] cursor-not-allowed"
            }`}
            disabled={!buying}
          >
            {buying ? `Buy ${buying}` : "Select a package"}
          </button>
        </div>

        {/* Billing info */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Billing information</h3>
          <div className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB]">
            <div className="w-10 h-7 bg-[#1E3A8A] rounded-md flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#0F172A]">•••• •••• •••• 4242</p>
              <p className="text-xs text-[#94A3B8]">Expires 08/27</p>
            </div>
            <button className="text-xs text-[#3B5BFF] font-medium hover:underline">Edit</button>
          </div>
          <div className="mt-4 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
            <span className="text-sm text-[#475569]">Next billing date</span>
            <span className="text-sm font-semibold text-[#0F172A]">Sep 12, 2026</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-[#475569]">Amount</span>
            <span className="text-sm font-semibold text-[#0F172A]">€8.99</span>
          </div>
          <button className="mt-6 text-xs text-[#EF4444] hover:underline">Cancel subscription</button>
        </div>
      </main>
    </div>
  );
}
