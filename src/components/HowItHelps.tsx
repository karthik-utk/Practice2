import React from 'react';
import { Zap, FileText, BellRing, UserCheck, Megaphone, Languages, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { QuotationDetails } from './PdfModal';

interface HowItHelpsProps {
  onBookDemo: () => void;
  onOpenPdf?: (quote: QuotationDetails) => void;
}

export const HowItHelps: React.FC<HowItHelpsProps> = ({ onBookDemo, onOpenPdf }) => {
  const sampleFeatureQuote: QuotationDetails = {
    quoteNumber: 'EST-2026-092',
    date: '11 Oct 2026',
    validUntil: '18 Oct 2026',
    serviceTitle: 'Annual AC Maintenance Contract',
    clientName: 'Commercial Office Space',
    clientCity: 'Bengaluru',
    items: [
      { description: 'Split AC Deep Cleaning & Chemical Wash (4 Units)', quantity: 4, rate: 850, amount: 3400 },
      { description: 'Refrigerant Gas Top-Up & Pressure Testing', quantity: 2, rate: 1200, amount: 2400 },
      { description: 'Blower & Condenser Coil Inspection', quantity: 1, rate: 600, amount: 600 }
    ],
    subtotal: 6400,
    gstType: 'inclusive',
    gstRatePercent: 18,
    gstAmount: 976,
    grandTotal: 6400,
    notes: [
      'Comprehensive 90-day service warranty on gas top-up',
      'Emergency response within 4 hours during AMC period'
    ]
  };

  const features = [
    {
      id: 1,
      title: 'Instant Customer Replies',
      icon: Zap,
      badge: '24/7 Responsiveness',
      description: 'Engage new and returning customers the moment they message you, even when you are on site or outside operating hours.',
      points: [
        'Answer common customer questions automatically.',
        'Share services, business hours, and pricing.',
        'Provide support outside normal business hours when configured.',
        'Help reduce response delays and avoid lost leads.'
      ]
    },
    {
      id: 2,
      title: 'Professional Quotations',
      icon: FileText,
      badge: '10-Second Estimates',
      description: 'Transform basic service notes into formatted commercial proposals with itemized rates, validity periods, and tax calculations.',
      points: [
        'Generate quotations from simple text instructions.',
        'Create itemized service estimates.',
        'Include validity terms and payment conditions.',
        'Support configurable GST and non-GST quotation formats.'
      ],
      hasPdfAction: true
    },
    {
      id: 3,
      title: 'Smart Reminders',
      icon: BellRing,
      badge: 'Timely Cash Flow',
      description: 'Keep schedules and receivables organized with courteous automated WhatsApp notifications sent at the right moments.',
      points: [
        'Automated appointment reminders to prevent no-shows.',
        'Courteous payment balance reminders.',
        'Service delivery and milestone updates.',
        'Support for UPI payment links when properly configured.'
      ]
    },
    {
      id: 4,
      title: 'Automated Lead Follow-Ups',
      icon: UserCheck,
      badge: 'Pipeline Retention',
      description: 'Stay top of mind with prospects who requested pricing but never completed booking, without feeling pushy.',
      points: [
        'Follow up with interested customers automatically.',
        'Use configurable multi-stage follow-up rules.',
        'Generate polite, context-aware messages.',
        'Respect customer consent and opt-out requests.'
      ]
    },
    {
      id: 5,
      title: 'Marketing Content Creation',
      icon: Megaphone,
      badge: 'Effortless Promotion',
      description: 'Draft seasonal offers and customer engagement copy in seconds, ready for your approval before broadcasting.',
      points: [
        'Festival greetings for Diwali, Eid, New Year & regional holidays.',
        'Promotional messages with clear calls to action.',
        'WhatsApp status content and social media captions.',
        'Campaign drafts created for review before sending.'
      ]
    },
    {
      id: 6,
      title: 'Local Languages and Voice Notes',
      icon: Languages,
      badge: 'Multilingual AI',
      description: 'Interact with confidence across diverse Indian regions. Speak or type in regional dialects with natural fluency.',
      points: [
        'Native conversational Hindi and Hinglish.',
        'Regional language processing for Tamil & Telugu.',
        'Voice-note transcription where supported.',
        'Language-aware response generation.'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-[#0B1220] transition-colors scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider mb-4">
            <span>CORE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            Everything You Need to Run Your Business Smarter
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
            Engineered specifically to relieve daily administrative friction for service entrepreneurs.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {features.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white dark:bg-[#111827] rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-[#16A34A]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-[#1F2937] text-[#16A34A] dark:text-[#25D366] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Feature Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {card.hasPdfAction && onOpenPdf ? (
                    <button
                      onClick={() => onOpenPdf(sampleFeatureQuote)}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#15803D] dark:text-[#25D366] bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Preview Sample Quotation PDF</span>
                    </button>
                  ) : (
                    <button
                      onClick={onBookDemo}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#16A34A] dark:hover:text-[#25D366] hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>Explore this in demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
