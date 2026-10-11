import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfter } from './components/BeforeAfter';
import { HowItWorks } from './components/HowItWorks';
import { HowItHelps } from './components/HowItHelps';
import { WhatsAppChatDemo } from './components/WhatsAppChatDemo';
import { Benefits } from './components/Benefits';
import { WhoItsFor } from './components/WhoItsFor';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { PdfModal, QuotationDetails } from './components/PdfModal';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('wa_ai_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  
  // PDF Preview State
  const [activeQuotation, setActiveQuotation] = useState<QuotationDetails | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('wa_ai_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('wa_ai_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenDemo = (planName?: string) => {
    setSelectedPlan(planName);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
    setSelectedPlan(undefined);
  };

  const handleOpenPdf = (quote: QuotationDetails) => {
    setActiveQuotation(quote);
    setIsPdfModalOpen(true);
  };

  const handleClosePdf = () => {
    setIsPdfModalOpen(false);
    setActiveQuotation(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1220] text-[#111827] dark:text-[#F9FAFB] transition-colors selection:bg-[#16A34A] selection:text-white flex flex-col pb-16 sm:pb-0">
      {/* 1. Header & Navigation */}
      <Navbar 
        darkMode={darkMode} 
        onToggleDarkMode={toggleDarkMode} 
        onBookDemo={() => handleOpenDemo()} 
      />

      <main className="flex-1">
        {/* 2. Hero Section with 2-Column Product Preview */}
        <Hero 
          onBookDemo={() => handleOpenDemo()} 
          onOpenPdf={handleOpenPdf} 
        />

        {/* 3. Before-and-After Comparison */}
        <BeforeAfter 
          onBookDemo={() => handleOpenDemo()} 
        />

        {/* 4. How It Works (3 Clear Steps) */}
        <HowItWorks 
          onBookDemo={() => handleOpenDemo()} 
        />

        {/* 5. Six Core Feature Cards */}
        <HowItHelps 
          onBookDemo={() => handleOpenDemo()} 
          onOpenPdf={handleOpenPdf} 
        />

        {/* 6. Interactive WhatsApp Demo */}
        <WhatsAppChatDemo 
          onBookDemo={() => handleOpenDemo()} 
          onOpenPdf={handleOpenPdf} 
        />

        {/* 7. Benefits and Dual-Input ROI Calculator */}
        <Benefits 
          onBookDemo={() => handleOpenDemo()} 
        />

        {/* 8. Who It Is For */}
        <WhoItsFor 
          onBookDemo={() => handleOpenDemo()} 
        />

        {/* 9. Simple Pricing Section */}
        <Pricing 
          onBookDemo={(plan) => handleOpenDemo(plan)} 
        />

        {/* 10. Frequently Asked Questions (10 items) */}
        <Faq 
          onBookDemo={() => handleOpenDemo()} 
        />

        {/* 11. Final Call To Action */}
        <FinalCTA 
          onBookDemo={() => handleOpenDemo()} 
        />
      </main>

      {/* 12. Footer with Legal Modals */}
      <Footer 
        onBookDemo={() => handleOpenDemo()} 
      />

      {/* Modals & Overlays */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemo} 
        defaultPlan={selectedPlan} 
      />

      <PdfModal 
        isOpen={isPdfModalOpen} 
        onClose={handleClosePdf} 
        quotation={activeQuotation} 
      />

      {/* Sticky Mobile Bottom Bar */}
      <StickyMobileBar 
        onBookDemo={() => handleOpenDemo()} 
        isModalOpen={isDemoModalOpen || isPdfModalOpen} 
      />
    </div>
  );
}
