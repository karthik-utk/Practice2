import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessCategory, setBusinessCategory] = useState('Interior Design / Architecture');
  const [selectedPlan, setSelectedPlan] = useState('Growth');
  const [requirements, setRequirements] = useState('');
  
  // Validation & Submission States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultPlan) {
      setSelectedPlan(defaultPlan);
    }
  }, [defaultPlan]);

  // Handle escape key and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!businessName.trim()) {
      newErrors.businessName = 'Please enter your business or firm name.';
    }

    // Indian mobile phone validation (10 digits starting with 6, 7, 8, 9)
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'WhatsApp mobile number is required.';
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Valid Indian mobile numbers typically begin with 6, 7, 8, or 9.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulated submission to demonstrate local validation and confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setBusinessName('');
    setPhone('');
    setRequirements('');
    setErrors({});
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0B1220] rounded-t-2xl">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#16A34A] text-white flex items-center justify-center">
              <MessageSquare className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 id="modal-title" className="font-bold text-base text-[#111827] dark:text-white">
                Book a Free Demo
              </h3>
              <p className="text-[11px] text-[#6B7280] dark:text-slate-400">
                15-minute live walkthrough on your WhatsApp
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close demo booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <p>
                  Experience quotation generation, instant auto-replies, and payment reminders directly on your phone with zero commitments.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                  }}
                  placeholder="e.g. Ramesh Patel"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                    errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:border-[#16A34A]'
                  } bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white focus:outline-none`}
                />
                {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Business / Agency Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                    if (errors.businessName) setErrors(prev => ({ ...prev, businessName: '' }));
                  }}
                  placeholder="e.g. Patel Interior Studio"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                    errors.businessName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:border-[#16A34A]'
                  } bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white focus:outline-none`}
                />
                {errors.businessName && <p className="text-[11px] text-rose-500 mt-1">{errors.businessName}</p>}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, ''));
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                    }}
                    placeholder="9876543210"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-r-xl border ${
                      errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:border-[#16A34A]'
                    } bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white focus:outline-none`}
                  />
                </div>
                {errors.phone ? (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>
                ) : (
                  <p className="text-[11px] text-slate-400 mt-1">We will send your preview link to this WhatsApp number.</p>
                )}
              </div>

              {/* Business Category & Selected Plan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Business Category
                  </label>
                  <select
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white focus:outline-none focus:border-[#16A34A]"
                  >
                    <option>Interior Design / Architecture</option>
                    <option>Catering & Event Planning</option>
                    <option>AC & Appliance Repair</option>
                    <option>Freelancer / Digital Agency</option>
                    <option>CA / Tax / Legal Consultant</option>
                    <option>Wedding Photography & Studio</option>
                    <option>Other Service Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Plan Preference
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white focus:outline-none focus:border-[#16A34A]"
                  >
                    <option value="Starter">Starter (₹1,500/mo)</option>
                    <option value="Growth">Growth (₹2,800/mo)</option>
                    <option value="Business Team">Business Team (₹4,999/mo)</option>
                  </select>
                </div>
              </div>

              {/* Optional Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Optional Requirements / Notes
                </label>
                <textarea
                  rows={2}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="e.g. Need quotations in Marathi, 50 enquiries weekly..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white focus:outline-none focus:border-[#16A34A]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating Information...</span>
                  ) : (
                    <>
                      <span>Submit Free Demo Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Zero spam guarantee • No credit card required</span>
              </div>
            </form>
          ) : (
            /* Confirmation State with Honest Demo Messaging */
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#16A34A] dark:text-[#25D366] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-[#111827] dark:text-white">
                  Demo Request Received!
                </h4>
                <p className="text-xs text-[#6B7280] dark:text-slate-400">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span> ({businessName}).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#1F2937] border border-slate-200 dark:border-slate-800 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Registered WhatsApp:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">+91 {phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Plan:</span>
                  <span className="font-semibold text-[#16A34A]">{selectedPlan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Business Category:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{businessCategory}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-[11px] text-amber-800 dark:text-amber-300 text-left">
                ℹ️ <strong>Developer Integration Status:</strong> Form validation succeeded. In a production deployment, this payload connects directly to your WhatsApp Cloud API webhook or CRM.
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-colors"
              >
                Close & Return to Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
