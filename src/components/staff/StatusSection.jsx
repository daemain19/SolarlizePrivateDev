import { formatDate } from "../../extensions/formatter";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { STATUS_CONFIG } from "../../extensions/staff_config";

export function StatusSection({ title, projects, icon, accentColor}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: accentColor }}>
          {icon}
        </div>
        <h2 className="text-lg font-bold text-stone-800" >
          {title}
        </h2>
        <span className="ml-1 px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-600 text-xs font-bold">{projects.length}</span>
      </div>
      {projects.length === 0 ? (
        <div className="text-center py-8 px-4 rounded-xl border border-dashed border-stone-200 text-stone-400 text-sm">
          No projects in this section
        </div>
      ) : (
        <div className="flex flex-col gap-3 overflow-y-auto pr-1" style={{ maxHeight: "calc(5 * 5.5rem)" }}>
          {projects.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectRow({ project}) {
  const cfg = STATUS_CONFIG[project.status];
  return (
    <div
      className={`group flex items-center gap-4 px-5 py-4 rounded-xl border ${cfg.border} ${cfg.bg} cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5`}
      style={{ animation: "fadeSlideIn 0.35s ease-out both" }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-stone-900" >{project.id}</span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${cfg.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {project.status}
          </span>
        </div>
        <p className="text-sm text-stone-600 truncate">{project.householder} — {project.country}</p>
        <p className="text-xs text-stone-400 mt-0.5">Submitted {formatDate(project.submitted)}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
        {project.status === "Pending" && (
          <button
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #d97706, #b45309)" }}
          >
            Accept <IconArrowRight />
          </button>
        )}
        {project.status === "In Progress" && (
          <button
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
          >
            Complete <IconCheck />
          </button>
        )}
        {project.status === "Completed" && (
          <span className="text-emerald-600"><IconCheck /></span>
        )}
      </div>
    </div>
  );
}