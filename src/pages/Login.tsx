interface Props { onNavigate: (v: string) => void; }

export default function Login({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(59,91,255,0.06) 0%, transparent 70%)"
      }} />
      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-[#3B5BFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3B5BFF]/30 mb-4">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2a4 4 0 014 4v4a4 4 0 01-8 0V6a4 4 0 014-4z" fill="white"/>
              <path d="M5 9a6 6 0 0012 0M11 17v3M7 20h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black text-[#0F172A]" style={{ fontFamily: "Inter Tight" }}>Exam Ready</h1>
          <p className="text-sm text-[#475569] mt-1">Know before you go.</p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Inter Tight" }}>Welcome</h2>
          <p className="text-sm text-[#94A3B8] mb-8">Sign up or log in to continue</p>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-[#E5E7EB] rounded-xl py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] hover:shadow-sm transition-all mb-4">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.252-.164-1.84H9v3.48h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-[#E5E7EB]" />
            <span className="text-xs text-[#94A3B8]">or</span>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          <div className="space-y-3 mb-6">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#3B5BFF] focus:ring-2 focus:ring-[#3B5BFF]/10 transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#3B5BFF] focus:ring-2 focus:ring-[#3B5BFF]/10 transition-all"
            />
          </div>

          <button
            onClick={() => onNavigate("dashboard")}
            className="w-full bg-[#3B5BFF] hover:bg-[#2743D2] text-white font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-[#3B5BFF]/25 transition-all mb-4"
          >
            Continue
          </button>

          <p className="text-center text-xs text-[#94A3B8]">
            By continuing you agree to our{" "}
            <a href="#" className="text-[#3B5BFF] hover:underline">Terms</a>{" "}
            and{" "}
            <a href="#" className="text-[#3B5BFF] hover:underline">Privacy Policy</a>.
          </p>
        </div>

        <div className="text-center mt-6">
          <button onClick={() => onNavigate("landing")} className="text-sm text-[#94A3B8] hover:text-[#475569] transition-colors">
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
