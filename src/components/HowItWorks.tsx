import React from 'react';
import { Settings, Bot, Users, CheckCircle, ArrowRight, Smartphone, MessageSquare, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onBookDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookDemo }) => {
  const steps = [
    {
      step: '01',
      title: 'Connect your business workflow',
      subtitle: 'Setup in ~15 minutes',
      description: 'Configure your services, pricing, business details, and preferred language. Share your existing price list, catalogue, or explain your services via WhatsApp voice note.',
      previewType: 'config',
      highlight: 'Zero coding required',
      details: [
        'Upload your rate card or text service list',
        'Choose your primary language (Hindi, Hinglish, Tamil, etc.)',
        'Set working hours & instant response rules'
      ]
    },
    {
      step: '02',
      title: 'Let AI handle repetitive tasks',
      subtitle: '24/7 autonomous support',
      description: 'Generate replies, quotations, reminders, and follow-up messages right inside WhatsApp chats. The assistant drafts replies and quotes with 100% accuracy.',
      previewType: 'tasks',
      highlight: 'Drafts ready in < 5 seconds',
      details: [
        'Answers incoming customer enquiries immediately',
        'Drafts itemized quotations with GST rules',
        'Schedules polite payment & appointment alerts'
      ]
    },
    {
      step: '03',
      title: 'Focus on serving more customers',
      subtitle: 'Reclaim 5+ hours weekly',
      description: 'Spend less time on repetitive administration and more time growing your business. High-value client negotiations and complex questions escalate to you smoothly.',
      previewType: 'growth',
      highlight: 'More revenue & peace of mind',
      details: [
        'Close deals faster with rapid quote turnaround',
        'Prevent unpaid invoice delays with timely nudges',
        'Take on bigger projects while chats run on autopilot'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors border-y border-slate-200 dark:border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 3-Step Setup</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            Your Everyday Business Assistant, Right Inside WhatsApp
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
            Spend less time managing repetitive tasks and more time serving customers.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#111827] rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-[#16A34A]/50 transition-all duration-200"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-[#16A34A] dark:text-[#25D366] tracking-tight">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B7280] dark:text-slate-400 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Practical checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {item.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-[#15803D] dark:text-[#25D366] flex items-center justify-between">
                <span>✓ {item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Integration Disclaimer */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            * Note: Demonstrations on this page showcase simulated product workflows. Live WhatsApp AI operation utilizes official Meta WhatsApp Business Cloud credentials configured during your personalized onboarding.
          </p>
        </div>
      </div>
    </section>
  );
};
