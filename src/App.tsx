import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import ExamSetup from "./pages/ExamSetup";
import LiveExam from "./pages/LiveExam";
import Results from "./pages/Results";
import Progress from "./pages/Progress";
import Billing from "./pages/Billing";

type View = "landing" | "login" | "dashboard" | "upload" | "examsetup" | "exam" | "results" | "progress" | "billing";

export default function App() {
  const [view, setView] = useState<View>("landing");

  const navigate = (v: string) => {
    setView(v as View);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="size-full">
      {view === "landing" && <Landing onNavigate={navigate} />}
      {view === "login" && <Login onNavigate={navigate} />}
      {view === "dashboard" && <Dashboard onNavigate={navigate} />}
      {view === "upload" && <Upload onNavigate={navigate} />}
      {view === "examsetup" && <ExamSetup onNavigate={navigate} />}
      {view === "exam" && <LiveExam onNavigate={navigate} />}
      {view === "results" && <Results onNavigate={navigate} />}
      {view === "progress" && <Progress onNavigate={navigate} />}
      {view === "billing" && <Billing onNavigate={navigate} />}
    </div>
  );
}
