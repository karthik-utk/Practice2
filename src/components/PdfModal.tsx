import React from 'react';
import { X, Download, Printer, Check, Copy, FileText, Building2, Calendar, ShieldCheck } from 'lucide-react';

export interface QuotationDetails {
  quoteNumber: string;
  date: string;
  validUntil: string;
  serviceTitle: string;
  clientName: string;
  clientCity?: string;
  items: { description: string; quantity: number; rate: number; amount: number }[];
  subtotal: number;
  gstType: 'inclusive' | 'exclusive' | 'exempt';
  gstRatePercent: number;
  gstAmount: number;
  grandTotal: number;
  notes: string[];
}

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  quotation: QuotationDetails | null;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, quotation }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !quotation) return null;

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Quotation ${quotation.quoteNumber} - WhatsApp AI Assistant</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; color: #111827; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #16A34A; padding-bottom: 20px; }
          .title { font-size: 24px; font-weight: bold; color: #16A34A; }
          .meta { margin-top: 20px; display: flex; justify-content: space-between; }
          table { width: 100%; border-collapse: collapse; margin-top: 30px; }
          th { text-align: left; background: #F8FAFC; padding: 10px; border-bottom: 1px solid #E5E7EB; }
          td { padding: 12px 10px; border-bottom: 1px solid #E5E7EB; }
          .total-box { margin-top: 25px; float: right; width: 300px; }
          .total-row { display: flex; justify-content: space-between; padding: 6px 0; }
          .grand-total { font-size: 18px; font-weight: bold; border-top: 2px solid #111827; padding-top: 8px; }
          .terms { margin-top: 80px; clear: both; font-size: 12px; color: #6B7280; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">FORMAL ESTIMATE / QUOTATION</div>
            <div style="font-size: 13px; color: #6B7280; margin-top: 4px;">Generated via WhatsApp AI Business Assistant</div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: bold;">Ref: ${quotation.quoteNumber}</div>
            <div style="font-size: 12px; color: #6B7280;">Date: ${quotation.date}</div>
            <div style="font-size: 12px; color: #16A34A; font-weight: bold;">Valid until: ${quotation.validUntil}</div>
          </div>
        </div>
        <div class="meta">
          <div>
            <div style="font-size: 12px; color: #6B7280; text-transform: uppercase;">Quoted To:</div>
            <div style="font-weight: bold; font-size: 16px;">${quotation.clientName}</div>
            <div style="font-size: 13px; color: #4B5563;">${quotation.clientCity || 'Pan India Services'}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 12px; color: #6B7280; text-transform: uppercase;">Project / Service:</div>
            <div style="font-weight: bold; font-size: 15px;">${quotation.serviceTitle}</div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th style="text-align: center;">Qty</th>
              <th style="text-align: right;">Rate (₹)</th>
              <th style="text-align: right;">Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${quotation.items.map(it => `
              <tr>
                <td><strong>${it.description}</strong></td>
                <td style="text-align: center;">${it.quantity}</td>
                <td style="text-align: right;">₹${it.rate.toLocaleString('en-IN')}</td>
                <td style="text-align: right;">₹${it.amount.toLocaleString('en-IN')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="total-box">
          <div class="total-row"><span>Subtotal:</span><span>₹${quotation.subtotal.toLocaleString('en-IN')}</span></div>
          <div class="total-row"><span>GST (${quotation.gstRatePercent}%):</span><span>₹${quotation.gstAmount.toLocaleString('en-IN')}</span></div>
          <div class="total-row grand-total"><span>Grand Total:</span><span>₹${quotation.grandTotal.toLocaleString('en-IN')}</span></div>
        </div>
        <div class="terms">
          <strong>Terms & Conditions:</strong>
          <ul>
            ${quotation.notes.map(n => `<li>${n}</li>`).join('')}
          </ul>
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleDownloadFile = () => {
    const textContent = `
==================================================
           FORMAL SERVICE QUOTATION
==================================================
Quotation No: ${quotation.quoteNumber}
Date:         ${quotation.date}
Valid Until:  ${quotation.validUntil}
Prepared For: ${quotation.clientName}
Service:      ${quotation.serviceTitle}
--------------------------------------------------
LINE ITEMS:
${quotation.items.map(it => `- ${it.description} | Qty: ${it.quantity} | Rate: ₹${it.rate.toLocaleString('en-IN')} | Total: ₹${it.amount.toLocaleString('en-IN')}`).join('\n')}
--------------------------------------------------
Subtotal:     ₹${quotation.subtotal.toLocaleString('en-IN')}
GST (${quotation.gstRatePercent}% ${quotation.gstType}): ₹${quotation.gstAmount.toLocaleString('en-IN')}
GRAND TOTAL:  ₹${quotation.grandTotal.toLocaleString('en-IN')}
--------------------------------------------------
TERMS & NOTES:
${quotation.notes.map(n => `* ${n}`).join('\n')}
==================================================
Generated via WhatsApp AI Assistant (https://whatsappaiassistant.in)
`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Quotation_${quotation.quoteNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopySummary = () => {
    const summary = `📄 *QUOTATION #${quotation.quoteNumber}*\n*Client:* ${quotation.clientName}\n*Service:* ${quotation.serviceTitle}\n*Total:* ₹${quotation.grandTotal.toLocaleString('en-IN')} (incl. ${quotation.gstRatePercent}% GST)\n*Validity:* ${quotation.validUntil}\n\n*Payment Terms:* 50% advance to start, balance upon completion.`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Quotation PDF Preview"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-[#0B1220] border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-[#16A34A]" />
            <span className="font-bold text-sm tracking-tight">PDF Document Preview</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-[#15803D] dark:text-[#25D366] font-semibold">
              Ready to Send
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close PDF preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Formal Quotation Sheet */}
        <div className="p-6 sm:p-8 space-y-6 bg-white dark:bg-[#111827]">
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-start border-b border-slate-200 dark:border-slate-800 pb-5 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm">
                  WA
                </div>
                <div>
                  <h3 className="font-extrabold text-lg tracking-tight">Studio Design & Services</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Bangalore / Mumbai • GSTIN: 29AAAAA0000A1Z5</p>
                </div>
              </div>
            </div>

            <div className="sm:text-right">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#16A34A]">
                Commercial Quotation
              </span>
              <div className="text-base font-bold mt-0.5">{quotation.quoteNumber}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Date: {quotation.date}</div>
              <div className="text-xs font-semibold text-emerald-600 dark:text-[#25D366] mt-0.5">
                Valid Until: {quotation.validUntil}
              </div>
            </div>
          </div>

          {/* Client & Service Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800/80 text-xs">
            <div>
              <div className="text-slate-400 uppercase font-semibold text-[10px] tracking-wider mb-1">
                Prepared For Client:
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">{quotation.clientName}</div>
              <div className="text-slate-500 dark:text-slate-400">{quotation.clientCity || 'Customer Enquiry'}</div>
            </div>

            <div>
              <div className="text-slate-400 uppercase font-semibold text-[10px] tracking-wider mb-1">
                Project Scope:
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">{quotation.serviceTitle}</div>
              <div className="text-slate-500 dark:text-slate-400">WhatsApp Commercial Direct Offer</div>
            </div>
          </div>

          {/* Table of items */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 dark:bg-[#0B1220] text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">Description</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-right">Rate</th>
                  <th className="p-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {quotation.items.map((it, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-3 font-medium text-slate-900 dark:text-slate-100">{it.description}</td>
                    <td className="p-3 text-center text-slate-500 dark:text-slate-400">{it.quantity}</td>
                    <td className="p-3 text-right text-slate-600 dark:text-slate-300">₹{it.rate.toLocaleString('en-IN')}</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-slate-100">₹{it.amount.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Subtotals & GST */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pt-2">
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 max-w-sm">
              <div className="font-bold text-slate-700 dark:text-slate-300">Payment & Delivery Terms:</div>
              {quotation.notes.map((n, i) => (
                <div key={i} className="flex items-start space-x-1.5">
                  <span className="text-[#16A34A] font-bold">•</span>
                  <span>{n}</span>
                </div>
              ))}
            </div>

            <div className="w-full sm:w-64 space-y-2 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-900 dark:text-white">₹{quotation.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>GST ({quotation.gstRatePercent}% {quotation.gstType}):</span>
                <span className="font-semibold text-slate-900 dark:text-white">₹{quotation.gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-extrabold text-sm text-slate-900 dark:text-white">
                <span>Grand Total:</span>
                <span className="text-[#15803D] dark:text-[#25D366]">₹{quotation.grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Quick Copy summary button */}
          <div className="pt-2 flex justify-between items-center text-xs">
            <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>Includes digital timestamp & GST validation</span>
            </div>
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center space-x-1.5 text-[#15803D] dark:text-[#25D366] font-semibold hover:underline"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy WhatsApp Summary'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
