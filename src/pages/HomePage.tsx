import React, { useState } from 'react';
import { 
  Cloud, 
  Sparkles, 
  Layers, 
  GraduationCap,
  Users,
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Lock,
  Workflow,
  Server,
  Database,
  BarChart3,
  Bot,
  Compass,
  Check
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';
import { HeroArchitectureFlow } from '../components/home/HeroArchitectureFlow';
import { CTASection } from '../components/common/CTASection';
import { PageRoute, ReferenceArchitecture } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
  onSelectArchitecture: (arch: ReferenceArchitecture) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
  onSelectArchitecture,
}) => {
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  const processSteps = [
    {
      num: '01',
      title: 'Discover',
      shortDesc: 'Understand business objectives, current architecture, challenges and constraints.',
      details:
        'We conduct deep-dive technical discovery workshops, evaluate your infrastructure topology, inventory on-premises & cloud workloads, assess data readiness, and quantify cost/performance bottlenecks.',
      deliverable: 'Current-State Architecture Audit & Transformation Scope Matrix',
    },
    {
      num: '02',
      title: 'Architect',
      shortDesc: 'Design the target-state architecture, roadmap and implementation strategy.',
      details:
        'We engineer zero-trust multi-cloud blueprints, RAG pipeline specifications, IaC foundation templates, security guardrails, and wave-by-wave execution schedules with clear KPIs and risk mitigations.',
      deliverable: 'Target-State Architecture Blueprint & Migration / AI Delivery Roadmap',
    },
    {
      num: '03',
      title: 'Build & Deliver',
      shortDesc: 'Develop and deploy the solution using modern cloud, AI and engineering practices.',
      details:
        'Hands-on engineering: provisioning automated Landing Zones, standing up vector stores & LLM orchestrators, executing migration factories with automated testing, and setting up GitOps pipelines.',
      deliverable: 'Production-Grade Infrastructure, Secure Pipelines & Validated Codebase',
    },
    {
      num: '04',
      title: 'Train & Enable',
      shortDesc: 'Upskill your engineering and architecture teams for long-term self-sufficiency.',
      details:
        'Custom instructor-led technical workshops, hands-on architectural design sessions, and comprehensive code handovers to empower your internal teams to operate and scale the platform.',
      deliverable: 'Customized Lab Curriculums, Team Enablement & Runbook Mastery',
    },
    {
      num: '05',
      title: 'Scale & Optimize',
      shortDesc: 'Measure outcomes, augment engineering capacity, reduce cost, and continuously evolve.',
      details:
        'Post-launch telemetry tuning, automated FinOps rightsizing, senior staff augmentation for continuous velocity, and quarterly architecture advisory stewardship.',
      deliverable: 'FinOps Governance Dashboard & Elastic Engineering Capacity',
    },
  ];

  const businessOutcomes = [
    {
      icon: DollarSign,
      title: 'Reduce Cloud Costs',
      desc: 'Identify waste, rightsizing opportunities, idle capacity, and optimize cloud economics without impacting availability.',
      tag: 'FinOps Optimization',
      stat: '15% – 35% Potential Spend Recovery',
    },
    {
      icon: Zap,
      title: 'Accelerate Delivery',
      desc: 'Automate infrastructure and software delivery through modern DevOps, Terraform IaC, and Kubernetes GitOps golden paths.',
      tag: 'Platform Velocity',
      stat: 'Zero-Touch Repeatable Deploys',
    },
    {
      icon: Cloud,
      title: 'Modernize Infrastructure',
      desc: 'Transition legacy on-premises VMware and monolithic VMs toward secure, scalable, multi-account cloud landing zones.',
      tag: 'Cloud Transformation',
      stat: 'Zero-Downtime Wave Factory',
    },
    {
      icon: Sparkles,
      title: 'Unlock Enterprise AI',
      desc: 'Turn unguided GenAI experimentation into secure, private, production-ready RAG applications and autonomous AI agents.',
      tag: 'Generative AI',
      stat: 'Strict Zero-Data Retention Rails',
    },
    {
      icon: GraduationCap,
      title: 'Build Internal Capability',
      desc: 'Empower in-house engineering and architecture teams through pragmatic, instructor-led training tailored to your exact tech stack.',
      tag: 'Corporate Training',
      stat: '60% Hands-On Production Labs',
    },
    {
      icon: Users,
      title: 'Scale Technology Delivery',
      desc: 'Fill critical capability gaps and accelerate transformation with senior, architecture-vetted engineers and fractional technical leadership.',
      tag: 'Staff Augmentation',
      stat: 'Immediate Sprint-Ready Talent',
    },
  ];

  const aiMaturityStages = [
    {
      stage: 'Strategy',
      icon: Zap,
      desc: 'Identify high-value AI opportunities, evaluate ROI, and establish data governance & compliance policies.',
      checklist: ['Use Case Prioritization', 'TCO & Latency Modeling', 'Data Readiness Assessment'],
    },
    {
      stage: 'Prototype',
      icon: Cpu,
      desc: 'Build focused, secure proof-of-concepts to validate retrieval accuracy, latency, and feasibility.',
      checklist: ['Private VPC Sandbox', 'Vector Search Benchmarking', 'Prompt & Model Evaluation'],
    },
    {
      stage: 'Production',
      icon: ShieldCheck,
      desc: 'Deploy resilient, enterprise-grade RAG pipelines, API layers, and automated safety guardrails.',
      checklist: ['P95 Latency Optimization', 'PII & Injection Defense', 'RBAC & Auditing Logs'],
    },
    {
      stage: 'Scale',
      icon: TrendingUp,
      desc: 'Integrate multi-agent workflows, autonomous tool calling, and continuous fine-tuning into core business operations.',
      checklist: ['Autonomous SRE Agents', 'Cross-System Tool Execution', 'Continuous Token FinOps'],
    },
  ];

  const aiCapabilitiesList = [
    'Enterprise LLM Applications',
    'Production RAG Pipelines',
    'Embedding & Vector Search',
    'High-Scale Vector Databases',
    'Autonomous AI Agents',
    'Multi-Agent Architectures',
    'Prompt Engineering & DSPy',
    'Automated AI Evaluation',
    'Zero-Trust AI Security',
    'Hallucination Guardrails',
    'Enterprise ERP/ITSM Integration',
  ];

  return (
    <div className="space-y-0 bg-[#0A0A0B]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0A0B] overflow-hidden">
        {/* Ambient background light grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-blue-500/10 to-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Executive Positioning Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#121214] border border-white/15 text-blue-400 text-[11px] font-bold uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Enterprise Technology & Architecture</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] uppercase">
                {siteConfig.tagline}
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                {siteConfig.supportingMessage}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero-primary-cta-btn"
                  onClick={() => onBookConsultation()}
                  className="w-full sm:w-auto px-7 py-4 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-black/60 transition-all flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Architecture Consultation</span>
                </button>

                <button
                  id="hero-secondary-cta-btn"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-6 py-4 rounded-sm bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
              </div>

              {/* Target Platforms */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-mono uppercase tracking-wider">
                <span>Certified:</span>
                <span className="text-white font-bold">AWS</span>
                <span>•</span>
                <span className="text-white font-bold">Azure</span>
                <span>•</span>
                <span className="text-white font-bold">Google Cloud</span>
              </div>
            </div>

            {/* Right Interactive Architecture Flow Illustration */}
            <div className="lg:col-span-6">
              <HeroArchitectureFlow />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / CREDIBILITY SECTION */}
      <section className="bg-[#0E0E10] border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              Enterprise Technology Expertise. Practical Engineering. Measurable Outcomes.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Architecture-led delivery trusted by engineering leaders to solve critical infrastructure and GenAI initiatives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="p-6 rounded-sm bg-[#121214] border border-white/10 text-center space-y-2 hover:border-blue-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">
                17+ Years
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-200 font-bold">
                Enterprise IT & Architecture
              </div>
              <div className="text-xs text-slate-400">
                End-to-end architecture & systems engineering leadership
              </div>
            </div>

            <div className="p-6 rounded-sm bg-[#121214] border border-white/10 text-center space-y-2 hover:border-blue-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                Multi-Cloud
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-200 font-bold">
                AWS • Azure • Google Cloud
              </div>
              <div className="text-xs text-slate-400">
                Cross-platform architectures & cloud-native tooling
              </div>
            </div>

            <div className="p-6 rounded-sm bg-[#121214] border border-white/10 text-center space-y-2 hover:border-blue-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">
                Cloud Factory
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-200 font-bold">
                Migration • Modernization • FinOps
              </div>
              <div className="text-xs text-slate-400">
                VMware transition & landing zones at enterprise scale
              </div>
            </div>

            <div className="p-6 rounded-sm bg-[#121214] border border-white/10 text-center space-y-2 hover:border-blue-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                Enterprise AI
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-200 font-bold">
                GenAI • RAG • AI Agents
              </div>
              <div className="text-xs text-slate-400">
                Private LLMs with security, guardrails & observability
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 WHAT DO YOU NEED? (QUICK NAVIGATION SELECTOR) */}
      <section className="py-16 bg-[#0E0E10] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Capabilities Navigator
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              What Do You Need?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Select your primary engineering priority to navigate directly to tailored practices and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            <button
              onClick={() => onNavigate('cloud-transformation')}
              className="p-4 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 hover:bg-[#18181B] text-left transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="p-2 w-9 h-9 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Modernize Cloud
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  AWS/Azure migration, Landing Zones & FinOps
                </p>
              </div>
              <div className="text-[10px] font-mono text-blue-400 flex items-center gap-1 font-semibold pt-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('ai-genai')}
              className="p-4 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 hover:bg-[#18181B] text-left transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="p-2 w-9 h-9 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Adopt GenAI
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Production RAG, Vector DBs & AI Agents
                </p>
              </div>
              <div className="text-[10px] font-mono text-blue-400 flex items-center gap-1 font-semibold pt-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('platform-engineering')}
              className="p-4 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 hover:bg-[#18181B] text-left transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="p-2 w-9 h-9 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Layers className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Automate Platforms
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Kubernetes, Terraform IaC & GitOps
                </p>
              </div>
              <div className="text-[10px] font-mono text-blue-400 flex items-center gap-1 font-semibold pt-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('corporate-training')}
              className="p-4 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 hover:bg-[#18181B] text-left transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="p-2 w-9 h-9 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Upskill Teams
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Instructor-led Cloud, AI & DevOps Labs
                </p>
              </div>
              <div className="text-[10px] font-mono text-blue-400 flex items-center gap-1 font-semibold pt-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('staff-augmentation')}
              className="p-4 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 hover:bg-[#18181B] text-left transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="p-2 w-9 h-9 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Users className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Scale Engineering
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Vetted Cloud, AI & Architecture Talent
                </p>
              </div>
              <div className="text-[10px] font-mono text-blue-400 flex items-center gap-1 font-semibold pt-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (WHAT WE DO) */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
                Core Practices // 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                What We Do
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We combine enterprise architecture with hands-on systems engineering across five specialized practices.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const iconMap: Record<string, any> = {
                Cloud: Cloud,
                Sparkles: Sparkles,
                Layers: Layers,
                GraduationCap: GraduationCap,
                Users: Users,
              };
              const ServiceIcon = iconMap[service.iconName] || Cloud;

              return (
                <div
                  key={service.id}
                  className="rounded-sm bg-[#101012] border border-white/10 p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all group"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-sm bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 group-hover:scale-105 transition-all">
                      <ServiceIcon className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 uppercase tracking-wide transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Capabilities list */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
                        Engineering Focus:
                      </div>
                      <ul className="space-y-2">
                        {service.capabilities.slice(0, 4).map((cap, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400 shrink-0 font-bold">•</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-white/10">
                    <button
                      onClick={() => onNavigate(service.route)}
                      className="w-full py-3 px-4 rounded-sm bg-[#0A0A0B] border border-white/10 hover:border-blue-500/50 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:bg-[#18181B]"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BUSINESS OUTCOME SECTION */}
      <section className="py-20 bg-[#0E0E10] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Impact & Value // 02
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Technology Should Create Business Value
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We do not sell developer hours or promote hype cycles. We engineer architecture that delivers quantifiable cost reduction, deployment velocity, team capability, and enterprise resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500/40 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-sm bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/5 text-slate-300">
                      {outcome.tag}
                    </span>
                    <h3 className="text-base font-bold text-white uppercase tracking-wide">
                      {outcome.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {outcome.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs font-mono text-blue-400 font-semibold">
                    {outcome.stat}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. HOW WE WORK (5-STEP JOURNEY) */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Lifecycle // 03
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              How We Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A disciplined, architecture-first methodology designed to mitigate risk, upskill your teams, and guarantee high-velocity execution from day one.
            </p>
          </div>

          {/* Desktop Horizontal Process Journey */}
          <div className="hidden lg:grid grid-cols-5 gap-3 mb-8">
            {processSteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveProcessStep(idx)}
                className={`p-5 rounded-sm border text-left transition-all relative ${
                  activeProcessStep === idx
                    ? 'bg-[#18181B] border-blue-500 text-white shadow-xl shadow-blue-500/10'
                    : 'bg-[#101012] border-white/10 hover:bg-[#141416]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black font-mono ${
                    activeProcessStep === idx ? 'text-blue-400' : 'text-slate-500'
                  }`}>
                    {step.num}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                  )}
                </div>
                <div className="text-sm font-bold text-white mb-1 uppercase tracking-wide">
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2">
                  {step.shortDesc}
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Active Step Focus Box */}
          <div className="p-8 rounded-sm bg-[#101012] border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-sm bg-blue-600/15 text-blue-400 border border-blue-500/30">
                    Phase {processSteps[activeProcessStep].num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                    {processSteps[activeProcessStep].title}: Execution Scope
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {processSteps[activeProcessStep].details}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-blue-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Key Deliverable: {processSteps[activeProcessStep].deliverable}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end gap-3">
                <button
                  onClick={() => onBookConsultation(`Phase ${processSteps[activeProcessStep].num} (${processSteps[activeProcessStep].title}) Scope`)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Discuss Your Project</span>
                </button>
                <div className="text-[11px] text-slate-400 font-mono">
                  Direct discovery with Principal Architect
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. REFERENCE ARCHITECTURES / CASE STUDIES */}
      <section className="py-24 bg-[#0E0E10] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
                Proven Blueprints // 04
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                Reference Architectures
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Explore production-grade technical solution architectures designed for multi-cloud scale, strict compliance, and rapid implementation.
              </p>
            </div>

            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-colors"
            >
              <span>View All 4 Architectures</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((arch) => (
              <div
                key={arch.id}
                className="p-8 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-sm bg-[#0A0A0B] border border-white/10 text-blue-400">
                      {arch.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Blueprint
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 uppercase tracking-wide transition-colors">
                    {arch.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {arch.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="text-[10px] font-mono uppercase text-slate-400">
                      Potential Outcomes:
                    </div>
                    <ul className="space-y-1">
                      {arch.potentialOutcomes.slice(0, 3).map((out, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="truncate">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectArchitecture(arch)}
                    className="flex-1 py-2.5 px-4 rounded-sm bg-[#0A0A0B] hover:bg-white/5 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Workflow className="w-3.5 h-3.5 text-blue-400" />
                    <span>Inspect Blueprint</span>
                  </button>

                  <button
                    onClick={() => onBookConsultation(`Architecture Consultation: ${arch.title}`)}
                    className="py-2.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Discuss</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. AI CAPABILITIES SECTION */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Enterprise Artificial Intelligence // 05
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              From GenAI Experiments to Enterprise AI
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Moving beyond basic chatbots into deterministic, observable, and secure AI systems engineered within private cloud boundaries.
            </p>
          </div>

          {/* Maturity Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {aiMaturityStages.map((st, i) => {
              const StageIcon = st.icon;
              return (
                <div
                  key={st.stage}
                  className="p-6 rounded-sm bg-[#101012] border border-white/10 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-sm bg-[#0A0A0B] border border-white/10 text-blue-400 flex items-center justify-center">
                        <StageIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Phase 0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wide">
                      {st.stage}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-1.5">
                    {st.checklist.map((c, idx) => (
                      <div key={idx} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Competencies Tag Grid */}
          <div className="p-8 rounded-sm bg-[#101012] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-400">
              <Bot className="w-4 h-4" />
              <span>Core Enterprise AI Engineering Disciplines</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {aiCapabilitiesList.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs font-medium text-slate-200"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. CLOUD CAPABILITIES SECTION */}
      <section className="py-20 bg-[#0E0E10] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Multi-Cloud // 06
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Multi-Cloud Architecture & Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Objective, vendor-neutral engineering across all three major hyperscalers to avoid lock-in and maximize architectural performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* AWS */}
            <div className="p-8 rounded-sm bg-[#121214] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono">
                  AWS
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wide">Amazon Web Services</h3>
                  <span className="text-xs text-slate-400 font-mono">Enterprise Cloud & Bedrock</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Cloud Migration (AWS MGN & Migration Waves)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>AWS Bedrock & Generative AI Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Elastic Kubernetes Service (EKS) & Fargate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Systems Manager, CloudWatch & AWS Config</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Multi-Region Disaster Recovery & Backup</span>
                </li>
              </ul>
            </div>

            {/* Microsoft Azure */}
            <div className="p-8 rounded-sm bg-[#121214] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold font-mono">
                  AZ
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wide">Microsoft Azure</h3>
                  <span className="text-xs text-slate-400 font-mono">Enterprise & Azure OpenAI</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Enterprise Azure Landing Zones (CAF)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Azure OpenAI Service & AI Studio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Azure Kubernetes Service (AKS) & Container Apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Azure DevOps & GitOps Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Enterprise Data Platforms & Fabric Migration</span>
                </li>
              </ul>
            </div>

            {/* Google Cloud */}
            <div className="p-8 rounded-sm bg-[#121214] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold font-mono">
                  GCP
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wide">Google Cloud</h3>
                  <span className="text-xs text-slate-400 font-mono">Vertex AI & Kubernetes</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Google Kubernetes Engine (GKE) Autopilot</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Vertex AI & Gemini Enterprise Architectures</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>BigQuery Data Pipelines & Vector Search</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Cloud Run Microservices & Serverless</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Google Cloud Migration & Modernization</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FREE ASSESSMENT OFFER SECTION */}
      <section className="py-20 bg-[#0A0A0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-sm bg-[#101012] border border-white/15 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span>Architecture Assessment Offer</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  Not Sure Where to Start?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Start with a focused architecture assessment. We’ll review your current environment, identify the highest-impact opportunities, and provide a practical roadmap.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs space-y-1">
                    <div className="font-bold text-white uppercase tracking-wider">Cloud Readiness</div>
                    <div className="text-slate-400 text-[11px]">Migration & FinOps audit</div>
                  </div>
                  <div className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs space-y-1">
                    <div className="font-bold text-white uppercase tracking-wider">GenAI Readiness</div>
                    <div className="text-slate-400 text-[11px]">RAG & security posture</div>
                  </div>
                  <div className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs space-y-1">
                    <div className="font-bold text-white uppercase tracking-wider">Architecture Review</div>
                    <div className="text-slate-400 text-[11px]">Kubernetes & IaC audit</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-4">
                <button
                  onClick={onOpenAssessment}
                  className="w-full sm:w-auto px-8 py-4 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Take Free Assessment</span>
                </button>

                <button
                  onClick={() => onBookConsultation('Architecture Assessment Request')}
                  className="text-xs text-slate-400 hover:text-white font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>Or book a 30-min discovery call</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <CTASection
        headline="Have a Cloud, AI or Architecture Challenge?"
        subheadline="Let's turn it into an actionable roadmap. Connect directly with our Principal Enterprise Architect to evaluate your technical requirements."
        primaryButtonText="Book Architecture Consultation"
        secondaryButtonText="Explore Our Services"
        secondaryRoute="services"
        onBookConsultation={() => onBookConsultation()}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
