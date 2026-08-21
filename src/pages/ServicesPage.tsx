import React, { useState } from 'react';
import { 
  Cloud, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  FileText, 
  Zap,
  Lock,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { CTASection } from '../components/common/CTASection';
import { PageRoute } from '../types';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('cloud-transformation');

  const selectedService =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const engagementModels = [
    {
      title: 'Architecture Review & Strategy',
      duration: '2 – 4 Weeks',
      bestFor: 'Organizations planning large cloud migrations, GenAI adoption, or infrastructure modernization.',
      outcomes: [
        'Comprehensive current-state audit',
        'Target-state architecture blueprint',
        'Risk assessment & financial business case',
        'Prioritized phased execution roadmap',
      ],
    },
    {
      title: 'Migration & Engineering Delivery',
      duration: '8 – 16 Weeks (Wave-based)',
      bestFor: 'Executing VMware transitions, building production RAG systems, or provisioning Kubernetes platforms.',
      outcomes: [
        'Automated multi-account landing zones',
        'Factory-based workload migration & validation',
        'Production GenAI pipeline deployment',
        'Zero-downtime cutover & verification',
      ],
    },
    {
      title: 'Continuous Architecture & FinOps Advisory',
      duration: 'Ongoing Quarterly Cadence',
      bestFor: 'Engineering leadership needing senior architectural governance, cost optimization & roadmap stewardship.',
      outcomes: [
        'Monthly FinOps cost optimization reviews',
        'Architectural design reviews for new initiatives',
        'Emerging AI technology evaluations',
        'Continuous security & compliance posture checks',
      ],
    },
    {
      title: 'Corporate Technology Training',
      duration: 'Custom (2-5 Days or Multi-Week)',
      bestFor: 'Engineering teams, cloud architects, and tech leads looking to upskill in Cloud, GenAI, or DevOps.',
      outcomes: [
        '60% hands-on code labs & real-world blueprints',
        'Curriculum customized to client technology stack',
        'Led directly by Principal Enterprise Architects',
        'Capability benchmarks & capstone design challenges',
      ],
    },
    {
      title: 'Specialized Staff Augmentation',
      duration: 'Sprint-Based / Dedicated Months',
      bestFor: 'Accelerating transformation roadmaps and filling senior cloud, platform, AI, or architecture skill gaps.',
      outcomes: [
        'Senior engineers vetted by Principal Architects',
        'Immediate sprint integration (GitHub, Jira, Standups)',
        'Devyai senior architecture oversight included',
        'Elastic scaling with zero long-term agency lock-in',
      ],
    },
    {
      title: 'Fractional Architecture Leadership',
      duration: '10 – 20 Hours / Week',
      bestFor: 'Mid-market & growing tech enterprises needing Chief Architect guidance without full-time executive overhead.',
      outcomes: [
        'Strategic technology roadmap formulation',
        'RFC & architecture decision record (ADR) stewardship',
        'Technical due diligence & vendor selection',
        'Engineering team mentorship & capability growth',
      ],
    },
  ];

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
            <span>Enterprise Transformation Practices</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Consulting & Engineering Practices
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            We deliver senior architecture, hands-on engineering, corporate technical training, and specialized talent augmentation across five integrated domains to modernize enterprise operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onBookConsultation('Practice Inquiry')}
              className="px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Architecture Consultation</span>
            </button>
            <button
              onClick={onOpenAssessment}
              className="px-6 py-3.5 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 text-slate-200 font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Readiness Diagnostic</span>
            </button>
          </div>
        </div>
      </section>

      {/* Practice Deep Dive Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Practice Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-12">
          {servicesData.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-5 rounded-sm border text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#121214] border-blue-500 shadow-xl shadow-blue-500/10'
                    : 'bg-[#0A0A0B] border-white/10 hover:bg-[#121214]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                )}
                <div>
                  <div className="text-sm font-black uppercase tracking-tight text-white mb-1.5 line-clamp-2">
                    {service.title}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-blue-400 font-bold uppercase' : 'text-slate-500 uppercase'}>
                    {isSelected ? 'Active Practice' : 'Inspect'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-400' : 'text-slate-700'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Practice Detailed Blueprint */}
        <div className="p-8 sm:p-10 rounded-sm bg-[#121214] border border-white/10 space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 font-bold">
                Practice Profile
              </span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                {selectedService.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
                {selectedService.fullDesc}
              </p>
            </div>

            <button
              onClick={() => onNavigate(selectedService.route)}
              className="px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 self-start lg:self-center"
            >
              <span>View Dedicated Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Core Capabilities */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <Workflow className="w-4 h-4 text-blue-500" />
                <span>Technical Capabilities & Engineering Scope</span>
              </h3>
              <div className="space-y-2.5">
                {selectedService.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables & Artifacts */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span>Key Architectural Deliverables</span>
                </h3>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-sm bg-blue-600/20 text-blue-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                        0{i + 1}
                      </div>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Primary Tooling & Hyperscaler Ecosystem:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Engagement Models Section */}
      <section className="py-20 bg-[#121214] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Flexible Partnership Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              How We Engage With Enterprise Teams
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Tailored engagement structures built to match your transformation velocity, internal capabilities, and timeline requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="p-8 rounded-sm bg-[#0A0A0B] border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-sm bg-blue-600/15 text-blue-400 border border-blue-500/20 font-bold uppercase tracking-wider">
                    {model.duration}
                  </span>
                  <h3 className="text-xl font-black uppercase text-white tracking-wide">
                    {model.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {model.bestFor}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      Standard Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {model.outcomes.map((out, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onBookConsultation(`Engagement Model: ${model.title}`)}
                    className="w-full py-3 px-4 rounded-sm bg-[#121214] hover:bg-white hover:text-black border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Discuss This Engagement</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Modernize Your Enterprise Platform?"
        subheadline="Connect directly with our Principal Enterprise Architect for a free 30-minute architecture discovery."
        primaryButtonText="Book a Free 30-Minute Architecture Consultation"
        onBookConsultation={() => onBookConsultation()}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
