import React from 'react';
import { 
  Cloud, 
  Sparkles, 
  Layers, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  ArrowUpRight, 
  Cpu, 
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PageRoute } from '../../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
  onOpenAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenAssessment,
}) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/10 text-slate-400 text-sm">
      {/* Top Banner / Value Anchor */}
      <div className="border-b border-white/10 bg-[#121214] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-black text-lg mb-1 flex items-center gap-2 uppercase tracking-tight">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span>{siteConfig.tagline}</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl font-normal">
              Pragmatic enterprise cloud modernization, production Generative AI, and platform engineering across AWS, Azure, and Google Cloud.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
            <button
              onClick={onOpenAssessment}
              className="px-4 py-2.5 rounded-sm border border-white/20 hover:border-blue-500 bg-[#0A0A0B] text-slate-200 font-bold uppercase tracking-wider text-xs transition-colors"
            >
              Diagnostic Tool
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-blue-600 flex items-center justify-center text-white font-black">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-tight text-white">
                {siteConfig.companyName}
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A boutique enterprise architecture and technology engineering consultancy. We partner with CTOs, CIOs, and engineering leaders to deliver measurable business outcomes.
            </p>

            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-blue-400 font-mono font-bold mb-2">
                Primary Client Delivery Hubs
              </div>
              <div className="flex flex-wrap gap-1.5">
                {siteConfig.contact.regions.map((region) => (
                  <span
                    key={region}
                    className="text-xs px-2.5 py-1 rounded-sm bg-[#121214] border border-white/10 text-slate-300 font-mono"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Practices & Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Core Practices
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('cloud-transformation')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <Cloud className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>Cloud Transformation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai-genai')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>AI & Generative AI</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('platform-engineering')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Platform Engineering</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-blue-400 transition-colors text-xs text-slate-400 uppercase tracking-wider hover:underline"
                >
                  All Services Matrix →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Architectures */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  VMware → AWS Migration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Enterprise GenAI & RAG
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  AI-Powered SRE / AIOps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Cloud Cost & FinOps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-blue-400 transition-colors text-xs text-slate-400 uppercase tracking-wider hover:underline"
                >
                  All Reference Blueprints →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Engagement */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-blue-400 transition-colors"
                >
                  About & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact & Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAssessment}
                  className="hover:text-blue-400 transition-colors text-blue-400 font-medium"
                >
                  Diagnostic Assessment
                </button>
              </li>
              <li className="pt-2">
                <div className="text-xs text-slate-400 font-mono">
                  {siteConfig.contact.email}
                </div>
              </li>
              <li>
                <a
                  href={`#${siteConfig.contact.linkedInUrl}`}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Legal and Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 {siteConfig.companyName}. All rights reserved. Technology Consulting & Architecture.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-slate-300 transition-colors uppercase tracking-wider"
            >
              Privacy
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-slate-300 transition-colors uppercase tracking-wider"
            >
              Terms
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-slate-300 transition-colors uppercase tracking-wider"
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
