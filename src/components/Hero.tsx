import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Copy, Check, FileText, Play, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { QuotationDetails } from './PdfModal';

interface HeroProps {
  onBookDemo: () => void;
  onOpenPdf: (quote: QuotationDetails) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemo, onOpenPdf }) => {
  const [copied, setCopied] = useState(false);

  const heroQuoteData: QuotationDetails = {
    quoteNumber: 'EST-2026-084',
    date: '11 Oct 2026',
    validUntil: '18 Oct 2026 (7 Days)',
    serviceTitle: 'Custom Responsive Website Design',
    clientName: 'Prospective Client',
    clientCity: 'Pan-India Delivery',
    items: [
      { description: '5-Page Responsive Business Website', quantity: 1, rate: 18000, amount: 18000 },
      { description: 'WhatsApp Chat Integration & Lead Form', quantity: 1, rate: 4000, amount: 4000 },
      { description: 'Search Engine & Google Maps Setup', quantity: 1, rate: 3000, amount: 3000 }
    ],
    subtotal: 25000,
    gstType: 'exclusive',
    gstRatePercent: 18,
    gstAmount: 4500,
    grandTotal: 29500,
    notes: [
      '50% advance deposit to commence development',
      'Delivery timeline: 10 working business days',
      'Includes 30 days complimentary post-launch support'
    ]
  };

  const handleCopyQuotation = () => {
    const textToCopy = `📄 *QUOTATION: Website Design*\nAmount: ₹25,000 (Base) + 18% GST (₹4,500) = *₹29,500*\nValidity: 7 days (Until 18 Oct 2026)\n• 5-Page Responsive Business Website\n• WhatsApp Chat & Lead Integration\n• Google Maps & SEO Setup\nTerms: 50% advance, balance upon delivery.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      {/* Refined subtle background wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-emerald-500/5 via-slate-50/50 to-transparent dark:from-emerald-950/20 dark:via-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
              <span>BUILT FOR INDIAN SMBS</span>
            </div>

            {/* Exact Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-[1.12]">
              Stop Losing Time on Daily Business Tasks
            </h1>

            {/* Exact Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B7280] dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Use AI on WhatsApp to reply to customers, create quotations, send reminders, and grow your business.
            </p>

            {/* 3 Concise Supporting Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center space-x-2 bg-slate-50 dark:bg-[#111827] p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>No new app to install</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-50 dark:bg-[#111827] p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Setup in ~15 minutes</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-50 dark:bg-[#111827] p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>For service businesses</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onBookDemo}
                className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#demo"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 hover:border-[#16A34A] hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all flex items-center justify-center space-x-2 shadow-2xs"
              >
                <Play className="w-4 h-4 fill-current text-[#16A34A]" />
                <span>Try Live Demo</span>
              </a>
            </div>

            {/* Social-proof claim */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center space-x-3 text-xs text-[#6B7280] dark:text-slate-400">
              <div className="flex items-center text-amber-400">
                {'★'.repeat(5)}
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-200">4.9/5 from 2,400+ business owners</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>100% inside WhatsApp</span>
            </div>
          </div>

          {/* Right Column: Realistic WhatsApp Conversation & Quotation Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              {/* WhatsApp bar */}
              <div className="bg-[#15803D] dark:bg-[#1F2937] px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] text-[#111827] font-bold text-xs flex items-center justify-center">
                    AI
                  </div>
                  <div>
                    <div className="font-bold text-xs tracking-tight flex items-center space-x-1">
                      <span>WhatsApp AI Assistant</span>
                      <span className="text-[10px] bg-[#25D366] text-[#111827] px-1 rounded-sm font-bold">PRO</span>
                    </div>
                    <div className="text-[10px] text-emerald-100 dark:text-slate-300">Online • Typically replies in 2s</div>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-emerald-100 dark:text-slate-400">
                  +91 98XXX XXXXX
                </div>
              </div>

              {/* Chat Canvas */}
              <div className="p-4 space-y-3.5 bg-[#f0f2f5] dark:bg-[#0B141A] wa-pattern-light dark:wa-pattern-dark min-h-[340px]">
                {/* 1. Business Owner Message */}
                <div className="flex flex-col items-end">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5 px-1 font-medium">
                    You (Business Owner)
                  </div>
                  <div className="bg-[#d9fdd3] dark:bg-[#005c4b] text-[#111827] dark:text-emerald-50 rounded-2xl rounded-tr-xs px-3.5 py-2.5 max-w-[90%] text-xs shadow-2xs leading-relaxed">
                    Create a quotation for website design, ₹25,000, valid for 7 days.
                    <div className="text-[9px] text-slate-500 dark:text-emerald-200 text-right mt-1 font-mono">
                      10:42 AM ✓✓
                    </div>
                  </div>
                </div>

                {/* 2. AI Assistant Reply with Quotation Document */}
                <div className="flex flex-col items-start">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5 px-1 font-medium">
                    AI Assistant
                  </div>
                  <div className="bg-white dark:bg-[#1F2937] text-slate-900 dark:text-slate-100 rounded-2xl rounded-tl-xs p-3.5 max-w-[95%] text-xs shadow-2xs border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                    <p className="font-semibold text-emerald-700 dark:text-[#25D366]">
                      Your quotation is ready!
                    </p>

                    {/* Quotation Document Component */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#111827] p-3 space-y-2">
                      <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-1.5">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-400">Document</div>
                          <div className="font-bold text-xs text-slate-900 dark:text-white">EST-2026-084</div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#15803D] dark:text-[#25D366]">
                          Valid: 7 days
                        </span>
                      </div>

                      <div className="space-y-1 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Service:</span>
                          <span className="font-semibold text-slate-900 dark:text-white">Website Design</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Base Amount:</span>
                          <span className="font-semibold text-slate-900 dark:text-white">₹25,000</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400">
                          <span>GST Treatment:</span>
                          <span className="font-medium text-emerald-600 dark:text-[#25D366]">18% GST (₹4,500) • Total ₹29,500</span>
                        </div>
                      </div>

                      {/* Working Actions */}
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                        <button
                          onClick={handleCopyQuotation}
                          className="flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-semibold bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Quotation</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onOpenPdf(heroQuoteData)}
                          className="py-1.5 px-2.5 rounded-lg text-[11px] font-semibold bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center space-x-1 transition-colors cursor-pointer"
                        >
                          <FileText className="w-3 h-3 text-[#16A34A]" />
                          <span>View PDF</span>
                        </button>
                      </div>
                    </div>

                    <div className="text-[9px] text-slate-400 text-right font-mono">
                      10:42 AM
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom snippet */}
              <div className="p-2.5 bg-slate-50 dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-3">
                <span>⚡ Instant generation on WhatsApp</span>
                <span className="font-semibold text-[#15803D] dark:text-[#25D366]">Try your own below ↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
