import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onBookDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookDemo }) => {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-[#0B1220] transition-colors relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-[#F8FAFC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden shadow-xs">
          {/* Subtle gradient wash */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started in 15 Minutes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
              Ready to Spend Less Time on Repetitive Tasks?
            </h2>

            <p className="text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
              See how a WhatsApp AI assistant can simplify your daily business operations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onBookDemo}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-slate-700 hover:border-[#16A34A] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs"
              >
                <span>Explore Pricing</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>Free 7-Day Trial • No credit card required • Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
