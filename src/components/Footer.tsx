import React, { useState } from 'react';
import { MessageSquare, Sparkles, ArrowUp, X, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onBookDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookDemo }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#0B1220] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & One-sentence Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-[#16A34A] text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 fill-current" />
                </div>
                <Sparkles className="w-3 h-3 text-amber-300 absolute -top-1 -right-1" />
              </div>
              <span className="font-extrabold text-base text-[#111827] dark:text-white">
                WhatsApp AI Assistant
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 max-w-md leading-relaxed">
              An AI assistant designed for small and medium-sized service businesses in India to automate customer conversations, quotations, payment reminders, and follow-ups directly on WhatsApp.
            </p>

            <div className="text-xs text-slate-500 pt-1">
              Contact / Support: <span className="font-mono text-slate-700 dark:text-slate-300">support@whatsappaiassistant.in</span> <span className="text-[10px] text-slate-400">(Configurable placeholder)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-[#16A34A] transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#16A34A] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#who-its-for" className="hover:text-[#16A34A] transition-colors">Who It's For</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#16A34A] transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#16A34A] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Actions & Policy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white mb-3">
              Get Started
            </h4>
            <p className="text-xs text-[#6B7280] dark:text-slate-400 mb-3">
              Start your 7-day complimentary trial or preview a tailored walkthrough.
            </p>
            <button
              onClick={onBookDemo}
              className="w-full py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#16A34A] hover:bg-[#15803D] transition-colors cursor-pointer"
            >
              Book a Free Demo
            </button>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-[11px]">
              <div>
                <button
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-[#16A34A] text-slate-500 dark:text-slate-400 underline cursor-pointer"
                >
                  Privacy Policy (Preview)
                </button>
              </div>
              <div>
                <button
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-[#16A34A] text-slate-500 dark:text-slate-400 underline cursor-pointer"
                >
                  Terms of Service (Preview)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Meta Notice */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-500 space-y-3">
          <p className="leading-relaxed">
            WhatsApp is a registered trademark of Meta Platforms, Inc. WhatsApp AI Assistant is an independent SaaS solution designed for Indian service entrepreneurs using the official WhatsApp Business Cloud API.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div>
              © {new Date().getFullYear()} WhatsApp AI Assistant. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-[#111827] dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Sheet Modal to ensure no dead links */}
      {legalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setLegalModal(null)}
        >
          <div 
            className="w-full max-w-lg bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-base text-[#111827] dark:text-white flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#16A34A]" />
                <span>{legalModal === 'privacy' ? 'Privacy Policy Policy Outline' : 'Terms of Service Outline'}</span>
              </h3>
              <button 
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
              <p>
                <strong>Notice for Business Deployments:</strong> This document represents a standard policy baseline for Indian SMB service deployments utilizing WhatsApp Business Cloud APIs.
              </p>
              {legalModal === 'privacy' ? (
                <>
                  <p>1. <strong>Customer Data Protection:</strong> Customer message data is processed strictly for automated reply generation and quotation rendering. No customer contact details are sold or shared with unauthorized third parties.</p>
                  <p>2. <strong>Encryption:</strong> WhatsApp conversations remain encrypted under WhatsApp Business infrastructure standards.</p>
                  <p>3. <strong>Data Retention:</strong> Quotation and transaction logs are stored according to your business account data retention preferences.</p>
                </>
              ) : (
                <>
                  <p>1. <strong>Service Scope:</strong> WhatsApp AI Assistant delivers administrative assistance and message drafting. Final quotations and service agreements remain between you and your client.</p>
                  <p>2. <strong>Billing & Cancellation:</strong> Monthly subscriptions may be cancelled at any time prior to the next billing cycle with no lock-in penalty.</p>
                  <p>3. <strong>Acceptable Use:</strong> Automated messaging must comply with WhatsApp Business policies and local telecommunications guidelines.</p>
                </>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
