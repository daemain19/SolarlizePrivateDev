import { formatDate } from "../../extensions/formatter";
import { IconX, IconCheck } from "@tabler/icons-react";
import { STATUS_CONFIG } from "../../extensions/staff_config";


export function DetailModal({ project, onClose, onAccept, onComplete }) {
  if (!project) return null;
  const cfg = STATUS_CONFIG[project.status];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(15,10,5,0.45)", backdropFilter: "blur(4px)" }}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden"
        style={{
          maxWidth: 680,
          maxHeight: "90vh",
          animation: "modalIn 0.25s ease-out",
        }}
      >
        {/* header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b border-stone-100 ${cfg.bg}`}>
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-lg font-bold text-stone-900" >{project.id}</h2>
              <p className="text-sm text-stone-500">{project.householder}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-stone-200 text-stone-500 transition-colors">
            <IconX />
          </button>
        </div>

        {/* body */}
        <div className="px-6 py-5 overflow-y-auto" style={{ maxHeight: "calc(90vh - 140px)" }}>
          {/* status row */}
          <div className="flex items-center gap-2 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {project.status}
            </span>
            <span className="text-xs text-stone-400">Submitted {formatDate(project.submitted)}</span>
          </div>

          {/* sections */}
          <Section title="Solar Panel Selection">
            <InfoRow label="Panel Type" value={project.panelType} />
            <InfoRow label="Capacity" value={project.capacity} />
            <InfoRow label="Installation Details" value={project.installationDetails} />
          </Section>

          <Section title="Householder Details">
            <InfoRow label="Username" value={project.username} />
            <InfoRow label="Email" value={project.email} />
            <InfoRow label="Name" value={project.householder} />
            <InfoRow label="Address" value={project.address} />
            <InfoRow label="Phone" value={project.phone} />
          </Section>

          <Section title="Payment Details">
            <InfoRow label="Payment Status" value={project.paymentStatus} />
            <InfoRow label="Amount" value={project.amount} />
            <InfoRow label="Payment Method" value={project.paymentMethod} />
          </Section>
        </div>

        {/* footer actions */}
        <div className="px-6 py-2 border-t border-stone-100 bg-stone-50 flex justify-end gap-3">
          {project.status === "Pending" && (
            <button
              onClick={() => { onAccept(project.id); onClose(); }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #d97706, #b45309)" }}
            >
              <IconCheck /> Accept Project
            </button>
          )}
          {project.status === "In Progress" && (
            <button
              onClick={() => { onComplete(project.id); onClose(); }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
            >
              <IconCheck /> Mark Complete
            </button>
          )}
          <button onClick={onClose} className="px-5 py-2 rounded-lg text-sm font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-100 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3" >
        {title}
      </h3>
      <div className="bg-stone-50 rounded-xl border border-stone-100 divide-y divide-stone-100">
        {children}
      </div>
    </div>
  );
}


function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start px-4 py-3">
      <span className="text-xs font-medium text-stone-500 w-36 shrink-0">{label}</span>
      <span className="text-sm text-stone-800 text-right" >{value}</span>
    </div>
  );
}