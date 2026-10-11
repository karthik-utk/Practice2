import React from 'react';
import { Home, UtensilsCrossed, Wrench, Laptop, Briefcase, Camera, Sparkles } from 'lucide-react';

interface WhoItsForProps {
  onBookDemo: () => void;
}

export const WhoItsFor: React.FC<WhoItsForProps> = ({ onBookDemo }) => {
  const industries = [
    {
      title: 'Interior Designers',
      icon: Home,
      useCase: 'Managing square-footage estimates, modular kitchen inquiries, and consultation scheduling.',
      example: 'Sends sq. ft. package rates immediately and books site-visit slots without manual back-and-forth.'
    },
    {
      title: 'Caterers and Event Planners',
      icon: UtensilsCrossed,
      useCase: 'Handling guest-count changes, banquet package inquiries, and tasting appointments.',
      example: 'Generates per-plate pricing breakdowns and follows up automatically before wedding booking dates.'
    },
    {
      title: 'AC and Appliance Repair',
      icon: Wrench,
      useCase: 'Coordinating emergency repair requests, quote approvals, and technician dispatches.',
      example: 'Confirms inspection time slots, provides diagnostic pricing, and follows up for customer reviews.'
    },
    {
      title: 'Freelancers and Agencies',
      icon: Laptop,
      useCase: 'Delivering scope-of-work proposals, milestone reminders, and advance invoice collections.',
      example: 'Drafts commercial proposals with payment terms and follows up on pending client feedback.'
    },
    {
      title: 'CAs and Consultants',
      icon: Briefcase,
      useCase: 'Sharing tax filing checklists, fee structures, and compliance deadline notifications.',
      example: 'Sends GST & advance-tax filing reminders with UPI links, reducing manual follow-up calls.'
    },
    {
      title: 'Wedding Photographers',
      icon: Camera,
      useCase: 'Responding to package inquiries, verifying date availability, and collecting milestone deposits.',
      example: 'Shares package deliverables (drone, cinematic teaser) and reminds clients of upcoming deliverables.'
    }
  ];

  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors border-y border-slate-200 dark:border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider mb-4">
            <span>TARGET AUDIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            Built for Businesses That Run on Customer Relationships
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
            Tailored workflows for service businesses where fast, courteous communication drives revenue.
          </p>
        </div>

        {/* 6 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#111827] rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#16A34A]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-[#1F2937] text-[#16A34A] dark:text-[#25D366] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-medium">
                    {ind.useCase}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] uppercase font-bold text-[#16A34A] tracking-wider mb-1">
                    How the assistant helps:
                  </div>
                  <p className="text-xs text-[#111827] dark:text-slate-200 leading-relaxed">
                    {ind.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audience Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Also suitable for fitness coaches, tutors, legal practitioners, home salons, and local service providers.
          </p>
        </div>
      </div>
    </section>
  );
};
