import React from 'react';
import { 
  Layers, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  Terminal, 
  Zap, 
  Activity, 
  GitBranch, 
  Server
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';
import { PageRoute } from '../types';

interface PlatformEngineeringPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const PlatformEngineeringPage: React.FC<PlatformEngineeringPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const platformPillars = [
    {
      icon: Server,
      title: 'Managed Kubernetes (EKS / AKS / GKE)',
      desc: 'Architecting production-grade, highly available Kubernetes clusters configured with automated node autoscaling (Karpenter), multi-AZ ingress, network security policies, and service mesh.',
      capabilities: [
        'Production AWS EKS, Azure AKS, and Google GKE architectures',
        'Just-in-time node provisioning with Karpenter / Cluster Autoscaler',
        'Zero-trust Cilium / Calico network security policies & mTLS',
        'Multi-tenant namespace isolation, resource quotas, and limit ranges',
      ],
    },
    {
      icon: Terminal,
      title: 'Infrastructure as Code (Terraform / OpenTofu)',
      desc: 'Modular, version-controlled infrastructure engineering that guarantees immutable environments, eliminates configuration drift, and standardizes landing zones across clouds.',
      capabilities: [
        'Enterprise Terraform & OpenTofu modular module libraries',
        'Automated PR testing with Terratest, TFLint & Checkov',
        'State management locking with S3/DynamoDB and Azure Blob',
        'Policy-as-Code enforcement using OPA (Open Policy Agent)',
      ],
    },
    {
      icon: GitBranch,
      title: 'GitOps & Zero-Touch CI/CD Automation',
      desc: 'Automating software delivery from code commit to multi-region production deployment with zero manual intervention and instant rollback safety.',
      capabilities: [
        'Declarative GitOps deployments via ArgoCD & Flux',
        'GitHub Actions & GitLab CI reusable workflow pipelines',
        'Canary & blue-green deployment strategies with Argo Rollouts',
        'Automated ephemeral preview environments for pull requests',
      ],
    },
    {
      icon: Activity,
      title: 'Enterprise Observability & Distributed Tracing',
      desc: 'Unified telemetry platforms giving engineering teams sub-second visibility into microservices latency, error budgets, and distributed traces.',
      capabilities: [
        'OpenTelemetry vendor-neutral instrumentation standards',
        'Prometheus & Grafana metric dashboards with SLO/SLI tracking',
        'Centralized log aggregation with OpenSearch & Loki',
        'Automated SRE anomaly detection & alert noise deduplication',
      ],
    },
  ];

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Practice • Platform Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Platform Engineering & Cloud DevOps
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Build secure, scalable, and automated engineering platforms that empower product teams to ship software faster with built-in reliability and compliance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onBookConsultation('Platform Engineering Practice')}
              className="px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Platform Consultation</span>
            </button>
            <button
              onClick={onOpenAssessment}
              className="px-6 py-3.5 rounded-sm bg-[#121214] border border-white/10 hover:border-blue-500 text-slate-200 font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Evaluate DevOps Maturity</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
            Engineering Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Platform Engineering Foundations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Eliminating cognitive load for product developers by establishing self-service internal platforms and golden paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platformPillars.map((pillar, idx) => {
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
                      Core Engineering Scope:
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
                    onClick={() => onBookConsultation(`Platform Engineering: ${pillar.title}`)}
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

      {/* CTA */}
      <CTASection
        headline="Accelerate Your Engineering Team's Release Velocity"
        subheadline="Consult directly with our Principal Platform Architect to evaluate your Kubernetes posture, GitOps pipelines, and internal developer platform."
        primaryButtonText="Book a Free 30-Minute Architecture Consultation"
        secondaryButtonText="Explore All Practice Areas"
        secondaryRoute="services"
        onBookConsultation={() => onBookConsultation('Platform Engineering Roadmap')}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
