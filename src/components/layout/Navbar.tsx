import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Cloud, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PageRoute } from '../../types';
import { DevyaiLogo } from '../common/DevyaiLogo';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenConsultation,
  onOpenAssessment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80'
          : 'bg-[#0A0A0B]/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
          >
            <DevyaiLogo variant="horizontal" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-home-btn"
              onClick={() => handleLinkClick('home')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-colors ${
                currentRoute === 'home'
                  ? 'text-blue-400 bg-white/5 border border-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-dropdown-btn"
                onClick={() => handleLinkClick('services')}
                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] rounded-sm flex items-center gap-1.5 transition-colors ${
                  ['services', 'cloud-transformation', 'ai-genai', 'platform-engineering'].includes(currentRoute)
                    ? 'text-blue-400 bg-white/5 border border-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in-50 duration-200">
                  <div className="bg-[#101012] border border-white/15 rounded-md p-2 shadow-2xl shadow-black space-y-1">
                    <button
                      onClick={() => handleLinkClick('services')}
                      className="w-full text-left px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-400 flex items-center justify-between border-b border-white/10 mb-1"
                    >
                      <span>Overview: All Practices</span>
                      <ArrowRight className="w-3 h-3 text-blue-500" />
                    </button>
                    
                    <button
                      onClick={() => handleLinkClick('cloud-transformation')}
                      className="w-full text-left p-2.5 rounded hover:bg-white/5 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded bg-blue-600/15 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Cloud className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-blue-400 uppercase tracking-wider">
                          Cloud Transformation
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          AWS, Azure, GCP migration & FinOps
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('ai-genai')}
                      className="w-full text-left p-2.5 rounded hover:bg-white/5 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded bg-blue-600/15 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-blue-400 uppercase tracking-wider">
                          AI & Generative AI
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          RAG systems, AI agents & Bedrock
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('platform-engineering')}
                      className="w-full text-left p-2.5 rounded hover:bg-white/5 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded bg-blue-600/15 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-blue-400 uppercase tracking-wider">
                          Platform Engineering
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          Kubernetes, Terraform IaC & GitOps
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-solutions-btn"
              onClick={() => handleLinkClick('solutions')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-colors ${
                currentRoute === 'solutions'
                  ? 'text-blue-400 bg-white/5 border border-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Solutions
            </button>

            <button
              id="nav-about-btn"
              onClick={() => handleLinkClick('about')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-colors ${
                currentRoute === 'about'
                  ? 'text-blue-400 bg-white/5 border border-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </button>

            <button
              id="nav-contact-btn"
              onClick={() => handleLinkClick('contact')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-colors ${
                currentRoute === 'contact'
                  ? 'text-blue-400 bg-white/5 border border-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-assessment-btn"
              onClick={onOpenAssessment}
              className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white px-3.5 py-2.5 rounded-sm border border-white/15 hover:border-blue-500/50 bg-[#121214] transition-all flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              <span>Assessment</span>
            </button>

            <button
              id="nav-book-consultation-btn"
              onClick={onOpenConsultation}
              className="text-xs font-black uppercase tracking-widest text-black bg-white hover:bg-blue-600 hover:text-white px-4 py-2.5 rounded-sm transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-bold uppercase tracking-wider text-black bg-white px-3 py-1.5 rounded-sm flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Consult</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0B] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <button
              onClick={() => handleLinkClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider ${
                currentRoute === 'home' ? 'bg-white/5 text-blue-400 border border-white/10' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Home
            </button>
            
            <div className="py-2 border-y border-white/10 my-1 space-y-1">
              <button
                onClick={() => handleLinkClick('services')}
                className={`w-full text-left px-3 py-2 text-xs uppercase tracking-wider font-bold ${
                  currentRoute === 'services' ? 'text-blue-400' : 'text-slate-400'
                }`}
              >
                Services Overview
              </button>
              <button
                onClick={() => handleLinkClick('cloud-transformation')}
                className="w-full text-left px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold text-slate-300 hover:bg-white/5 flex items-center gap-2"
              >
                <Cloud className="w-4 h-4 text-blue-500" />
                <span>Cloud Transformation</span>
              </button>
              <button
                onClick={() => handleLinkClick('ai-genai')}
                className="w-full text-left px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold text-slate-300 hover:bg-white/5 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>AI & Generative AI</span>
              </button>
              <button
                onClick={() => handleLinkClick('platform-engineering')}
                className="w-full text-left px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold text-slate-300 hover:bg-white/5 flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Platform Engineering</span>
              </button>
            </div>

            <button
              onClick={() => handleLinkClick('solutions')}
              className={`w-full text-left px-3 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider ${
                currentRoute === 'solutions' ? 'bg-white/5 text-blue-400 border border-white/10' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Solutions & Architectures
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider ${
                currentRoute === 'about' ? 'bg-white/5 text-blue-400 border border-white/10' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider ${
                currentRoute === 'contact' ? 'bg-white/5 text-blue-400 border border-white/10' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-center text-slate-300 rounded-sm border border-white/15 bg-[#121214] flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Free Architecture Assessment</span>
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 text-xs font-black uppercase tracking-widest text-center text-black rounded-sm bg-white hover:bg-blue-600 hover:text-white flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Architecture Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
