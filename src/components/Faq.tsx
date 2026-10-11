import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqProps {
  onBookDemo: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onBookDemo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to install another application?',
      a: 'No. The assistant operates entirely through WhatsApp. Neither you nor your clients need to download any separate app, dashboard, or software. Everything is handled within your regular WhatsApp conversations.'
    },
    {
      q: 'How does the assistant work with WhatsApp?',
      a: 'It links securely to your WhatsApp Business number via the official WhatsApp Business Cloud API. It automatically monitors incoming customer messages, checks your pre-configured pricing and service rules, and drafts instantaneous replies or quotations.'
    },
    {
      q: 'Can I use it for my specific service business?',
      a: 'Yes. The assistant is built for any service-based business where inquiries happen on WhatsApp, including interior designers, caterers, repair technicians, freelance agencies, tax consultants, photographers, and tutors.'
    },
    {
      q: 'Can it generate GST and non-GST quotations?',
      a: 'Yes. During onboarding, you configure whether your business charges GST (and your applicable tax rate: 5%, 12%, 18%, or exempt). You can toggle between tax-inclusive, tax-exclusive, or non-GST bills on the fly.'
    },
    {
      q: 'Does it support Hindi and other Indian languages?',
      a: 'Yes. It understands conversational Hinglish, pure Hindi, Tamil, Telugu, and several other regional languages. You can speak or write casually, and it accurately parses your requests.'
    },
    {
      q: 'Can it send automatic payment reminders?',
      a: 'Yes. You can instruct the assistant to schedule payment reminders ahead of due dates or follow up on overdue invoices, complete with clickable UPI payment links (GPay, PhonePe, Paytm).'
    },
    {
      q: 'Can my team members use the assistant?',
      a: 'Yes. On our Business Team tier, multiple staff members can operate from the same business number with intelligent routing and centralized Google Sheets tracking.'
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes. We offer a 7-day complimentary trial with no credit card required so you can evaluate the speed and accuracy of quotation generation and responses on your actual business chats.'
    },
    {
      q: 'How do I book a demo?',
      a: 'Simply click any "Book a Free Demo" button on this page. Enter your business name and WhatsApp number, and a product specialist will activate an interactive test environment for your phone.'
    },
    {
      q: 'Can I cancel or change my plan?',
      a: 'Yes, anytime. There are no lock-in contracts or cancellation penalties. You can upgrade, downgrade, or cancel directly before your next monthly billing cycle.'
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors border-y border-slate-200 dark:border-slate-800 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider mb-4">
            <span>CLARITY & DETAILS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
            Straightforward answers to how the assistant simplifies daily operations.
          </p>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-slate-900 dark:text-white font-bold text-sm sm:text-base hover:text-[#16A34A] dark:hover:text-[#25D366] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#16A34A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-[#111827] dark:text-white">
              Have a custom workflow question?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Our specialists will help evaluate your service requirements during a free demo.
            </p>
          </div>
          <button
            onClick={onBookDemo}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#16A34A] hover:bg-[#15803D] transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
