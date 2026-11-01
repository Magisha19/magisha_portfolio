import React, { useState } from 'react';
import { PageId } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    // Prepare direct mailto URL so user can immediately open in default client if desired
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formState.subject || 'Opportunity'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Magisha,\n\nMy Name: ${formState.name}\nOrganization: ${formState.roleOrCompany}\nContact Email: ${formState.email}\n\nMessage:\n${formState.message}\n`
    );
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Prompt user to open mail client directly
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="border-b border-[#E7E2DA] dark:border-[#27272A] pb-8 pt-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
          Direct Communication
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
          Get in Touch
        </h1>
        <p className="text-base text-[#6B7280] dark:text-[#A1A1AA] mt-2 max-w-3xl">
          Interested in discussing an internship, entry-level SOC / security analyst role, or technical research collaboration? Reach out directly via email, LinkedIn, or send a structured inquiry below.
        </p>
      </section>

      {/* Main Split: Contact Cards vs Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Verified Contact Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Email Quick Action Card */}
          <div className="p-6 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                Primary Direct Channel
              </span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#800020] dark:text-[#D4AF37] hover:underline cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA]">
                Fastest response for interview invitations and recruitment queries.
              </p>
            </div>
          </div>

          {/* Social and Professional Profiles */}
          <div className="p-6 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
              Verified Networks & Location
            </h3>

            <div className="space-y-4 text-xs">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33] hover:border-[#800020] dark:hover:border-[#D4AF37] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5]">LinkedIn</p>
                    <p className="text-[#6B7280] dark:text-[#A1A1AA]">{PERSONAL_INFO.linkedinDisplay}</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#800020] dark:group-hover:text-[#D4AF37]" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33] hover:border-[#800020] dark:hover:border-[#D4AF37] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5]">GitHub</p>
                    <p className="text-[#6B7280] dark:text-[#A1A1AA]">{PERSONAL_INFO.githubDisplay}</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#800020] dark:group-hover:text-[#D4AF37]" />
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33]">
                <Phone className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                <div>
                  <p className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5]">Mobile Contact</p>
                  <p className="text-[#6B7280] dark:text-[#A1A1AA]">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33]">
                <MapPin className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                <div>
                  <p className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5]">Base Location</p>
                  <p className="text-[#6B7280] dark:text-[#A1A1AA]">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Note */}
          <div className="p-4 bg-[#800020]/5 dark:bg-[#800020]/15 rounded-xl border border-[#800020]/20 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Recruitment Availability
            </span>
            <p className="text-xs text-[#555555] dark:text-[#D4D4D8] leading-relaxed">
              Available for full-time graduate opportunities starting mid-2027 and immediate off-campus internships or research engagements. Open to relocation across India as well as remote positions.
            </p>
          </div>

        </div>

        {/* Right Column: Structured Inquiry Form */}
        <div className="lg:col-span-7 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37]">
              Send an Inquiry
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Structured Message Form
            </h2>
            <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA]">
              Submitting pre-formats your inquiry and opens your default mail client directly addressed to Magisha.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Inquiry prepared successfully!</span>
              </div>
              <p>
                Your mail client has been opened with pre-filled details. If it did not open automatically, you can send directly to <span className="font-semibold underline">{PERSONAL_INFO.email}</span>.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-lg text-xs text-rose-800 dark:text-rose-300">
              Please complete all required fields (Name, Email, and Message) before submitting.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5] uppercase tracking-wider text-[11px] block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Anand Sharma"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#1E1E22] border border-[#E7E2DA] dark:border-[#333] rounded-md text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#800020] dark:focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5] uppercase tracking-wider text-[11px] block">
                  Your Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. anand@company.com"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#1E1E22] border border-[#E7E2DA] dark:border-[#333] rounded-md text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#800020] dark:focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5] uppercase tracking-wider text-[11px] block">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formState.roleOrCompany}
                  onChange={(e) => setFormState({ ...formState, roleOrCompany: e.target.value })}
                  placeholder="e.g. CyberSec Systems / Recruiter"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#1E1E22] border border-[#E7E2DA] dark:border-[#333] rounded-md text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#800020] dark:focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5] uppercase tracking-wider text-[11px] block">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. SOC Analyst (L1) Opportunity"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#1E1E22] border border-[#E7E2DA] dark:border-[#333] rounded-md text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#800020] dark:focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5] uppercase tracking-wider text-[11px] block">
                Message & Details *
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe role requirements, team details, or collaboration scope..."
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#1E1E22] border border-[#E7E2DA] dark:border-[#333] rounded-md text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#800020] dark:focus:border-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded-md transition-all shadow-sm cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              {isSubmitting ? 'Formatting Message...' : 'Send Message to Magisha'}
            </button>
          </form>
        </div>

      </section>

    </div>
  );
};
