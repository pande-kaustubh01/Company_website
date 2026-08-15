import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Linkedin, 
  Award, 
  Layers, 
  Cloud, 
  Sparkles, 
  Target, 
  Compass, 
  User
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { CTASection } from '../components/common/CTASection';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const architecturalTenets = [
    {
      icon: Target,
      title: 'Business Outcomes Over Tech Hype',
      desc: 'We evaluate every architectural decision against tangible business metrics: operational resilience, infrastructure cost per unit, release velocity, and security posture.',
    },
    {
      icon: Cpu,
      title: 'Pragmatic & Deterministic Engineering',
      desc: 'We favor proven, maintainable patterns over speculative complexity. In GenAI, this means deterministic guardrails, structured evaluation benchmarks, and low latency.',
    },
    {
      icon: Cloud,
      title: 'Hyperscaler Neutrality & Zero Lock-In',
      desc: 'We engineer modular solutions across AWS, Microsoft Azure, and Google Cloud using open standards (Terraform, Kubernetes, OpenTelemetry) to preserve future flexibility.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Trust Security & Governance by Design',
      desc: 'Security is not an afterthought. IAM least-privilege, network isolation, immutable backup vaults, and private VPC LLM boundaries are built into foundational landing zones.',
    },
  ];

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
            <span>Consultancy Narrative & Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            Bridging Strategy & Deep Engineering
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            We combine enterprise architecture, cloud engineering, DevOps and Generative AI expertise to help organizations turn complex technology initiatives into practical, scalable solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onBookConsultation('About Page Founder Discussion')}
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
              <span>Diagnostic Assessment</span>
            </button>
          </div>
        </div>
      </section>

      {/* Founder & Principal Architect Profile Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-sm bg-[#121214] border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Visual Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-sm bg-[#0A0A0B] border border-white/15 flex flex-col items-center justify-center p-6 text-center space-y-3 relative group shadow-2xl">
                <div className="w-16 h-16 rounded-sm bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <User className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-black uppercase text-white tracking-wide">
                    {siteConfig.founder.name}
                  </span>
                  <div className="text-[11px] font-mono text-slate-400">
                    {siteConfig.founder.title}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-blue-400 bg-[#121214] px-2.5 py-1 rounded-sm border border-white/10 uppercase tracking-wider">
                  Verified Principal
                </div>
              </div>
            </div>

            {/* Founder Narrative & Credentials */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs font-mono text-blue-400 uppercase tracking-wider">
                  <span>{siteConfig.founder.experienceYears} Architecture Experience</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                  {siteConfig.founder.name}
                </h2>
                <div className="text-sm font-semibold text-slate-300 font-mono">
                  {siteConfig.founder.title}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {siteConfig.founder.summary}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
                  Core Architecture Disciplines:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {siteConfig.founder.specialties.map((spec, i) => (
                    <div key={i} className="text-xs text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onBookConsultation('Consultation with Principal Architect')}
                  className="px-6 py-3 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 1-on-1 Consultation</span>
                </button>

                <a
                  href={`#${siteConfig.founder.linkedIn}`}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-sm bg-[#0A0A0B] border border-white/10 hover:border-blue-500 text-slate-300 hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Architectural Philosophy / Tenets */}
      <section className="py-20 bg-[#121214] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Our Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Enterprise Architectural Tenets
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              How we approach every systems design, workload migration, and Generative AI engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturalTenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-4"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#121214] border border-white/10 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-white tracking-wide">
                    {tenet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {tenet.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Global Delivery Reach */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
            International Client Engagement
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
            Serving Modern Enterprises Globally
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal">
            Providing high-touch architecture consulting, multi-cloud engineering, and GenAI advisory across core technology markets.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {siteConfig.contact.regions.map((reg) => (
            <div
              key={reg}
              className="px-4 py-2 rounded-sm bg-[#121214] border border-white/10 text-xs font-mono font-bold text-slate-200 uppercase tracking-wider"
            >
              {reg}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Looking for an Architecture Partner You Can Trust?"
        subheadline="Let's start with a technical discovery conversation to explore how we can support your roadmap."
        primaryButtonText="Book a Free 30-Minute Architecture Consultation"
        onBookConsultation={() => onBookConsultation('About Page CTA')}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
