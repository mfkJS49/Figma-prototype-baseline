import { useState } from "react";
interface Props { onNavigate: (v: string) => void; }

const files = [
  { name: "Economics — Chapter 4.pdf", size: "2.4 MB", pages: 28, status: "ready" },
  { name: "Lecture Notes — Crisis 1929.docx", size: "840 KB", pages: 12, status: "ready" },
];

export default function Upload({ onNavigate }: Props) {
  const [dragging, setDragging] = useState(false);
  const [docs] = useState(files);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <button onClick={() => onNavigate("dashboard")} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="font-bold text-[#0F172A] text-sm flex-1" style={{ fontFamily: "Inter Tight" }}>Upload your course</h1>
          <span className="text-xs text-[#94A3B8]">Step 1 of 3</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Drop zone */}
        <div
          className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer mb-8 ${
            dragging
              ? "border-[#3B5BFF] bg-[#EEF2FF]"
              : "border-[#E5E7EB] bg-white hover:border-[#3B5BFF]/40 hover:bg-[#F8FAFC]"
          }`}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={() => setDragging(false)}
        >
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${dragging ? "bg-[#3B5BFF]" : "bg-[#EEF2FF]"}`}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 18V10M14 10L10 14M14 10l4 4" stroke={dragging ? "white" : "#3B5BFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 20a5 5 0 01-.5-9.97A7.5 7.5 0 0122.5 13.5h.5a4 4 0 01.5 7.96" stroke={dragging ? "white" : "#3B5BFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: "Inter Tight" }}>Drop your files here</p>
            <p className="text-sm text-[#94A3B8]">or click to browse</p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {["PDF", "PPTX", "DOCX", "Images"].map(f => (
              <span key={f} className="text-xs font-medium text-[#475569] bg-[#F1F5F9] px-2.5 py-1 rounded-lg border border-[#E5E7EB]">{f}</span>
            ))}
          </div>
        </div>

        {/* Uploaded files */}
        {docs.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-[#0F172A] mb-4" style={{ fontFamily: "Inter Tight" }}>Uploaded documents</h2>
            <div className="space-y-3">
              {docs.map(doc => (
                <div key={doc.name} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-11 h-13 bg-[#EEF2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                      <path d="M12 1H4a2 2 0 00-2 2v18a2 2 0 002 2h12a2 2 0 002-2V9l-6-8z" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 1v8h8M14 13H6M14 17H6M8 9H6" stroke="#3B5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] truncate">{doc.name}</p>
                    <p className="text-xs text-[#94A3B8] mt-0.5">{doc.size} · {doc.pages} pages</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-xs font-medium text-[#16A34A]">Ready</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => onNavigate("examsetup")}
          className="w-full bg-[#3B5BFF] hover:bg-[#2743D2] text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-[#3B5BFF]/25 transition-all"
        >
          Continue →
        </button>
      </main>
    </div>
  );
}
