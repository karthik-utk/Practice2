import React, { useState } from 'react';
import { 
  Send, 
  CheckCheck, 
  FileText, 
  Mic, 
  Sparkles, 
  PhoneCall, 
  Video, 
  MoreVertical, 
  Download, 
  Copy, 
  Check, 
  Smile, 
  Paperclip, 
  ArrowRight,
  RotateCcw,
  Clock,
  Printer
} from 'lucide-react';
import { QuotationDetails } from './PdfModal';

interface ChatMessage {
  id: string;
  sender: 'owner' | 'ai' | 'customer';
  senderName: string;
  text: string;
  time: string;
  isVoice?: boolean;
  voiceDuration?: string;
  isQuotation?: boolean;
  quotationData?: QuotationDetails;
}

interface DemoScenario {
  id: string;
  label: string;
  promptDescription: string;
  conversation: ChatMessage[];
}

interface WhatsAppChatDemoProps {
  onBookDemo: () => void;
  onOpenPdf: (quote: QuotationDetails) => void;
}

export const WhatsAppChatDemo: React.FC<WhatsAppChatDemoProps> = ({ onBookDemo, onOpenPdf }) => {
  const defaultQuoteData: QuotationDetails = {
    quoteNumber: 'EST-2026-084',
    date: '11 Oct 2026',
    validUntil: '18 Oct 2026 (7 Days)',
    serviceTitle: 'Custom Responsive Website Design',
    clientName: 'Prospective Client',
    clientCity: 'Pan-India',
    items: [
      { description: '5-Page Modern Responsive Business Website', quantity: 1, rate: 18000, amount: 18000 },
      { description: 'WhatsApp Business Chat Integration & Lead Form', quantity: 1, rate: 4000, amount: 4000 },
      { description: 'On-Page SEO Optimization & Google Profile Link', quantity: 1, rate: 3000, amount: 3000 }
    ],
    subtotal: 25000,
    gstType: 'exclusive',
    gstRatePercent: 18,
    gstAmount: 4500,
    grandTotal: 29500,
    notes: [
      '50% advance to start; 50% upon final launch approval',
      'Delivery timeline: 10 working business days',
      'Includes 30 days complimentary technical bug-fixing support'
    ]
  };

  const scenarios: DemoScenario[] = [
    {
      id: 'quote',
      label: 'Generate a quotation',
      promptDescription: 'Create a quotation for website design, ₹25,000, valid for 7 days',
      conversation: [
        {
          id: 'q1',
          sender: 'owner',
          senderName: 'You (Business Owner)',
          text: 'Create a quotation for website design, ₹25,000, valid for 7 days.',
          time: '10:42 AM'
        },
        {
          id: 'q2',
          sender: 'ai',
          senderName: 'WhatsApp AI Assistant',
          text: 'Your quotation is ready!',
          time: '10:42 AM',
          isQuotation: true,
          quotationData: defaultQuoteData
        }
      ]
    },
    {
      id: 'enquiry',
      label: 'Reply to customer enquiry',
      promptDescription: 'Client: "Hi, what are your interior consultation packages?"',
      conversation: [
        {
          id: 'e1',
          sender: 'customer',
          senderName: 'Rohan Mehta (Enquiry)',
          text: 'Hi! Do you take up 3BHK turnkey interior design in Bangalore? What are your consultation charges?',
          time: '11:15 PM'
        },
        {
          id: 'e2',
          sender: 'ai',
          senderName: 'WhatsApp AI Assistant',
          text: 'Namaste Rohan ji! 🙏 Thank you for contacting Studio V Interiors.\n\nYes, we specialize in full turnkey 3BHK residential interiors across Bangalore! 🏡\n\n📌 *Our Packages:*\n• Essential Package: ~₹1,200 - ₹1,500 / sq ft\n• Premium Turnkey: ~₹1,800 - ₹2,400 / sq ft\n\nOur initial 45-minute on-site assessment is ₹1,500 (fully adjusted against your project booking).\n\nWould you like our principal designer to visit this Saturday at 11:00 AM or 3:00 PM?',
          time: '11:15 PM'
        }
      ]
    },
    {
      id: 'reminder',
      label: 'Send a payment reminder',
      promptDescription: 'Send polite payment reminder to Rajesh for ₹18,500 due tomorrow',
      conversation: [
        {
          id: 'r1',
          sender: 'owner',
          senderName: 'You (Business Owner)',
          text: 'Send polite payment reminder to Rajesh for ₹18,500 due tomorrow.',
          time: '02:15 PM'
        },
        {
          id: 'r2',
          sender: 'ai',
          senderName: 'WhatsApp AI Assistant',
          text: 'Gentle reminder drafted for *Rajesh Sharma*:\n\n"Dear Rajesh ji, hope you are well!\n\nThis is a courteous reminder that Invoice #INV-492 for *₹18,500* (Catering Services) is scheduled for settlement tomorrow, 12 Oct 2026.\n\n💳 *Direct UPI Payment:* upi://pay?pa=business@upi&am=18500\n\nPlease let us know once transferred so we can issue your official GST receipt. Thank you for your partnership! 🙏"',
          time: '02:15 PM'
        }
      ]
    },
    {
      id: 'voice',
      label: 'Process Hinglish voice-note',
      promptDescription: 'Bhai client ko catering menu tasting ke liye update bhej do',
      conversation: [
        {
          id: 'v1',
          sender: 'owner',
          senderName: 'You (Voice Note)',
          text: '🎙️ Voice note (0:12) — "Bhaiya, Priya ji ko weekend tasting session ka polite update bhej do catering menu finalize karne ke liye."',
          isVoice: true,
          voiceDuration: '0:12',
          time: '04:05 PM'
        },
        {
          id: 'v2',
          sender: 'ai',
          senderName: 'WhatsApp AI Assistant',
          text: 'Transcribed from audio: *"Send wedding catering food tasting follow-up to Priya"*\n\nDrafted message ready:\n\n"Namaste Priya ji! 🌸 Following up regarding your wedding reception catering. Our executive chef has scheduled the weekend tasting table for this Saturday, 1:30 PM.\n\nCould you please confirm if 3 guests will be attending so we prepare fresh course samples? Looking forward to curating your special celebration! ✨"',
          time: '04:05 PM'
        }
      ]
    },
    {
      id: 'promo',
      label: 'Create promotional message',
      promptDescription: 'Write Diwali early bird offer for home deep cleaning',
      conversation: [
        {
          id: 'p1',
          sender: 'owner',
          senderName: 'You (Business Owner)',
          text: 'Draft a festive Diwali early-bird broadcast offer for home deep cleaning.',
          time: '05:30 PM'
        },
        {
          id: 'p2',
          sender: 'ai',
          senderName: 'WhatsApp AI Assistant',
          text: 'Here is your high-converting WhatsApp festive announcement:\n\n"✨ *Welcome Lakshmi into a Spotless Home this Diwali!* ✨\n\nBook your full apartment deep-cleaning before 20th October and get *Flat 20% OFF* plus complimentary sofa shampooing!\n\n🧽 Includes: Kitchen degreasing, bathroom sanitization, balcony & floor buffing.\n\nLimited slots per area! Reply *CLEAN* to reserve your preferred date. 🏡🪔"',
          time: '05:30 PM'
        }
      ]
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('quote');
  const [messages, setMessages] = useState<ChatMessage[]>(scenarios[0].conversation);
  const [inputVal, setInputVal] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSelectScenario = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    const scen = scenarios.find((s) => s.id === scenarioId);
    if (!scen) return;

    setIsTyping(true);
    setMessages([]);
    setTimeout(() => {
      setMessages(scen.conversation);
      setIsTyping(false);
    }, 350);
  };

  const handleReset = () => {
    handleSelectScenario(activeScenarioId);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim() || isTyping) return;

    const userText = inputVal.trim();
    setInputVal('');

    const newMsg: ChatMessage = {
      id: 'user_' + Date.now(),
      sender: 'owner',
      senderName: 'You (Business Owner)',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let replyText = '';
      let isQuotation = false;
      let quotationData: QuotationDetails | undefined = undefined;

      if (lower.includes('quot') || lower.includes('cost') || lower.includes('price') || lower.includes('₹') || lower.includes('estimate')) {
        isQuotation = true;
        replyText = 'Your quotation is ready!';
        const extractedAmount = parseInt(userText.replace(/[^0-9]/g, '')) || 15000;
        const gstVal = Math.round(extractedAmount * 0.18);
        quotationData = {
          quoteNumber: `EST-2026-${Math.floor(100 + Math.random() * 900)}`,
          date: '11 Oct 2026',
          validUntil: '18 Oct 2026 (7 Days)',
          serviceTitle: 'Requested Service Proposal',
          clientName: 'Valued Client',
          clientCity: 'Pan-India',
          items: [
            { description: 'Core Service Scope & Professional Execution', quantity: 1, rate: extractedAmount, amount: extractedAmount },
            { description: 'Consultation & Milestone Review', quantity: 1, rate: 0, amount: 0 }
          ],
          subtotal: extractedAmount,
          gstType: 'exclusive',
          gstRatePercent: 18,
          gstAmount: gstVal,
          grandTotal: extractedAmount + gstVal,
          notes: [
            '50% advance to initiate work; balance upon milestone delivery',
            'All quotes valid for 7 business days from date of issue'
          ]
        };
      } else if (lower.includes('remind') || lower.includes('due') || lower.includes('pay')) {
        replyText = `Courtesy reminder drafted:\n\n"Dear Client, gentle reminder regarding pending balance of ₹${userText.match(/\d+/)?.[0] || '10,000'} due this week. Kindly click to settle via UPI: upi://pay?pa=business@upi. Thank you! 🙏"`;
      } else if (lower.includes('follow') || lower.includes('status')) {
        replyText = `Polite lead follow-up drafted:\n\n"Namaste! Following up on the proposal we sent earlier this week. Would you like to schedule a 10-minute discovery call to finalize details? Let us know whenever convenient!"`;
      } else {
        replyText = `Received your instruction: "${userText}"\n\n✅ Assistant generated context-aware WhatsApp response with your configured business pricing and terms.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: 'ai_' + Date.now(),
          sender: 'ai',
          senderName: 'WhatsApp AI Assistant',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isQuotation,
          quotationData
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors border-b border-slate-200 dark:border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[#15803D] dark:text-[#25D366] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Product Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight">
            See Your AI Business Assistant in Action
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] dark:text-slate-300">
            Try real business scenarios and see how simple instructions become useful business outputs.
          </p>
        </div>

        {/* Scenario Presets Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
          {scenarios.map((scen) => {
            const isActive = activeScenarioId === scen.id;
            return (
              <button
                key={scen.id}
                onClick={() => handleSelectScenario(scen.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#15803D] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#16A34A]'
                }`}
              >
                {scen.label}
              </button>
            );
          })}
        </div>

        {/* WhatsApp Mobile Mockup */}
        <div className="max-w-xl mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-xl">
          {/* Header */}
          <div className="bg-[#15803D] dark:bg-[#1F2937] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#25D366] text-[#111827] font-bold text-xs flex items-center justify-center">
                  AI
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-300 border-2 border-[#15803D] rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-white">WhatsApp AI Assistant</h3>
                <p className="text-[10px] text-emerald-100 dark:text-slate-400">online • replies in 2 seconds</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-emerald-100 dark:text-slate-300 text-xs">
              <button 
                onClick={handleReset}
                title="Reset conversation"
                className="hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors flex items-center space-x-1"
                aria-label="Reset chat conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">Reset</span>
              </button>
              <PhoneCall className="w-3.5 h-3.5" />
              <Video className="w-3.5 h-3.5" />
              <MoreVertical className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Conversation Area */}
          <div className="p-4 min-h-[380px] max-h-[460px] overflow-y-auto bg-[#f0f2f5] dark:bg-[#0B141A] wa-pattern-light dark:wa-pattern-dark space-y-3">
            <div className="text-center my-1">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                TODAY • END-TO-END ENCRYPTED
              </span>
            </div>

            {messages.map((msg) => {
              const isOwner = msg.sender === 'owner';
              const isCustomer = msg.sender === 'customer';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isOwner ? 'items-end' : 'items-start'} animate-in fade-in`}
                >
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5 px-1 font-medium">
                    {msg.senderName}
                  </div>

                  <div
                    className={`rounded-2xl px-3.5 py-2.5 max-w-[92%] sm:max-w-[85%] text-xs shadow-2xs ${
                      isOwner
                        ? 'bg-[#d9fdd3] dark:bg-[#005c4b] text-[#111827] dark:text-emerald-50 rounded-tr-xs'
                        : isCustomer
                        ? 'bg-amber-50 dark:bg-[#1F2937] text-slate-900 dark:text-slate-100 rounded-tl-xs border border-amber-200/50'
                        : 'bg-white dark:bg-[#1F2937] text-slate-900 dark:text-slate-100 rounded-tl-xs border border-slate-200/80 dark:border-slate-700/80'
                    }`}
                  >
                    {msg.isVoice ? (
                      <div className="space-y-1.5 py-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-full bg-[#15803D] text-white flex items-center justify-center shrink-0">
                            <Mic className="w-3.5 h-3.5" />
                          </div>
                          <div className="h-1.5 w-32 bg-slate-300 dark:bg-slate-600 rounded-full">
                            <div className="h-full bg-[#16A34A] w-2/3 rounded-full"></div>
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono">{msg.voiceDuration}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 italic pt-1 border-t border-slate-200 dark:border-slate-700">
                          {msg.text}
                        </p>
                      </div>
                    ) : (
                      <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                    )}

                    {/* Quotation Preview Card if applicable */}
                    {msg.isQuotation && msg.quotationData && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700 space-y-2">
                        <div className="bg-slate-50 dark:bg-[#111827] p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
                          <div className="flex justify-between font-bold">
                            <span className="text-slate-900 dark:text-white">{msg.quotationData.serviceTitle}</span>
                            <span className="text-[#16A34A] dark:text-[#25D366]">₹{msg.quotationData.subtotal.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">
                            Validity: {msg.quotationData.validUntil} • GST: 18% Exclusive (₹{msg.quotationData.gstAmount.toLocaleString('en-IN')})
                          </div>
                          <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300 pt-1 border-t border-slate-200 dark:border-slate-800">
                            Total Payable: ₹{msg.quotationData.grandTotal.toLocaleString('en-IN')}
                          </div>
                        </div>

                        {/* Working Actions */}
                        <div className="flex items-center gap-1.5 pt-1">
                          <button
                            onClick={() => handleCopyText(msg.id, `QUOTATION #${msg.quotationData?.quoteNumber}\nService: ${msg.quotationData?.serviceTitle}\nTotal: ₹${msg.quotationData?.grandTotal.toLocaleString('en-IN')}\nValid: ${msg.quotationData?.validUntil}`)}
                            className="flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Text</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={() => onOpenPdf(msg.quotationData!)}
                            className="py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center space-x-1 cursor-pointer transition-colors"
                          >
                            <FileText className="w-3 h-3 text-[#16A34A]" />
                            <span>PDF Preview</span>
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-end space-x-1 mt-1 text-[9px] text-slate-400 font-mono">
                      <span>{msg.time}</span>
                      <CheckCheck className={`w-3 h-3 ${isOwner ? 'text-sky-500' : 'text-slate-400'}`} />
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center space-x-2 text-xs text-slate-500 bg-white dark:bg-[#1F2937] w-fit px-3 py-1.5 rounded-full shadow-2xs">
                <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[10px] font-medium text-emerald-600 dark:text-[#25D366]">Generating response...</span>
              </div>
            )}
          </div>

          {/* User Input Bar */}
          <div className="p-3 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your instruction or scenario (e.g. quote for catering ₹30,000)..."
                disabled={isTyping}
                className="flex-1 bg-slate-100 dark:bg-[#1F2937] text-slate-900 dark:text-white placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xl border border-transparent focus:border-[#16A34A] focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                className="w-9 h-9 rounded-xl bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-40 text-white flex items-center justify-center shrink-0 cursor-pointer transition-colors"
                aria-label="Send input in demo"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-1.5 text-[10px] text-slate-400 flex justify-between">
              <span>Press Enter to send</span>
              <button
                type="button"
                onClick={() => setInputVal('Create a quotation for website design, ₹25,000, valid for 7 days.')}
                className="text-[#16A34A] dark:text-[#25D366] hover:underline font-medium"
              >
                Insert default quotation prompt
              </button>
            </div>
          </div>
        </div>

        {/* Demo Bottom Banner */}
        <div className="mt-8 text-center">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#16A34A] hover:bg-[#15803D] transition-colors shadow-xs cursor-pointer"
          >
            <span>Book a Free 1-on-1 WhatsApp Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
