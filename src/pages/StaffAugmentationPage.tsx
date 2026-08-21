import React, { useState } from 'react';
import { 
  Users, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Cloud, 
  Sparkles, 
  Layers, 
  Building2, 
  Zap, 
  Cpu, 
  Award, 
  Clock, 
  CheckCircle,
  Briefcase,
  Workflow,
  Search,
  Scale
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';
import { PageRoute } from '../types';

interface StaffAugmentationPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const StaffAugmentationPage: React.FC<StaffAugmentationPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const [activeSpecialty, setActiveSpecialty] = useState<string>('cloud');

  const specialistDisciplines = [
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Engineers & Architects',
      tagline: 'AWS, Azure & Google Cloud Specialists',
      desc: 'Senior infrastructure engineers and cloud architects capable of designing, migrating, and managing high-availability multi-cloud environments.',
      roles: [
        'Principal Cloud Solutions Architect',
        'Senior AWS / Azure / GCP Infrastructure Engineer',
        'Cloud Migration & VMware Transition Specialist',
        'Multi-Account Landing Zone & Security Engineer',
        'Cloud FinOps & Cost Optimization Specialist',
      ],
      coreSkills: [
        'AWS (Control Tower, MGN, EKS, RDS, Bedrock)',
        'Microsoft Azure (CAF, Landing Zones, AKS, Cosmos)',
        'Google Cloud (GKE Autopilot, Vertex AI, BigQuery)',
        'Multi-region Disaster Recovery & HA Design',
        'Terraform & Automated Infrastructure as Code',
      ],
      typicalImpact: 'Accelerate enterprise cloud migrations by 3x while cutting post-migration compute spend by 25–40%.',
    },
    {
      id: 'devops',
      icon: Layers,
      title: 'DevOps & Platform Engineers',
      tagline: 'Kubernetes, GitOps & CI/CD Automation',
      desc: 'Hands-on platform engineers to build internal developer platforms, container orchestration, and continuous automated release pipelines.',
      roles: [
        'Senior Platform & Kubernetes Engineer',
        'Enterprise DevOps / GitOps Engineer',
        'Site Reliability Engineer (SRE)',
        'DevSecOps & Shift-Left Security Specialist',
        'Infrastructure as Code (Terraform / OpenTofu) Engineer',
      ],
      coreSkills: [
        'Production Kubernetes (EKS, AKS, GKE, Helm, Kustomize)',
        'GitOps Automation (ArgoCD, Flux, GitHub Actions, GitLab)',
        'Observability Stacks (OpenTelemetry, Prometheus, Datadog)',
        'Infrastructure as Code (Terraform, Terragrunt, OpenTofu)',
        'Zero-Trust IAM, HashiCorp Vault & Container Hardening',
      ],
      typicalImpact: 'Reduce deployment cycle times from weeks to minutes with automated verification and zero-downtime rollouts.',
    },
    {
      id: 'ai',
      icon: Sparkles,
      title: 'AI & Generative AI Engineers',
      tagline: 'Production RAG, AI Agents & LLM Systems',
      desc: 'Specialized engineers who bridge software development and modern foundation models to build secure, low-latency, deterministic AI solutions.',
      roles: [
        'Generative AI / LLM Systems Engineer',
        'Production RAG & Vector Database Specialist',
        'Autonomous AI Agent & Tool Orchestration Engineer',
        'AI Security, Guardrails & Governance Architect',
        'Model Evaluation & Latency/Cost Optimization Engineer',
      ],
      coreSkills: [
        'Hyperscaler AI (AWS Bedrock, Azure OpenAI, Google Vertex AI)',
        'Frameworks (LangChain, LangGraph, LlamaIndex, LiteLLM)',
        'Vector Databases (pgvector, Pinecone, Qdrant, OpenSearch)',
        'Evaluation, Tracing & Hallucination Guardrails',
        'Python, TypeScript, FastAPI & Serverless AI Inference',
      ],
      typicalImpact: 'Move from fragile proof-of-concepts to enterprise-ready, observable, and secured AI systems in weeks.',
    },
    {
      id: 'architecture',
      icon: Building2,
      title: 'Solution & Enterprise Architects',
      tagline: 'Strategic Technology Governance & System Design',
      desc: 'High-caliber technical leaders and fractional enterprise architects to steer architectural decisions, review designs, and align engineering to business strategy.',
      roles: [
        'Fractional Chief / Principal Enterprise Architect',
        'Distributed Systems & Microservices Architect',
        'Legacy Modernization & Monolith Deconstruction Architect',
        'Enterprise Cloud Governance & FinOps Director',
        'Technical Due Diligence & Architecture Reviewer',
      ],
      coreSkills: [
        'Distributed System Design & Event-Driven Architecture',
        'Enterprise Well-Architected Framework Reviews',
        'Technology Evaluation & Vendor-Neutral Roadmaps',
        'Cross-Functional Engineering Alignment & RFC Governance',
        'Executive & Stakeholder Technical Communication',
      ],
      typicalImpact: 'Eliminate architectural regressions, mitigate compliance risks, and establish scalable foundations for multi-year growth.',
    },
  ];

  const valuePillars = [
    {
      icon: Award,
      title: 'Vetted by Principal Architects',
      desc: 'Every candidate undergoes rigorous architectural reviews, system design evaluations, and coding assessments by our own Principal Architects—not non-technical recruiters.',
    },
    {
      icon: Zap,
      title: 'Immediate Sprint Productivity',
      desc: 'Senior professionals who integrate seamlessly into your GitHub, Jira, and communication workflows, delivering production-quality code from day one.',
    },
    {
      icon: ShieldCheck,
      title: 'Architectural Oversight Included',
      desc: 'Our augmented engineers are backed by Devyai Tech’s senior architectural advisory network, providing secondary reviews and proven blueprint libraries at no extra cost.',
    },
    {
      icon: Scale,
      title: 'Flexible & Elastic Scaling',
      desc: 'Scale up or ramp down capacity according to your release cycles, migration waves, or product milestones with zero long-term agency lock-in.',
    },
  ];

  const engagementModels = [
    {
      title: 'Dedicated Full-Time Specialists',
      scope: '1 to 5+ Senior Engineers',
      desc: 'Full-time dedicated engineers embedded directly within your agile scrum teams, reporting to your engineering leads and contributing to daily standups.',
      bestFor: 'Long-term product initiatives, ongoing platform modernization, or dedicated feature squads.',
    },
    {
      title: 'Pod / Delivery Squad Augmentation',
      scope: 'Cross-Functional Team (3 – 6 Engineers)',
      desc: 'A self-contained engineering squad composed of a Lead Architect, Senior Cloud/AI Engineers, and a Platform Specialist to execute distinct project deliverables.',
      bestFor: 'Migration waves, new GenAI application development, or platform engineering overhauls.',
    },
    {
      title: 'Fractional Architecture Leadership',
      scope: '10 – 20 Hours / Week Advisory',
      desc: 'Part-time Principal Architect leadership to conduct architectural design reviews, establish technical governance, and mentor internal teams.',
      bestFor: 'Growing technology companies needing seasoned architectural direction without full-time executive overhead.',
    },
    {
      title: 'Project Surge Capacity',
      scope: 'Short-Term High-Intensity (1 – 3 Months)',
      desc: 'Targeted surge engineering capacity to hit aggressive deadlines, execute complex cutover weekends, or resolve critical architectural bottlenecks.',
      bestFor: 'Zero-downtime cutover windows, compliance audit remediation, or MVP sprint accelerations.',
    },
  ];

  const currentSpecialty = specialistDisciplines.find((s) => s.id === activeSpecialty) || specialistDisciplines[0];

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span>Practice • Technology Staff Augmentation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Specialized Technology Staff Augmentation
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Specialized cloud, DevOps, AI, and architecture talent to help engineering teams scale delivery, accelerate transformation, and fill critical skill gaps.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onBookConsultation('Staff Augmentation Consultation')}
              className="px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Staffing Consultation</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 text-slate-200 font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span>Submit Resource Requirements</span>
            </button>
          </div>
        </div>
      </section>

      {/* The Architecture-Vetted Difference */}
      <section className="py-20 bg-[#0E0E10] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              The Devyai Advantage // 01
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              The Architecture-Vetted Difference
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We are a technology engineering consultancy, not a generic staffing agency. We provide deeply experienced practitioners who hit the ground running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500/40 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-sm bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialist Disciplines Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
            Engineering Talents // 02
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Specialist Practice Areas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Targeted senior engineers and architects with deep hands-on expertise across modern infrastructure and intelligence stacks.
          </p>
        </div>

        {/* Discipline Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {specialistDisciplines.map((discipline) => {
            const isSelected = discipline.id === activeSpecialty;
            const Icon = discipline.icon;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveSpecialty(discipline.id)}
                className={`p-5 rounded-sm border text-left transition-all relative ${
                  isSelected
                    ? 'bg-[#121214] border-blue-500 shadow-xl shadow-blue-500/10'
                    : 'bg-[#0A0A0B] border-white/10 hover:bg-[#121214]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                )}
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-sm ${isSelected ? 'bg-blue-600 text-white' : 'bg-white/5 text-blue-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                    Discipline
                  </span>
                </div>
                <div className="text-base font-bold text-white uppercase tracking-tight">
                  {discipline.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {discipline.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Detailed Card */}
        <div className="p-8 sm:p-10 rounded-sm bg-[#121214] border border-white/10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 font-bold">
                {currentSpecialty.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {currentSpecialty.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                {currentSpecialty.desc}
              </p>
            </div>

            <button
              onClick={() => onBookConsultation(`Augmentation: ${currentSpecialty.title}`)}
              className="px-6 py-3 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 self-start lg:self-center shrink-0"
            >
              <span>Check Talent Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Roles Provided */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-500" />
                <span>Specialized Roles & Seniority Profiles</span>
              </h4>
              <div className="space-y-2">
                {currentSpecialty.roles.map((role, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs sm:text-sm text-slate-200 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies & Impact */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <Workflow className="w-4 h-4 text-blue-500" />
                <span>Primary Technical Stacks & Competencies</span>
              </h4>
              <div className="space-y-2">
                {currentSpecialty.coreSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs text-slate-300 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-sm bg-blue-600/10 border border-blue-500/20 text-xs text-blue-300 space-y-1">
                <div className="font-mono font-bold uppercase tracking-wider text-blue-400">Typical Practice Impact:</div>
                <div>{currentSpecialty.typicalImpact}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-[#0E0E10] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Engagement Models // 03
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              How We Integrate With Your Team
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Flexible engagement structures tailored to your roadmap, sprint cadence, and engineering governance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="p-8 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500/40 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {model.title}
                    </h3>
                    <span className="text-xs font-mono text-blue-400 bg-[#0A0A0B] px-2.5 py-1 rounded-sm border border-white/10">
                      {model.scope}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {model.desc}
                  </p>
                  <div className="pt-2 text-xs text-slate-400">
                    <strong className="text-slate-200">Recommended for:</strong> {model.bestFor}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onBookConsultation(`Augmentation Model: ${model.title}`)}
                    className="w-full py-2.5 px-4 rounded-sm bg-[#0A0A0B] hover:bg-white/5 border border-white/10 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Discuss {model.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Need Senior Technical Talent for Your Next Sprint?"
        subheadline="Connect with our Principal Architects to review your skill requirements, team velocity goals, and available vetted specialists."
        primaryButtonText="Request Augmentation Consultation"
        secondaryButtonText="Explore All Practices"
        secondaryRoute="services"
        onBookConsultation={() => onBookConsultation('Technology Staff Augmentation Proposal')}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
