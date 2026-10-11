import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingProps {
  onBookDemo: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBookDemo }) => {
  const plans = [
    {
      name: 'Starter',
      tagline: 'Essential automation for solo service operators.',
      price: '₹1,500',
      period: 'per month',
      isPopular: false,
      features: [
        'Instant customer replies.',
        'Quotation generation.',
        'Appointment and payment reminders.',
        'One WhatsApp number.',
        'Basic business configuration.'
      ],
      buttonText: 'Book a Free Demo'
    },
    {
      name: 'Growth',
      tagline: 'Comprehensive automation for active service businesses.',
      price: '₹2,800',
      period: 'per month',
      isPopular: true,
      features: [
        'Everything in Starter.',
        'Expanded quotation capabilities.',
        'Voice-note support.',
        'Multilingual responses.',
        'Automated follow-up workflows.'
      ],
      buttonText: 'Book a Free Demo'
    },
    {
      name: 'Business Team',
      tagline: 'Multi-member management and CRM synchronization.',
      price: '₹4,999',
      period: 'per month',
      isPopular: false,
      features: [
        'Everything in Growth.',
        'Multi-agent staff routing.',
        'Google Sheets synchronization.',
        'Team-oriented workflows.',
        'Centralized business operations.'
      ],
      buttonText: 'Book a Free Demo'
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white dark:bg-[#0B1220] transition-colors scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider mb-4">
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            Simple Pricing That Grows With Your Business
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
            Start with the essentials and upgrade when your business needs more.
          </p>
        </div>

        {/* 3 Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.isPopular
                  ? 'bg-white dark:bg-[#111827] border-2 border-[#16A34A] shadow-lg'
                  : 'bg-[#F8FAFC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xs'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#16A34A] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#111827] dark:text-white">{plan.name}</h3>
                </div>

                <p className="text-xs text-[#6B7280] dark:text-slate-400 mb-6 min-h-[32px]">
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#6B7280] dark:text-slate-400">
                      /{plan.period}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#15803D] dark:text-[#25D366] font-medium block mt-1">
                    Includes 7-day complimentary trial
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aligned Button */}
              <div>
                <button
                  onClick={() => onBookDemo(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xs'
                      : 'bg-white dark:bg-[#1F2937] hover:bg-slate-100 dark:hover:bg-slate-700 text-[#111827] dark:text-white border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing footnotes */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            * Note: Final feature availability, API volume limits, and number configurations are confirmed during onboarding setup. 7-day trial requires no credit card.
          </p>
        </div>
      </div>
    </section>
  );
};
