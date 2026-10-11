import React from 'react';
import { X, Check, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  onBookDemo: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onBookDemo }) => {
  const points = [
    {
      before: 'Slow customer replies.',
      after: 'Faster customer responses.'
    },
    {
      before: 'Missed enquiries.',
      after: 'Fewer missed enquiries when the system is configured correctly.'
    },
    {
      before: 'Manual quotation preparation.',
      after: 'Professional quotations generated quickly.'
    },
    {
      before: 'Forgotten payment reminders.',
      after: 'Timely payment and appointment reminders.'
    },
    {
      before: 'Leads that never receive follow-ups.',
      after: 'Consistent lead follow-ups.'
    },
    {
      before: 'Hours spent creating marketing content.',
      after: 'Marketing content created in minutes.'
    }
  ];

  return (
    <section id="before-after" className="py-20 md:py-28 bg-white dark:bg-[#0B1220] transition-colors scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200 dark:border-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Workflow Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            From Daily Busywork to Business Growth
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
            Spend less time managing repetitive tasks and more time serving customers.
          </p>
        </div>

        {/* Two-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Before AI Card */}
          <div className="rounded-2xl p-7 sm:p-8 bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">
                  <X className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-rose-600 dark:text-rose-400">
                    The Manual Way
                  </span>
                  <h3 className="text-lg font-bold text-[#111827] dark:text-white">
                    Before AI
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {points.map((p, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="mt-1 w-4 h-4 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center shrink-0">
                      <X className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-medium">{p.before}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Hours lost each week to manual coordination, delayed responses, and administrative overhead.
            </div>
          </div>

          {/* With AI Card */}
          <div className="rounded-2xl p-7 sm:p-8 bg-emerald-50/50 dark:bg-[#0c1f17] border border-emerald-200 dark:border-emerald-800/80 shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="flex items-center space-x-3 pb-6 border-b border-emerald-200/60 dark:border-emerald-800/50">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-[#16A34A] dark:text-[#25D366] flex items-center justify-center font-bold">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#15803D] dark:text-[#25D366]">
                    Autonomous Efficiency
                  </span>
                  <h3 className="text-lg font-bold text-[#111827] dark:text-white">
                    With AI
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {points.map((p, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-slate-800 dark:text-slate-200">
                    <div className="mt-1 w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold">{p.after}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-emerald-200/60 dark:border-emerald-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-[#15803D] dark:text-[#25D366]">
                Save 5+ hours weekly with instant automated execution.
              </span>
              <button
                onClick={onBookDemo}
                className="w-full sm:w-auto px-4 py-2 rounded-lg font-bold text-white bg-[#16A34A] hover:bg-[#15803D] transition-colors cursor-pointer"
              >
                Experience With AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
