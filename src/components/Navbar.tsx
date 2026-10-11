import React, { useState, useEffect } from 'react';
import { MessageSquare, Moon, Sun, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onBookDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode, onBookDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Who It\'s For', href: '#who-its-for' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-md shadow-xs border-b border-slate-200 dark:border-slate-800'
          : 'bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with chat bubble and AI spark */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center space-x-2.5 group focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
            aria-label="WhatsApp AI Assistant Home"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-1 -right-1 drop-shadow-xs" />
            </div>
            <div className="flex items-baseline space-x-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#111827] dark:text-white">
                WhatsApp AI Assistant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#16A34A] dark:hover:text-[#25D366] transition-colors focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-md px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1F2937] transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Primary Header CTA */}
            <button
              onClick={onBookDemo}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#16A34A] hover:bg-[#15803D] shadow-xs transition-all cursor-pointer"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1F2937] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#16A34A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemo();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#16A34A] hover:bg-[#15803D] shadow-xs flex items-center justify-center space-x-2"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
