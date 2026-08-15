import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CloudTransformationPage } from './pages/CloudTransformationPage';
import { AIGenAIPage } from './pages/AIGenAIPage';
import { PlatformEngineeringPage } from './pages/PlatformEngineeringPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationModal } from './components/common/ConsultationModal';
import { AssessmentModal } from './components/common/AssessmentModal';
import { ArchitectureDiagramModal } from './components/solutions/ArchitectureDiagramModal';
import { PageRoute, ReferenceArchitecture } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('General Architecture Review');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedArchitecture, setSelectedArchitecture] = useState<ReferenceArchitecture | null>(null);

  // Sync route with URL hash on load and hashchange (works seamlessly on GitHub Pages)
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      const validRoutes: PageRoute[] = [
        'home',
        'services',
        'cloud-transformation',
        'ai-genai',
        'platform-engineering',
        'solutions',
        'about',
        'contact',
        'assessment',
      ];

      if (hash === 'assessment') {
        setIsAssessmentOpen(true);
      } else if (validRoutes.includes(hash as PageRoute)) {
        setCurrentRoute(hash as PageRoute);
      } else if (!hash) {
        setCurrentRoute('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    if (route === 'assessment') {
      setIsAssessmentOpen(true);
      return;
    }
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookConsultation = (topic?: string) => {
    setConsultationTopic(topic || 'General Architecture Review');
    setIsConsultationOpen(true);
  };

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
          />
        );
      case 'cloud-transformation':
        return (
          <CloudTransformationPage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
          />
        );
      case 'ai-genai':
        return (
          <AIGenAIPage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
          />
        );
      case 'platform-engineering':
        return (
          <PlatformEngineeringPage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
          />
        );
      case 'solutions':
        return (
          <SolutionsPage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
            onSelectArchitecture={(arch) => setSelectedArchitecture(arch)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
            onSelectArchitecture={(arch) => setSelectedArchitecture(arch)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Main Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleBookConsultation('General Architecture Consultation')}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleBookConsultation('General Consultation')}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      {/* Modals & Dialogs */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultTopic={consultationTopic}
      />

      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onBookConsultation={() => {
          setIsAssessmentOpen(false);
          handleBookConsultation('Architecture Assessment Follow-up');
        }}
      />

      <ArchitectureDiagramModal
        architecture={selectedArchitecture}
        onClose={() => setSelectedArchitecture(null)}
        onBookConsultation={(topic) => handleBookConsultation(topic)}
      />
    </div>
  );
}
