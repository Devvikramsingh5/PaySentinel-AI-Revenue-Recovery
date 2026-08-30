"use client";

import Header from "./Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] flex flex-col font-sans antialiased selection:bg-indigo-900/50">
      {/* Navigation Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#161b22] py-4 text-xs text-[#8b949e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#e6edf3]">Pay<span className="text-indigo-400">Sentinel</span></span>
            <span className="text-[#30363d]">·</span>
            <span>AI Revenue Recovery &amp; Risk Operations Console</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#6e7681] font-mono">
            <span>PCI-DSS Level 1</span>
            <span className="text-[#30363d]">·</span>
            <span>Deterministic Policy Guardrails</span>
            <span className="text-[#30363d]">·</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
              LangGraph Engine
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
