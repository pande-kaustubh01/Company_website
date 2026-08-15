import React from 'react';
import { 
  Cloud, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Server, 
  Workflow, 
  TrendingDown, 
  Lock, 
  RefreshCw,
  Layers,
  Database
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';
import { PageRoute } from '../types';

interface CloudTransformationPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const CloudTransformationPage: React.FC<CloudTransformationPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const pillars = [
    {
      icon: RefreshCw,
      title: 'Enterprise VMware Modernization & Migration',
      desc: 'Structured, automated migration factories transitioning on-premises VMware virtual machines into resilient AWS EC2, Azure VMs, or containerized Kubernetes workloads with minimal downtime.',
      capabilities: [
        'Automated discovery & dependency mapping',
        'Block-level continuous replication via AWS MGN / Azure Migrate',
        'Wave-based migration planning and isolated cutover testing',
        'Post-migration OS driver patching and Systems Manager automation',
      ],
    },
    {
      icon: Layers,
      title: 'Multi-Account Landing Zones & Governance',
      desc: 'Architecting secure, compliant multi-account foundations (AWS Control Tower, Azure Landing Zones) using modular Terraform and zero-trust IAM baselines.',
      capabilities: [
        'Automated organizational units & service control policies (SCPs)',
        'Centralized Transit Gateway / Virtual WAN hybrid networking',
        'Centralized logging, SIEM, and CloudTrail / GuardDuty baselines',
        'Identity Federation (SSO, Okta, Azure AD / Entra ID integration)',
      ],
    },
    {
      icon: TrendingDown,
      title: 'Cloud Cost Optimization & FinOps',
      desc: 'Transforming unchecked cloud bills into high-efficiency unit economics with continuous rightsizing, idle resource purging, and commitment modeling.',
      capabilities: [
        'Compute & memory rightsizing (e.g. Graviton / Ampere migration)',
        'Storage lifecycle tiering (GP2 to GP3, S3 Glacier Instant Retrieval)',
        'Orphaned resource detection and automated non-production schedulers',
        'Blended 1-yr / 3-yr Savings Plans & Reserved Instances modeling',
      ],
    },
    {
      icon: Lock,
      title: 'High-Availability & Multi-Region Disaster Recovery',
      desc: 'Designing RPO/RTO-critical disaster recovery topologies, automated failovers, and backup lifecycles to ensure business continuity.',
      capabilities: [
        'Pilot light, warm standby, and active-active multi-region architectures',
        'Cross-region database replication (Aurora Global DB / Azure Cosmos)',
        'Automated DNS failover routing with Route 53 / Azure Traffic Manager',
        'Automated immutable backup vault policies & ransomware protection',
      ],
    },
  ];

  const migrationFactoryPhases = [
    {
      step: '01',
      phase: 'Discovery & Assessment',
      duration: 'Week 1-3',
      desc: 'Automated telemetry scans of VMware vCenter, network flows, and database sizes to build migration waves.',
    },
    {
      step: '02',
      phase: 'Landing Zone Foundation',
      duration: 'Week 3-5',
      desc: 'Provisioning multi-account Terraform baselines, Direct Connect transit, and zero-trust IAM.',
    },
    {
      step: '03',
      phase: 'Replication & Wave Factory',
      duration: 'Week 6-12',
      desc: 'Background continuous block mirroring, isolated staging VPC validation, and automated rollback runbooks.',
    },
    {
      step: '04',
      phase: 'Cutover & FinOps Tuning',
      duration: 'Week 12+',
      desc: 'Scheduled DNS cutover, database delta sync, post-launch verification, and continuous cost optimization.',
    },
  ];

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Cloud className="w-3.5 h-3.5 text-blue-500" />
            <span>Practice • Cloud Transformation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Cloud Modernization & Migration
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Modernize, migrate, and optimize enterprise workloads across AWS, Microsoft Azure, and Google Cloud with factory-level precision and zero business disruption.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onBookConsultation('Cloud Transformation Practice')}
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
              <span>Evaluate Cloud Readiness</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core Transformation Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
            Engineering Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Core Cloud Modernization Pillars
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            From lift-and-shift to cloud-native refactoring, we design architectures that optimize for reliability, velocity, and unit economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
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
                      Core Engineering Capabilities:
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
                    onClick={() => onBookConsultation(`Cloud Transformation: ${pillar.title}`)}
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

      {/* Migration Factory Methodology */}
      <section className="py-20 bg-[#121214] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold">
              Repeatable Migration Factory
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Enterprise Workload Migration Methodology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Minimizing risk through structured wave planning, automated non-disruptive testing, and standardized post-cutover runbooks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationFactoryPhases.map((phase) => (
              <div
                key={phase.step}
                className="p-6 rounded-sm bg-[#0A0A0B] border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-blue-400">
                      {phase.step}
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded-sm bg-[#121214] border border-white/10">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-black uppercase tracking-wide text-white">
                    {phase.phase}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-blue-400">
                  ✓ Validated Stage Gate
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Planning an Enterprise Cloud Migration or FinOps Review?"
        subheadline="Talk with our Principal Cloud Architect to map out your migration waves, landing zones, and cost optimization targets."
        primaryButtonText="Book a Free 30-Minute Architecture Consultation"
        secondaryButtonText="View Reference Blueprints"
        secondaryRoute="solutions"
        onBookConsultation={() => onBookConsultation('Cloud Migration & FinOps Review')}
        onNavigate={onNavigate}
        onOpenAssessment={onOpenAssessment}
      />

    </div>
  );
};
