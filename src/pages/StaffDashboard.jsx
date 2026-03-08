import React from "react";
import { useState, useCallback, useMemo } from "react";
import StaffNavbar from "../components/staff/StaffNavbar";
import INITIAL_PROJECTS from "../mocks/projects";

function StaffDashboard() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  const pending = useMemo(
    () => projects.filter((p) => p.status === "Pending"),
    [projects],
  );
  const inProgress = useMemo(
    () => projects.filter((p) => p.status === "In Progress"),
    [projects],
  );
  const completed = useMemo(
    () => projects.filter((p) => p.status === "Completed"),
    [projects],
  );

  return (
    <>
      <style>{`
            @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes modalIn {
            from { opacity: 0; transform: scale(0.96) translateY(12px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
            }
            .overflow-y-auto::-webkit-scrollbar { width: 6px; }
            .overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
            .overflow-y-auto::-webkit-scrollbar-thumb { background: #d6d3d1; border-radius: 3px; }
            .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: #a8a29e; }
        `}</style>

      <div className="min-h-screen flex flex-col">
        <div className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col">
          <StaffNavbar />
          <div
            style={{
              background:
                "linear-gradient(180deg, #fffbeb 0%, #fefce8 40%, #f5f5f4 100%)",
            }}
          >
            <div className="mt-20 max-w-5xl mx-auto px-6 py-8">
              {/* stat pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  {
                    label: "Pending",
                    count: pending.length,
                    color: "#d97706",
                    bg: "#fffbeb",
                  },
                  {
                    label: "In Progress",
                    count: inProgress.length,
                    color: "#0284c7",
                    bg: "#f0f9ff",
                  },
                  {
                    label: "Completed",
                    count: completed.length,
                    color: "#059669",
                    bg: "#ecfdf5",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                    style={{ borderColor: s.color + "33", background: s.bg }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: s.color }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: s.color }}
                    >
                      {s.count}
                    </span>
                    <span className="text-sm text-stone-500">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffDashboard;
