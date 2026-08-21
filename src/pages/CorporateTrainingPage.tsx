import React, { useState } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Cloud, 
  Sparkles, 
  Layers, 
  Building2, 
  Terminal, 
  Users, 
  BookOpen, 
  Cpu, 
  Workflow, 
  Target, 
  Award,
  Clock,
  Laptop
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';
import { PageRoute } from '../types';

interface CorporateTrainingPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const CorporateTrainingPage: React.FC<CorporateTrainingPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const [activeTrack, setActiveTrack] = useState<string>('cloud');

  const trainingTracks = [
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Architecture & Engineering',
      tagline: 'AWS, Microsoft Azure & Google Cloud Platform',
      desc: 'Deep-dive architectural training covering enterprise cloud foundations, migration wave factories, multi-account landing zones, zero-trust security, and FinOps cost optimization.',
      topics: [
        'AWS Architecture & Multi-Tier System Design',
        'AWS Solutions Architecture & Well-Architected Framework',
        'AWS Migration Strategy (AWS MGN, Database Replication & Waves)',
        'Microsoft Azure Enterprise Architecture (CAF & Landing Zones)',
        'Google Cloud Architecture, GKE Autopilot & Modernization',
        'Cloud Security, Zero-Trust IAM & Compliance Governance',
        'Cloud Cost Optimization & FinOps Engineering',
      ],
      handsOnLabs: [
        'Building a multi-account AWS Control Tower / Azure Landing Zone baseline',
        'Executing a simulated live database & VM migration wave with zero downtime',
        'Rightsizing infrastructure & building FinOps automated cost alerting',
      ],
    },
    {
      id: 'ai',
      icon: Sparkles,
      title: 'AI & Generative AI Engineering',
      tagline: 'From LLM Fundamentals to Production Systems',
      desc: 'Hands-on curriculum for software engineers, data professionals, and architects building deterministic, secure, and production-grade Generative AI and agentic applications.',
      topics: [
        'Generative AI Foundations & Enterprise LLM Selection',
        'Enterprise AI Architecture & Latency/Cost Optimization',
        'Production Retrieval-Augmented Generation (RAG)',
        'Vector Databases (pgvector, Pinecone, Qdrant, OpenSearch)',
        'Autonomous AI Agents & Tool-Use Orchestration (LangGraph, CrewAI)',
        'Advanced Prompt Engineering & Hallucination Mitigation',
        'AI Architecture, Guardrails & Security Governance',
        'AWS Bedrock, Azure OpenAI & Google Gemini / Vertex AI Integration',
      ],
      handsOnLabs: [
        'Implementing a hybrid RAG pipeline with cross-encoder reranking',
        'Building an autonomous SQL query & research agent with safety rails',
        'Securing enterprise LLMs with PII masking and prompt injection shields',
      ],
    },
    {
      id: 'devops',
      icon: Layers,
      title: 'DevOps & Platform Engineering',
      tagline: 'Kubernetes, Terraform & GitOps Automation',
      desc: 'Accelerate engineering velocity with modern platform engineering practices, infrastructure as code, automated continuous delivery, and full-stack observability.',
      topics: [
        'Enterprise DevOps Culture & CI/CD Pipeline Automation',
        'Infrastructure as Code with Terraform & OpenTofu',
        'Production Kubernetes Architecture (EKS, AKS, GKE)',
        'GitOps Workflows with ArgoCD & Flux',
        'Microservices Architecture, Service Mesh & API Gateways',
        'End-to-End Observability (OpenTelemetry, Prometheus, Grafana)',
        'Site Reliability Engineering (SRE), SLIs/SLOs & Chaos Testing',
        'DevSecOps & Shift-Left Automated Vulnerability Scanning',
      ],
      handsOnLabs: [
        'Deploying a resilient multi-tenant Kubernetes cluster via Terraform',
        'Setting up automated GitOps continuous deployment with automated rollbacks',
        'Building comprehensive OpenTelemetry distributed tracing & alerting',
      ],
    },
    {
      id: 'architecture',
      icon: Building2,
      title: 'Enterprise Architecture & System Design',
      tagline: 'Strategic Technology Leadership & Systems Thinking',
      desc: 'Equip architects, engineering leads, and technical leaders with structured frameworks to design resilient distributed systems, evaluate trade-offs, and govern enterprise technology.',
      topics: [
        'Enterprise Architecture Governance & Decision Frameworks',
        'High-Scale Distributed System Design & Event-Driven Systems',
        'Solution Architecture for Legacy Modernization & Monolith Deconstruction',
        'Cloud Migration Strategy, Assessment & Business Case Formulation',
        'Technology Risk Assessment, Disaster Recovery & High Availability',
        'FinOps Unit Economics & Executive Technical Communication',
      ],
      handsOnLabs: [
        'Designing a fault-tolerant multi-region payment or SaaS platform',
        'Creating an enterprise cloud migration business case and phased roadmap',
        'Conducting an architectural trade-off analysis and RFC review session',
      ],
    },
  ];

  const deliveryFeatures = [
    {
      icon: Laptop,
      title: '60% Hands-On Labs & Code',
      desc: 'Theory is anchored in practical architecture labs, real-world repositories, and live cloud environments. Engineers learn by building, not just watching slides.',
    },
    {
      icon: Cpu,
      title: 'Led by Principal Practitioners',
      desc: 'All sessions are designed and delivered by practicing Enterprise Architects with 15+ years of real-world multi-cloud, AI, and platform delivery experience.',
    },
    {
      icon: Workflow,
      title: 'Customized to Your Tech Stack',
      desc: 'We tailor modules, architecture patterns, and lab exercises to align with your organization’s specific cloud providers, tools, and technical goals.',
    },
    {
      icon: Award,
      title: 'Production-Grade Case Studies',
      desc: 'Scenarios mirror real enterprise migrations, production RAG deployments, and complex infrastructure challenges rather than toy sample projects.',
    },
  ];

  const targetAudiences = [
    {
      role: 'Engineering & DevOps Teams',
      focus: 'Practical coding, container orchestration, CI/CD automation, and cloud-native development.',
    },
    {
      role: 'Cloud & Infrastructure Engineers',
      focus: 'Multi-account landing zones, Terraform IaC, FinOps optimization, and disaster recovery.',
    },
    {
      role: 'Solution & Enterprise Architects',
      focus: 'System design, hyperscaler trade-off analysis, GenAI governance, and modernization roadmaps.',
    },
    {
      role: 'Tech Leads & Engineering Managers',
      focus: 'Architecture governance, technical risk mitigation, team enablement, and delivery acceleration.',
    },
  ];

  const deliveryFormats = [
    {
      title: 'Live Instructor-Led Virtual',
      duration: 'Interactive Sessions (2 to 5 Days or Multi-Week)',
      desc: 'Real-time collaborative classes via Zoom / Teams with screen sharing, breakout lab rooms, live Q&A, and direct instructor code reviews.',
      idealFor: 'Distributed or remote-first engineering teams across global locations.',
    },
    {
      title: 'On-Site Intensive Workshops',
      duration: '2 – 4 Full-Day Immersives',
      desc: 'Deep-dive in-person corporate workshops at your office or technology center, focused on high-intensity team alignment, architecture design, and capstone labs.',
      idealFor: 'Colocated engineering pods embarking on major cloud or AI transformation initiatives.',
    },
    {
      title: 'Custom Multi-Week Bootcamps',
      duration: '4 – 8 Weeks (Modular Cadence)',
      desc: 'Structured transformation programs with weekly lectures, guided lab assignments, architecture design milestones, and 1-on-1 mentorship checkpoints.',
      idealFor: 'Cross-skilling traditional infrastructure/software teams into Cloud & GenAI engineers.',
    },
    {
      title: 'Executive & Architect Masterclasses',
      duration: '1 – 2 Day Strategic Seminars',
      desc: 'High-impact strategic intensives for VP/Director-level leaders, Chief Architects, and Principal Engineers on AI roadmap governance and cloud unit economics.',
      idealFor: 'Technology leadership aligning on modernization and AI investment strategy.',
    },
  ];

  const currentTrack = trainingTracks.find((t) => t.id === activeTrack) || trainingTracks[0];

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
            <span>Practice • Corporate Technology Training</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Corporate Technology Training
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Practical, instructor-led technology training designed to help engineering, architecture, cloud, DevOps, and AI teams build real-world capabilities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onBookConsultation('Corporate Technology Training Inquiry')}
              className="px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Training Proposal</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 text-slate-200 font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Discuss Custom Curriculum</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Devyai Training / Differentiators */}
      <section className="py-20 bg-[#0E0E10] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Engineering Excellence // 01
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Real-World Engineering Delivery
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We do not deliver superficial slide shows or generic certification prep. Our training is engineered by practicing architects to solve real enterprise problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryFeatures.map((feat, idx) => {
              const Icon = feat.icon;
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
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Tracks & Detailed Syllabus */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
            Curriculum Matrix // 02
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Specialized Technology Tracks
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Choose from comprehensive role-based tracks or customize a blended curriculum aligned to your upcoming transformation roadmap.
          </p>
        </div>

        {/* Track Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {trainingTracks.map((track) => {
            const isSelected = track.id === activeTrack;
            const Icon = track.icon;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
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
                    Track
                  </span>
                </div>
                <div className="text-base font-bold text-white uppercase tracking-tight">
                  {track.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {track.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Track Deep Dive Box */}
        <div className="p-8 sm:p-10 rounded-sm bg-[#121214] border border-white/10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 font-bold">
                {currentTrack.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {currentTrack.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                {currentTrack.desc}
              </p>
            </div>

            <button
              onClick={() => onBookConsultation(`Training Proposal: ${currentTrack.title}`)}
              className="px-6 py-3 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 self-start lg:self-center shrink-0"
            >
              <span>Request Track Outline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Core Syllabus Topics */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>Curriculum Modules & Core Topics Covered</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentTrack.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-sm bg-[#0A0A0B] border border-white/10 text-xs text-slate-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on Labs & Capstone Projects */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-500" />
                <span>Hands-on Lab Scenarios & Architectural Challenges</span>
              </h4>
              <div className="space-y-3">
                {currentTrack.handsOnLabs.map((lab, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-1"
                  >
                    <div className="text-[10px] font-mono uppercase text-blue-400 font-bold">
                      Lab Challenge 0{i + 1}
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {lab}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-[#0E0E10] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Participants // 03
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Designed For Technical Teams
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We align depth and rigor to the specific roles and daily engineering responsibilities of your workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((aud, i) => (
              <div
                key={i}
                className="p-6 rounded-sm bg-[#121214] border border-white/10 space-y-3"
              >
                <div className="w-8 h-8 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs font-mono">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  {aud.role}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {aud.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
            Engagement Formats // 04
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Flexible Enterprise Delivery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Choose the delivery mode that fits your team schedule, location distribution, and project timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliveryFormats.map((fmt, i) => (
            <div
              key={i}
              className="p-8 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    {fmt.title}
                  </h3>
                  <span className="text-xs font-mono text-blue-400 bg-[#0A0A0B] px-2.5 py-1 rounded-sm border border-white/10">
                    {fmt.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {fmt.desc}
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  <strong className="text-slate-200">Best for:</strong> {fmt.idealFor}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onBookConsultation(`Corporate Training: ${fmt.title}`)}
                  className="w-full py-2.5 px-4 rounded-sm bg-[#0A0A0B] hover:bg-white/5 border border-white/10 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Inquire About {fmt.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Upskill Your Engineering & Architecture Teams?"
        subheadline="Discuss your capability gaps, customize a technical syllabus, and receive an actionable corporate training proposal from our Principal Architects."
        primaryButtonText="Request Training Proposal"
        secondaryButtonText="Explore All Practices"
        secondaryRoute="services"
        onBookConsultation={() => onBookConsultation('Corporate Technology Training Proposal')}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
