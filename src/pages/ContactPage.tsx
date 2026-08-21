import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Clock,
  Sparkles,
  GraduationCap,
  Users,
  Layers,
  Cloud
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ConsultationFormData, PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onBookConsultation: (topic?: string) => void;
  onOpenAssessment: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onBookConsultation,
  onOpenAssessment,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    businessEmail: '',
    company: '',
    jobTitle: '',
    country: 'United States',
    areaOfInterest: 'Cloud Transformation & VMware Modernization',
    approximateProjectSize: 'Advisory / Architecture Assessment ($10k - $25k)',
    message: '',
    trainingTopic: 'Generative AI & Enterprise RAG',
    participantCount: '10 – 25 Participants',
    trainingFormat: 'Live Instructor-Led Virtual',
    requiredSkills: 'Cloud / DevOps / AI Engineer',
    resourceCount: '1 – 2 Senior Engineers',
    engagementDuration: '3 – 6 Months',
    preferredStartDate: 'Within 2–4 Weeks',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const countries = [
    'United States',
    'India',
    'United Kingdom',
    'Australia',
    'Singapore',
    'United Arab Emirates',
    'Germany',
    'Canada',
    'Other International',
  ];

  const areasOfInterest = [
    'Cloud Transformation & VMware Modernization',
    'Generative AI & Production RAG',
    'Platform Engineering & Kubernetes',
    'Corporate Technology Training',
    'Technology Staff Augmentation',
    'Cloud Cost & FinOps Optimization',
    'Enterprise Architecture Review',
    'Other Specialized Consulting',
  ];

  const projectSizes = [
    'Architecture Review / Assessment ($10k - $25k / ₹8L - ₹20L)',
    'Focused Migration, Training or RAG MVP ($25k - $75k / ₹20L - ₹60L)',
    'Enterprise Cloud / Platform Overhaul ($75k - $200k / ₹60L - ₹1.5Cr)',
    'Multi-Year Enterprise Transformation ($200k+ / ₹1.5Cr+)',
    'Ongoing Architecture Advisory / Staffing Retainer',
  ];

  const isTraining = formData.areaOfInterest === 'Corporate Technology Training';
  const isStaffing = formData.areaOfInterest === 'Technology Staff Augmentation';

  return (
    <div className="pt-28 pb-0 bg-[#0A0A0B]">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0A0A0B] border-b border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-600/15 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em]">
            <Mail className="w-3.5 h-3.5 text-blue-500" />
            <span>Direct Architecture & Services Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Solve Your Technology Challenge
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Whether you're planning a cloud migration, adopting Generative AI, upskilling your engineering workforce, or scaling delivery with senior architects, let's start with a conversation.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#121214] border border-white/10 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                  Request a Practice Consultation
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 font-normal">
                  Fill out the form below and our Principal Architect will respond within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-sm bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">
                    Consultation Request Dispatched
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We have received your inquiry regarding <strong className="text-blue-400">{formData.areaOfInterest}</strong> for <strong className="text-white">{formData.company}</strong>.
                  </p>
                  <div className="bg-[#0A0A0B] p-4 rounded-sm border border-white/10 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1 font-mono">
                    <div className="font-bold text-slate-200 uppercase tracking-wider">What to expect next:</div>
                    <div>1. An introductory confirmation has been logged for <span className="text-blue-400">{formData.businessEmail}</span>.</div>
                    <div>2. Our Principal Architect will review your technical requirements and arrange a discovery session.</div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-white/10 rounded-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-white/10 rounded-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Company & Job Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Global Technologies"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-white/10 rounded-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                        Job Title / Role
                      </label>
                      <input
                        type="text"
                        placeholder="CTO / VP Engineering / Tech Lead"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-white/10 rounded-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Country & Area of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                        Country / Location *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500 transition-colors font-sans"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                        Practice Area of Interest *
                      </label>
                      <select
                        value={formData.areaOfInterest}
                        onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-blue-500/50 rounded-sm text-white focus:outline-none focus:border-blue-500 transition-colors font-sans"
                      >
                        {areasOfInterest.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* CONDITIONAL SECTION: Corporate Training Fields */}
                  {isTraining && (
                    <div className="p-4 rounded-sm bg-blue-600/10 border border-blue-500/30 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-blue-400">
                        <GraduationCap className="w-4 h-4" />
                        <span>Corporate Training Scope Details</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Training Topic of Focus
                          </label>
                          <select
                            value={formData.trainingTopic}
                            onChange={(e) => setFormData({ ...formData, trainingTopic: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                          >
                            <option value="Generative AI & Enterprise RAG">Generative AI & Enterprise RAG</option>
                            <option value="AWS Solutions Architecture Mastery">AWS Solutions Architecture Mastery</option>
                            <option value="Azure Cloud & Landing Zones">Azure Cloud & Landing Zones</option>
                            <option value="DevOps, Terraform & Kubernetes">DevOps, Terraform & Kubernetes</option>
                            <option value="Enterprise Architecture & System Design">Enterprise Architecture & System Design</option>
                            <option value="Cloud FinOps & Cost Engineering">Cloud FinOps & Cost Engineering</option>
                            <option value="Custom Blended Curriculum">Custom Blended Curriculum</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Expected Participants
                          </label>
                          <select
                            value={formData.participantCount}
                            onChange={(e) => setFormData({ ...formData, participantCount: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                          >
                            <option value="5 – 10 Engineers">5 – 10 Engineers</option>
                            <option value="10 – 25 Participants">10 – 25 Participants</option>
                            <option value="25 – 50 Participants">25 – 50 Participants</option>
                            <option value="50+ Enterprise Cohort">50+ Enterprise Cohort</option>
                            <option value="1-on-1 Architect Coaching">1-on-1 Architect Coaching</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Delivery Format
                          </label>
                          <select
                            value={formData.trainingFormat}
                            onChange={(e) => setFormData({ ...formData, trainingFormat: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                          >
                            <option value="Live Instructor-Led Virtual">Live Instructor-Led Virtual</option>
                            <option value="On-Site Intensive Workshop">On-Site Intensive Workshop</option>
                            <option value="Custom Multi-Week Bootcamp">Custom Multi-Week Bootcamp</option>
                            <option value="Executive Masterclass">Executive Masterclass</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Target Schedule / Date
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Next Month / Q3 2026"
                            value={formData.preferredStartDate}
                            onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CONDITIONAL SECTION: Staff Augmentation Fields */}
                  {isStaffing && (
                    <div className="p-4 rounded-sm bg-blue-600/10 border border-blue-500/30 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-blue-400">
                        <Users className="w-4 h-4" />
                        <span>Staff Augmentation Resource Requirements</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Required Specialist Discipline
                          </label>
                          <select
                            value={formData.requiredSkills}
                            onChange={(e) => setFormData({ ...formData, requiredSkills: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                          >
                            <option value="Cloud Architect (AWS/Azure/GCP)">Cloud Architect (AWS/Azure/GCP)</option>
                            <option value="DevOps / Platform Engineer (K8s/IaC)">DevOps / Platform Engineer (K8s/IaC)</option>
                            <option value="Generative AI / RAG Engineer">Generative AI / RAG Engineer</option>
                            <option value="Enterprise / Solutions Architect">Enterprise / Solutions Architect</option>
                            <option value="Fractional Chief Architect">Fractional Chief Architect</option>
                            <option value="Complete Migration Pod (3-5 Engineers)">Complete Migration Pod (3-5 Engineers)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Number of Resources
                          </label>
                          <select
                            value={formData.resourceCount}
                            onChange={(e) => setFormData({ ...formData, resourceCount: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                          >
                            <option value="1 Senior Specialist">1 Senior Specialist</option>
                            <option value="2 – 3 Dedicated Engineers">2 – 3 Dedicated Engineers</option>
                            <option value="Delivery Squad (4 – 6 Engineers)">Delivery Squad (4 – 6 Engineers)</option>
                            <option value="Fractional (10-20 hrs/week)">Fractional (10-20 hrs/week)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Expected Duration
                          </label>
                          <select
                            value={formData.engagementDuration}
                            onChange={(e) => setFormData({ ...formData, engagementDuration: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500"
                          >
                            <option value="1 – 3 Months (Surge / MVP)">1 – 3 Months (Surge / MVP)</option>
                            <option value="3 – 6 Months">3 – 6 Months</option>
                            <option value="6 – 12 Months">6 – 12 Months</option>
                            <option value="Ongoing Retainer">Ongoing Retainer</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-300 mb-1 font-bold">
                            Target Start Date
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Immediate / Next Sprint"
                            value={formData.preferredStartDate}
                            onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-[#0A0A0B] border border-white/10 rounded-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Size / Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                      Approximate Project Size / Scope
                    </label>
                    <select
                      value={formData.approximateProjectSize}
                      onChange={(e) => setFormData({ ...formData, approximateProjectSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-white/10 rounded-sm text-white focus:outline-none focus:border-blue-500 transition-colors font-sans"
                    >
                      {projectSizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-bold tracking-wider">
                      Project Context & Technical Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe your current infrastructure, team goals, challenges, timelines, or specific technologies (AWS, Azure, Bedrock, Kubernetes, etc.) you are considering..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0B] border border-white/10 rounded-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 text-center flex items-center justify-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-blue-500" />
                    <span>Handled under strict professional NDA confidentiality.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Calendly Booking & Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct 30-Min Consultation Box */}
            <div className="p-8 rounded-sm bg-[#121214] border border-blue-500/30 space-y-6 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-600/15 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <span>Instant Calendar Booking</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  Book a Free 30-Minute Architecture Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Skip the form and directly schedule a 30-minute 1-on-1 technical discovery session with our Principal Architect.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onBookConsultation('Direct Contact Page Scheduling')}
                  className="w-full py-3.5 px-5 rounded-sm bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Interactive Scheduler</span>
                </button>

                <div className="p-3 bg-[#0A0A0B] rounded-sm border border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Calendly URL:</span>
                  <span className="text-blue-400 font-semibold">{siteConfig.contact.calendlyUrl}</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="p-8 rounded-sm bg-[#121214] border border-white/10 space-y-4">
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                Direct Channels
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-sm bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Email Inquiries</div>
                    <div className="font-mono text-slate-200">{siteConfig.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-sm bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-blue-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Direct Line</div>
                    <div className="font-mono text-slate-200">{siteConfig.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-sm bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-blue-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Response SLA</div>
                    <div className="text-slate-200 font-mono">&lt; 24 Business Hours</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
