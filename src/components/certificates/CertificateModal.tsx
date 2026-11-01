import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Award, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { Certificate } from '../../types/portfolio';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF8F5] dark:bg-[#18181B] border border-[#E7E2DA] dark:border-[#27272A] rounded-xl max-w-4xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E7E2DA] dark:border-[#27272A] flex items-center justify-between bg-[#F2EFE9] dark:bg-[#121214]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#800020] dark:text-[#D4AF37]" />
            <div>
              <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F4F4F5]">
                {certificate.name}
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA]">
                {certificate.issuingOrganization}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#71717A] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#E7E2DA] dark:hover:bg-[#27272A] transition-colors cursor-pointer"
            aria-label="Close certificate lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Certificate Image Frame */}
          <div className="bg-[#121214] p-3 rounded-lg border border-[#E7E2DA] dark:border-[#27272A] flex items-center justify-center min-h-[300px]">
            <img
              src={certificate.image}
              alt={certificate.name}
              referrerPolicy="no-referrer"
              className="max-h-[520px] w-auto max-w-full rounded shadow-md object-contain"
            />
          </div>

          {/* Details & Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
              <span className="text-[#71717A] dark:text-[#A1A1AA] uppercase font-bold tracking-wider text-[10px] block">
                Issuing Authority
              </span>
              <span className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1 block">
                {certificate.issuingOrganization}
              </span>
            </div>

            <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
              <span className="text-[#71717A] dark:text-[#A1A1AA] uppercase font-bold tracking-wider text-[10px] block">
                Completion Date
              </span>
              <span className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1 block">
                {certificate.completionDate}
              </span>
            </div>

            <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
              <span className="text-[#71717A] dark:text-[#A1A1AA] uppercase font-bold tracking-wider text-[10px] block">
                Category
              </span>
              <span className="font-semibold text-[#800020] dark:text-[#D4AF37] mt-1 block">
                {certificate.category} {certificate.score ? `(Score: ${certificate.score})` : ''}
              </span>
            </div>
          </div>

          {/* Description & Verification */}
          <div className="space-y-2 text-xs">
            <p className="text-[#444444] dark:text-[#D4D4D8] leading-relaxed">
              {certificate.description}
            </p>
            {certificate.verificationNote && (
              <div className="p-3 bg-[#800020]/5 dark:bg-[#800020]/20 rounded border border-[#800020]/20 text-[#800020] dark:text-[#FCA5A5] font-mono text-[11px]">
                <span className="font-bold">Credential Verification: </span>
                {certificate.verificationNote}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[#E7E2DA] dark:border-[#27272A] bg-[#F2EFE9] dark:bg-[#121214] flex justify-end gap-3">
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-[#27272A] border border-[#D5CFCE] dark:border-[#3F3F46] text-xs font-semibold text-[#1A1A1A] dark:text-[#F4F4F5] rounded hover:bg-[#FAF8F5] dark:hover:bg-[#323238] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open Full Image
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#800020] hover:bg-[#68001a] text-white text-xs font-semibold rounded transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
