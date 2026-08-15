import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../../types';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryRoute?: PageRoute;
  onBookConsultation: () => void;
  onNavigate?: (route: PageRoute) => void;
  onOpenAssessment?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = "Have a Cloud, AI or Architecture Challenge?",
  subheadline = "Let's turn your complex technology goals into a practical, resilient, and high-ROI engineering roadmap.",
  primaryButtonText = "Book a Free 30-Minute Architecture Consultation",
  secondaryButtonText = "Request Diagnostic Assessment",
  secondaryRoute,
  onBookConsultation,
  onNavigate,
  onOpenAssessment,
}) => {
  return (
    <section className="relative py-24 bg-[#0A0A0B] overflow-hidden border-t border-white/10">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
          <Cpu className="w-3.5 h-3.5 text-blue-500" />
          <span>Direct Access to Principal Enterprise Architect</span>
        </div>

        {/* Headlines */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {subheadline}
          </p>
        </div>

        {/* Trust bullet points */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            100% Technical Discovery
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            Zero Sales Pressure
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            Multi-Cloud Neutral
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            Confidential NDA Standard
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>{primaryButtonText}</span>
          </button>

          {onOpenAssessment ? (
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-6 py-4 rounded-sm bg-[#121214] hover:bg-[#18181B] border border-white/10 hover:border-blue-500 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>{secondaryButtonText}</span>
            </button>
          ) : (
            secondaryRoute && onNavigate && (
              <button
                onClick={() => onNavigate(secondaryRoute)}
                className="w-full sm:w-auto px-6 py-4 rounded-sm bg-[#121214] hover:bg-[#18181B] border border-white/10 hover:border-blue-500 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>{secondaryButtonText}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            )
          )}
        </div>

      </div>
    </section>
  );
};
