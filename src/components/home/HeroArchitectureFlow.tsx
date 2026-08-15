import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Database, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Workflow, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: any;
  color: string;
  badge: string;
  metrics: string;
  specs: string[];
}

export const HeroArchitectureFlow: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const architectureNodes: ArchitectureNode[] = [
    {
      id: 'cloud',
      title: '01. Cloud Foundation',
      subtitle: 'Multi-Cloud Infrastructure & Landing Zones',
      category: 'AWS • Azure • Google Cloud',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-600',
      badge: 'Multi-Region & Resilient',
      metrics: '99.99% Target SLA',
      specs: [
        'Automated Terraform / OpenTofu Landing Zones',
        'Direct Connect / ExpressRoute hybrid transit',
        'Zero-Trust IAM & Multi-Account Isolation',
        'Continuous FinOps Cost Guardrails',
      ],
    },
    {
      id: 'data',
      title: '02. Enterprise Data & Vectors',
      subtitle: 'Knowledge Pipelines & Vector Indexing',
      category: 'Vector DBs & Structured Repositories',
      icon: Database,
      color: 'from-cyan-500 to-teal-600',
      badge: 'Sub-second Hybrid Search',
      metrics: 'Dense + Sparse BM25',
      specs: [
        'Hierarchical document chunking & metadata tagging',
        'pgvector, Pinecone & OpenSearch vector stores',
        'Zero-training private data boundary',
        'Automated real-time ETL & sync webhooks',
      ],
    },
    {
      id: 'ai',
      title: '03. GenAI & AI Agents',
      subtitle: 'Foundation Models & Agentic Workflows',
      category: 'Bedrock • Azure AI • Vertex AI',
      icon: Sparkles,
      color: 'from-violet-500 to-purple-600',
      badge: 'Guardrailed & Private',
      metrics: 'Hallucination Defense',
      specs: [
        'Enterprise RAG with cross-encoder reranking',
        'Autonomous multi-agent tool execution (SRE/ITSM)',
        'Guardrails AI prompt injection & PII filtering',
        'Token latency & cost telemetry tracking',
      ],
    },
    {
      id: 'apps',
      title: '04. Platform & Microservices',
      subtitle: 'Containerized Delivery & Kubernetes',
      category: 'EKS • AKS • GKE • GitOps',
      icon: Layers,
      color: 'from-amber-500 to-orange-600',
      badge: 'GitOps Continuous Delivery',
      metrics: 'Zero-Downtime Releases',
      specs: [
        'Production Kubernetes clusters (EKS/AKS/GKE)',
        'Automated ArgoCD & GitHub Actions pipelines',
        'OpenTelemetry distributed tracing & APM',
        'Internal Developer Platform (IDP) golden paths',
      ],
    },
    {
      id: 'business',
      title: '05. Measurable Business Value',
      subtitle: 'Cost Efficiency, Speed & Scalability',
      category: 'Enterprise Transformation Outcomes',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Verifiable Impact',
      metrics: '15-35% FinOps ROI',
      specs: [
        'Drastic reduction in infrastructure operational overhead',
        'Accelerated feature time-to-market and release velocity',
        'Elimination of legacy technical debt and single points of failure',
        'Secure institutionalization of AI capabilities across teams',
      ],
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % architectureNodes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, architectureNodes.length]);

  const activeNode = architectureNodes[activeNodeIndex];

  return (
    <div 
      className="relative rounded-sm bg-[#101012] border border-white/10 p-5 sm:p-7 shadow-2xl shadow-black/90 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-white">
            Architecture Pipeline Blueprint
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
          <span className="text-blue-400 font-bold uppercase tracking-wider">Cloud → Data → AI → Platform → Value</span>
        </div>
      </div>

      {/* Horizontal Flow Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {architectureNodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = index === activeNodeIndex;
          return (
            <button
              key={node.id}
              onClick={() => {
                setActiveNodeIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`p-3 rounded-sm border text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                isActive
                  ? 'bg-[#18181B] border-blue-500 text-white shadow-lg shadow-blue-500/10'
                  : 'bg-[#0A0A0B] border-white/10 hover:bg-[#141416] hover:border-white/20'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              )}
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-sm ${isActive ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-300'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold">
                  0{index + 1}
                </span>
              </div>
              <div>
                <div className={`text-xs font-bold uppercase tracking-wider truncate ${isActive ? 'text-blue-400' : 'text-slate-200'}`}>
                  {node.title.split('. ')[1]}
                </div>
                <div className="text-[10px] text-slate-400 font-mono truncate">
                  {node.badge}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Layer Deep Dive Card */}
      <div className="bg-[#0A0A0B] rounded-sm border border-white/10 p-5 sm:p-6 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400 font-bold">
                {activeNode.category}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-slate-300 font-mono">
                {activeNode.metrics}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-white">
              {activeNode.title}: {activeNode.subtitle}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Layer 0{activeNodeIndex + 1} / 05
            </div>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
          {activeNode.specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-2.5 rounded-sm bg-[#121214] border border-white/5 text-xs text-slate-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{spec}</span>
            </div>
          ))}
        </div>

        {/* Live Packet Flow Status Indicator */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-wider text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
            <span>Strict Zero-Trust • Multi-Region • FinOps Governed</span>
          </div>
          <div className="text-blue-400 font-bold">
            AWS • Azure • Google Cloud
          </div>
        </div>
      </div>
    </div>
  );
};
