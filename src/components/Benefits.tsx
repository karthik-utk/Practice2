import React, { useState } from 'react';
import { Clock, Zap, TrendingUp, IndianRupee, Sparkles, ArrowRight, Info, HelpCircle } from 'lucide-react';

interface BenefitsProps {
  onBookDemo: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onBookDemo }) => {
  // Configurable ROI Calculator Inputs
  const [weeklyEnquiries, setWeeklyEnquiries] = useState<number>(30);
  const [averageSaleValue, setAverageSaleValue] = useState<number>(12000);
  const [currentTimePerEnquiryMin, setCurrentTimePerEnquiryMin] = useState<number>(20);
  const [timeSavedPerEnquiryMin, setTimeSavedPerEnquiryMin] = useState<number>(14);
  const [conversionRateImprovementPct, setConversionRateImprovementPct] = useState<number>(8); // 8%

  // Transparent Formulas
  // Hours saved per week = Weekly enquiries * Minutes saved per enquiry / 60
  const hoursSavedPerWeek = Number(((weeklyEnquiries * timeSavedPerEnquiryMin) / 60).toFixed(1));
  const hoursSavedPerMonth = Number((hoursSavedPerWeek * 4.33).toFixed(1));

  // Monthly enquiries = weeklyEnquiries * 4.33
  const monthlyEnquiries = weeklyEnquiries * 4.33;
  // Estimated additional conversions = Monthly enquiries * (conversionRateImprovementPct / 100)
  const additionalConversions = Math.max(0.5, Number((monthlyEnquiries * (conversionRateImprovementPct / 100)).toFixed(1)));
  // Estimated potential additional monthly revenue = additionalConversions * averageSaleValue
  const potentialAdditionalMonthlyRevenue = Math.round(additionalConversions * averageSaleValue);

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white dark:bg-[#0B1220] transition-colors scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider mb-4">
            <span>MEASURABLE BUSINESS IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            Save 5+ hours every week, respond faster, never miss a customer, and focus on growing your business.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300 max-w-2xl mx-auto">
            Operational efficiency engineered to eliminate administrative bottlenecks and accelerate customer conversions.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#1F2937] text-[#16A34A] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              5+ hours
            </div>
            <div className="text-xs font-bold text-[#15803D] dark:text-[#25D366] uppercase mt-1">
              Saved Weekly
            </div>
            <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-2">
              Estimated administrative time reclaimed from manual quotation writing and routine client messages.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#1F2937] text-[#16A34A] flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              &lt; 60 seconds
            </div>
            <div className="text-xs font-bold text-[#15803D] dark:text-[#25D366] uppercase mt-1">
              Target Response Time
            </div>
            <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-2">
              Aspirational target to engage prospective clients instantly before they consult competing vendors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#1F2937] text-[#16A34A] flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              Up to 35%
            </div>
            <div className="text-xs font-bold text-[#15803D] dark:text-[#25D366] uppercase mt-1">
              Quotation Conversion Boost
            </div>
            <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-2">
              Estimated uplift driven by swift delivery of itemized quotes and structured follow-up sequences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#1F2937] text-[#16A34A] flex items-center justify-center mb-4">
              <IndianRupee className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              Zero
            </div>
            <div className="text-xs font-bold text-[#15803D] dark:text-[#25D366] uppercase mt-1">
              Missed Enquiries Target
            </div>
            <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-2">
              Aspirational target to log, answer, and nurture incoming requests around the clock.
            </p>
          </div>
        </div>

        {/* Interactive ROI Calculator */}
        <div className="rounded-2xl p-6 sm:p-9 bg-[#F8FAFC] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#16A34A] dark:text-[#25D366] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Interactive ROI & Time Calculator</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] dark:text-white">
              Estimate Your Time Saved & Growth Potential
            </h3>
            <p className="text-sm text-[#6B7280] dark:text-slate-400 mt-1">
              Adjust the inputs below to see your customized operational impact based on transparent formulas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Sliders & Number Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Input 1 */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Customer enquiries received per week:</span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min={5}
                      max={200}
                      value={weeklyEnquiries}
                      onChange={(e) => setWeeklyEnquiries(Math.max(1, Number(e.target.value)))}
                      className="w-16 px-2 py-1 text-right text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white"
                    />
                    <span className="text-xs text-slate-500">enquiries</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  value={weeklyEnquiries}
                  onChange={(e) => setWeeklyEnquiries(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
                />
              </div>

              {/* Input 2 */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Average value of a sale / job:</span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min={1000}
                      step={500}
                      value={averageSaleValue}
                      onChange={(e) => setAverageSaleValue(Math.max(500, Number(e.target.value)))}
                      className="w-24 px-2 py-1 text-right text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white"
                    />
                    <span className="text-xs text-slate-500">INR</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="60000"
                  step="1000"
                  value={averageSaleValue}
                  onChange={(e) => setAverageSaleValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
                />
              </div>

              {/* Input 3: Estimated time saved per enquiry */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Estimated time saved per enquiry:</span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min={2}
                      max={45}
                      value={timeSavedPerEnquiryMin}
                      onChange={(e) => setTimeSavedPerEnquiryMin(Math.max(1, Number(e.target.value)))}
                      className="w-16 px-2 py-1 text-right text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white"
                    />
                    <span className="text-xs text-slate-500">minutes</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={timeSavedPerEnquiryMin}
                  onChange={(e) => setTimeSavedPerEnquiryMin(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
                />
              </div>

              {/* Input 4: Conversion improvement */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Estimated conversion-rate improvement:</span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={conversionRateImprovementPct}
                      onChange={(e) => setConversionRateImprovementPct(Math.max(1, Number(e.target.value)))}
                      className="w-16 px-2 py-1 text-right text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white"
                    />
                    <span className="text-xs text-slate-500">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  value={conversionRateImprovementPct}
                  onChange={(e) => setConversionRateImprovementPct(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
                />
              </div>

              {/* Transparent Formulas Explanation */}
              <div className="p-3 rounded-xl bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-slate-700 text-[11px] text-[#6B7280] dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                  <Info className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Transparent Calculation Logic:</span>
                </div>
                <p>• Weekly Hours Saved = ({weeklyEnquiries} enquiries × {timeSavedPerEnquiryMin} min saved) ÷ 60 = <strong>{hoursSavedPerWeek} hrs/week</strong></p>
                <p>• Additional Conversions = {Math.round(monthlyEnquiries)} monthly enquiries × {conversionRateImprovementPct}% improvement = <strong>~{additionalConversions} deals/month</strong></p>
              </div>
            </div>

            {/* Output Display Card */}
            <div className="lg:col-span-5 bg-white dark:bg-[#1F2937] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-700 pb-3">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                  Calculated Projections
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#111827]">
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Estimated hours saved per week:</span>
                  <span className="font-extrabold text-base text-[#15803D] dark:text-[#25D366]">
                    {hoursSavedPerWeek} hrs
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#111827]">
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Estimated hours saved per month:</span>
                  <span className="font-extrabold text-base text-slate-900 dark:text-white">
                    {hoursSavedPerMonth} hrs
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#111827]">
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Estimated additional conversions:</span>
                  <span className="font-extrabold text-base text-slate-900 dark:text-white">
                    +{additionalConversions} /mo
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#15803D] text-white">
                  <div className="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">
                    Potential Additional Monthly Revenue
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold mt-0.5">
                    +₹{potentialAdditionalMonthlyRevenue.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[11px] text-emerald-100 mt-1">
                    * Hypothetical projection based on your inputs, not a financial guarantee.
                  </p>
                </div>
              </div>

              <button
                onClick={onBookDemo}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#16A34A] hover:bg-[#15803D] transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Book a Free Demo to Verify Your Numbers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
