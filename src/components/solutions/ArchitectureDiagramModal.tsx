import React from 'react';
import { 
  X, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Calendar,
  Sparkles,
  Server,
  Cloud,
  Workflow
} from 'lucide-react';
import { ReferenceArchitecture } from '../../types';

interface ArchitectureDiagramModalProps {
  architecture: ReferenceArchitecture | null;
  onClose: () => void;
  onBookConsultation: (topic?: string) => void;
}

export const ArchitectureDiagramModal: React.FC<ArchitectureDiagramModalProps> = ({
  architecture,
  onClose,
  onBookConsultation,
}) => {
  if (!architecture) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-[#121214] border border-white/15 rounded-sm shadow-2xl overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#0A0A0B]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5" />
              <span>Blueprint • {architecture.category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              {architecture.title}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 font-normal">
              Production blueprint designed for enterprise scale, zero-trust security, and high reliability.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Challenge & Solution Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                Enterprise Challenge
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {architecture.challenge}
              </p>
            </div>

            <div className="p-4 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Architectural Solution
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {architecture.solution}
              </p>
            </div>
          </div>

          {/* Interactive Workflow Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-blue-400" />
              <span>Execution Pipeline & Architectural Lifecycle</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {architecture.workflowSteps.map((ws, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-sm bg-[#0A0A0B] border border-white/10 flex flex-col justify-between space-y-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded-sm bg-blue-600/15 border border-blue-500/30">
                      Step {ws.step}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase text-white mb-1">
                      {ws.title}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed font-normal">
                      {ws.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Architectural Components */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Key Architecture Stack Components</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {architecture.architectureComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-sm bg-[#0A0A0B] border border-white/10 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-white">{comp.name}</span>
                      <span className="text-[10px] font-mono text-blue-400 uppercase">
                        [{comp.category}]
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">
                      {comp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Outcomes */}
          <div className="p-4 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Potential Operational & Business Outcomes</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {architecture.potentialOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="font-normal">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Relevant Cloud Services & Tech Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {architecture.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-sm bg-[#0A0A0B] border border-white/10 text-slate-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-[#0A0A0B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left font-normal">
            Need a tailored version of this architecture for your environment?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white rounded-sm hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation(architecture.title);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Discuss Blueprint</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
