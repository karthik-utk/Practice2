import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

interface StickyMobileBarProps {
  onBookDemo: () => void;
  isModalOpen?: boolean;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onBookDemo, isModalOpen }) => {
  if (isModalOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-3 shadow-2xl safe-area-inset-bottom">
      <div className="flex items-center space-x-2">
        <a
          href="#demo"
          className="flex-1 py-3 px-3 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-[#1F2937] border border-slate-200 dark:border-slate-700 flex items-center justify-center space-x-1.5 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
          <span>Try Demo</span>
        </a>

        <button
          onClick={onBookDemo}
          className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#16A34A] active:bg-[#15803D] flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer transition-colors"
        >
          <span>Book Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
