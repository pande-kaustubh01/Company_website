import React, { useState } from 'react';
import { 
  Workflow, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Cloud, 
  Sparkles, 
  TrendingDown, 
  FileText,
  Activity
} from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import { CTASection } from '../components/common/CTASection';
import { ReferenceArchitecture, PageRoute } from '../types';

interface SolutionsPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
  onSelectArchitecture: (arch: ReferenceArchitecture) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
  onSelectArchitecture,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cloud Migration', 'Enterprise AI', 'AIOps', 'FinOps'];

  const filteredSolutions =
    selectedCategory === 'All'
      ? solutionsData
      : solutionsData.filter((s) => s.category === selectedCategory);

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Workflow className="w-3.5 h-3.5 text-blue-500" />
            <span>Architecture Blueprints</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Reference Blueprints & Solutions
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Detailed, production-tested reference patterns addressing real-world enterprise modernization challenges across multi-cloud migration, Generative AI, SRE automation, and FinOps.
          </p>

          <div className="p-4 max-w-2xl mx-auto rounded-sm bg-[#121214] border border-white/10 text-xs text-slate-400 font-mono">
            <strong>Engineering Notice:</strong> These reference architectures represent validated solution blueprints designed for enterprise multi-cloud deployments on AWS, Azure, and GCP.
          </div>
        </div>
      </section>

      {/* Solutions Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black font-extrabold shadow-md'
                  : 'bg-[#121214] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Architectures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSolutions.map((arch) => (
            <div
              key={arch.id}
              className="p-8 sm:p-10 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 transition-all flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-6">
                
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-sm bg-[#0A0A0B] border border-white/10 text-blue-400 uppercase tracking-wider">
                    {arch.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                    Reference Model
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {arch.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {arch.summary}
                  </p>
                </div>

                {/* Challenge & Solution Cards */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono uppercase text-rose-400 font-bold tracking-wider">
                      Enterprise Challenge:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {arch.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono uppercase text-blue-400 font-bold tracking-wider">
                      Architectural Solution:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {arch.solution}
                    </p>
                  </div>
                </div>

                {/* Pipeline Flow Steps */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Core Workflow Pipeline:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {arch.workflowSteps.map((ws, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs"
                      >
                        <span className="text-blue-400 font-mono font-bold mr-1.5">
                          {ws.step}.
                        </span>
                        <span className="text-slate-200 font-medium">{ws.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Potential Benefits */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                    Potential Business & Engineering Outcomes:
                  </div>
                  <ul className="space-y-1.5">
                    {arch.potentialOutcomes.slice(0, 3).map((out, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectArchitecture(arch)}
                  className="w-full sm:flex-1 py-3.5 px-4 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white text-xs font-extrabold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Workflow className="w-4 h-4" />
                  <span>Inspect Blueprint & Topology</span>
                </button>

                <button
                  onClick={() => onBookConsultation(`Architecture Consultation: ${arch.title}`)}
                  className="w-full sm:w-auto py-3.5 px-4 rounded-sm bg-[#0A0A0B] hover:bg-[#18181B] border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Discuss Solution</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <CTASection
        headline="Have a Similar Architectural Challenge in Your Organization?"
        subheadline="Let's review your target architecture, evaluate risks, and adapt these reference blueprints to your enterprise environment."
        primaryButtonText="Book a Free 30-Minute Architecture Consultation"
        onBookConsultation={() => onBookConsultation('Reference Architecture Inquiry')}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
