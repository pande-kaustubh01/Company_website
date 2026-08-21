import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Layers,
  Cloud
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'General Architecture Review',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    company: '',
    jobTitle: '',
    topic: defaultTopic,
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '14:00 - 14:30',
    timezone: 'Asia/Kolkata (IST)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [useCalendlyDirect, setUseCalendlyDirect] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const timeSlots = [
    '09:30 - 10:00',
    '11:00 - 11:30',
    '14:00 - 14:30',
    '16:30 - 17:00',
    '19:00 - 19:30',
    '20:30 - 21:00',
  ];

  const timezones = [
    'Asia/Kolkata (IST / UTC+5:30)',
    'America/New_York (EST / UTC-5)',
    'America/Los_Angeles (PST / UTC-8)',
    'Europe/London (GMT / UTC+0)',
    'Europe/Frankfurt (CET / UTC+1)',
    'Asia/Singapore (SGT / UTC+8)',
    'Asia/Dubai (GST / UTC+4)',
    'Australia/Sydney (AEST / UTC+10)',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-[#101012] border border-white/15 rounded-sm shadow-2xl shadow-black/90 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#0A0A0B]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-blue-600/15 text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-2 border border-blue-500/30">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Direct Consultation</span>
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-tight">
              Book Architecture Consultation
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Connect directly with our Principal Enterprise Architect to evaluate your cloud, AI, or platform initiatives.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 bg-[#0A0A0B]">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-sm bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
                <CheckCircle2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-black uppercase text-white tracking-wide">
                Consultation Request Received
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. We have logged your request for <strong className="text-blue-400">{formData.topic}</strong> on <span className="text-white">{formData.date}</span> at <span className="text-white">{formData.timeSlot} ({formData.timezone})</span>.
              </p>
              <div className="bg-[#121214] p-4 rounded-sm border border-white/10 text-xs text-slate-300 max-w-md mx-auto text-left space-y-2">
                <div className="font-bold text-white uppercase tracking-[0.2em] font-mono text-[10px]">What happens next:</div>
                <div>1. A calendar invitation with Google Meet / Teams link will be dispatched to <span className="text-blue-400 font-mono">{formData.businessEmail}</span>.</div>
                <div>2. Our Principal Architect will review your company domain and prepare high-level reference blueprints prior to the call.</div>
                <div>3. No sales pressure — strictly technical architecture discovery and high-ROI roadmapping.</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : useCalendlyDirect ? (
            /* Calendly direct embed / link tab */
            <div className="space-y-4 py-4 text-center">
              <div className="p-4 rounded-sm bg-[#121214] border border-white/10 text-left space-y-3">
                <div className="text-sm font-bold uppercase text-white">
                  Direct Real-Time Calendar Integration
                </div>
                <p className="text-xs text-slate-400">
                  Select your preferred slot directly on our live calendar. You can also customize the booking link via your company settings.
                </p>
                <div className="p-3 bg-[#0A0A0B] rounded-sm border border-white/10 font-mono text-xs text-blue-400 break-all flex items-center justify-between">
                  <span>{siteConfig.contact.calendlyUrl}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-sans">Configurable</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`#${siteConfig.contact.calendlyUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <span>Open Calendly in New Tab</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setUseCalendlyDirect(false)}
                  className="py-3 px-4 rounded-sm border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-colors"
                >
                  Switch to Standard Booking Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Work / Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Enterprises"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Job Title / Role
                  </label>
                  <input
                    type="text"
                    placeholder="CTO / VP Engineering / Head of Cloud"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Primary Area of Focus *
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Cloud Transformation & VMware Modernization">Cloud Transformation & VMware Modernization</option>
                    <option value="Generative AI, RAG & AI Agents">Generative AI, RAG & AI Agents</option>
                    <option value="Platform Engineering & Kubernetes">Platform Engineering & Kubernetes</option>
                    <option value="Corporate Technology Training">Corporate Technology Training</option>
                    <option value="Technology Staff Augmentation">Technology Staff Augmentation</option>
                    <option value="Cloud Cost & FinOps Optimization">Cloud Cost & FinOps Optimization</option>
                    <option value="Multi-Cloud Enterprise Architecture">Multi-Cloud Enterprise Architecture</option>
                    <option value="General Architecture Review">General Architecture Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Your Timezone *
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Preferred Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Brief Technical Context / Current Constraints (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Currently planning migration of 40 VMs from on-prem VMware to AWS with Postgres RDS; exploring RAG on AWS Bedrock."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-[#121214] border border-white/10 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setUseCalendlyDirect(true)}
                  className="text-xs text-slate-400 hover:text-white underline transition-colors"
                >
                  Or use direct Calendly calendar link
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white rounded-sm hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Confirm Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
