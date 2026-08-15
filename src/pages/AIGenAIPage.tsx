import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  Database, 
  Bot, 
  Lock, 
  Layers, 
  Search,
  Zap,
  Terminal
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';
import { PageRoute } from '../types';

interface AIGenAIPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const AIGenAIPage: React.FC<AIGenAIPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const [activeRagStage, setActiveRagStage] = useState<number>(0);

  const aiPillars = [
    {
      icon: Search,
      title: 'Production RAG & Enterprise Knowledge Systems',
      desc: 'Connect internal documents, wikis, ticketing platforms, and databases to enterprise LLMs with sub-second retrieval, hybrid vector search, and strict access controls.',
      capabilities: [
        'Hierarchical document chunking & contextual embeddings',
        'Hybrid search combining dense vector embeddings + BM25 keyword search',
        'Cross-encoder reranking algorithms for precision retrieval',
        'Multi-tenant role-based access control (RBAC) filtering at index time',
      ],
    },
    {
      icon: Bot,
      title: 'Autonomous AI Agents & Multi-Agent Workflows',
      desc: 'Design and deploy deterministic AI agents capable of planning, executing complex API calls, querying databases, and automating business workflows.',
      capabilities: [
        'Tool orchestration frameworks (LangGraph, AutoGen, CrewAI)',
        'Scoped read-only & human-in-the-loop write approval mechanisms',
        'AIOps & SRE incident root-cause diagnosis agents',
        'Contextual memory buffers and multi-turn state persistence',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'AI Security, Guardrails & Governance',
      desc: 'Protect enterprise IP and ensure compliance with zero customer data retention, automated PII redaction, prompt injection defense, and hallucination verification.',
      capabilities: [
        'Real-time PII scrubbing and token anonymization layers',
        'Prompt injection and adversarial jailbreak detection',
        'Hallucination and citation verification scorecards',
        'Zero data retention private VPC endpoints on AWS Bedrock & Azure AI',
      ],
    },
    {
      icon: Cpu,
      title: 'Foundation Model Selection & Evaluation',
      desc: 'Objective, vendor-neutral benchmarking to select and orchestrate the right models (Bedrock Claude 3.5, Azure OpenAI GPT-4o, Vertex Gemini 2.0, DeepSeek) for your latency and cost profile.',
      capabilities: [
        'Automated benchmark testing on company-specific domain datasets',
        'Semantic prompt caching to reduce token spend by 40%+',
        'Model fallback routing and circuit breakers for 99.99% uptime',
        'Continuous token consumption and latency telemetry monitoring',
      ],
    },
  ];

  const ragStages = [
    {
      num: '01',
      title: 'Ingestion & Chunking',
      category: 'Data Pipeline',
      desc: 'Automated connectors ingest PDFs, Confluence, SharePoint, and databases. Documents are split into semantic chunks with metadata tags.',
      specs: 'Hierarchical chunking • OCR extraction • Metadata enrichment',
    },
    {
      num: '02',
      title: 'Embeddings & Vector Indexing',
      category: 'Vector Layer',
      desc: 'High-dimensional embeddings (e.g. Cohere / OpenAI / Titan) are generated and stored in private vector databases with ACL security labels.',
      specs: 'pgvector / Pinecone / OpenSearch • HNSW indexing • Sub-10ms query',
    },
    {
      num: '03',
      title: 'Hybrid Retrieval & Reranking',
      category: 'Retrieval Engine',
      desc: 'User queries trigger hybrid dense + sparse search, filtered by user permissions, then refined via cross-encoder rerankers.',
      specs: 'Dense vector search + BM25 • Reciprocal Rank Fusion (RRF) • Reranker',
    },
    {
      num: '04',
      title: 'Guardrailed Synthesis',
      category: 'Inference & Output',
      desc: 'Private LLM processes curated context to generate authoritative answers with strict inline citations and zero hallucination checks.',
      specs: 'AWS Bedrock / Azure OpenAI • Guardrails AI validation • Source citations',
    },
  ];

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Practice • AI & Generative AI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Enterprise Generative AI & AI Agents
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Move from unguided AI experimentation to secure, production-ready enterprise RAG systems, autonomous agents, and foundation model architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onBookConsultation('GenAI & RAG Practice')}
              className="px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book GenAI Architecture Session</span>
            </button>
            <button
              onClick={onOpenAssessment}
              className="px-6 py-3.5 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 text-slate-200 font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Evaluate GenAI Readiness</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core AI Practice Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
            Engineering Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Production GenAI Architecture Disciplines
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            We build enterprise AI systems that prioritize deterministic accuracy, data privacy, low latency, and zero model hallucination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-sm bg-[#121214] border border-white/10 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-white tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Technical Capabilities:
                    </div>
                    <ul className="space-y-2">
                      {pillar.capabilities.map((cap, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onBookConsultation(`AI Practice: ${pillar.title}`)}
                    className="w-full py-3 px-4 rounded-sm bg-[#0A0A0B] hover:bg-white hover:text-black border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Consult on {pillar.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Production RAG Pipeline Architecture Section */}
      <section className="py-20 bg-[#121214] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Reference Architecture Flow
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Enterprise Production RAG Architecture
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Explore the four core pipeline stages required to take internal knowledge repositories into high-precision, low-latency LLM answers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ragStages.map((stage, idx) => {
              const isActive = activeRagStage === idx;
              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveRagStage(idx)}
                  className={`p-6 rounded-sm border text-left transition-all relative flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0A0A0B] border-blue-500 shadow-lg shadow-blue-500/10'
                      : 'bg-[#0A0A0B] border-white/10 hover:border-white/20'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                  )}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-blue-400">
                        {stage.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-slate-400 px-2 py-0.5 rounded-sm bg-[#121214] border border-white/10">
                        {stage.category}
                      </span>
                    </div>
                    <h3 className="text-base font-black uppercase text-white tracking-wide">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-blue-400">
                    {stage.specs}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Deploy Enterprise GenAI & RAG Solutions?"
        subheadline="Consult directly with our Principal Enterprise Architect to evaluate your use case feasibility, model selection, and zero-trust security boundary."
        primaryButtonText="Book a Free 30-Minute Architecture Consultation"
        secondaryButtonText="View GenAI Reference Blueprints"
        secondaryRoute="solutions"
        onBookConsultation={() => onBookConsultation('GenAI & RAG Roadmap')}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
