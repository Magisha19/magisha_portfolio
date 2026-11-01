import React, { useState } from 'react';
import { PageId, Certificate } from '../types/portfolio';
import { CERTIFICATES_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import {
  Award,
  Search,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Trophy,
  Filter
} from 'lucide-react';

interface CertificationsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCertificate: (cert: Certificate) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({
  onNavigate,
  onOpenCertificate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'Cybersecurity', label: 'Cybersecurity & SOC' },
    { id: 'AI & LLM', label: 'AI & Large Language Models' },
    { id: 'Cloud & IoT', label: 'Cloud & IoT' },
    { id: 'Academic & Honors', label: 'Academic & Honors' },
    { id: 'Professional Skills', label: 'Professional Skills' },
  ];

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    const matchesCat = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuingOrganization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="border-b border-[#E7E2DA] dark:border-[#27272A] pb-8 pt-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
          Verified Credentials
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
          Certifications & Academic Honors
        </h1>
        <p className="text-base text-[#6B7280] dark:text-[#A1A1AA] mt-2 max-w-3xl">
          Original certificates and verified credentials issued by Cisco Networking Academy, NPTEL (IIT Madras & IIT Kharagpur), Mastercard, UNICEF YuWaah, IBM SkillsBuild, and Sriram Engineering College.
        </p>

        {/* Filters and Search Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] dark:bg-[#1F1F24] rounded-lg overflow-x-auto w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-[#2E2E35] text-[#1A1A1A] dark:text-[#F4F4F5] shadow-sm'
                    : 'text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1A1A1A] dark:hover:text-[#F4F4F5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by issuer, title..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-[#18181B] border border-[#E7E2DA] dark:border-[#27272A] rounded-md focus:outline-none focus:border-[#800020] dark:focus:border-[#D4AF37] text-[#1A1A1A] dark:text-[#F4F4F5]"
            />
          </div>
        </div>
      </section>

      {/* KEY ACHIEVEMENTS HIGHLIGHT STRIP */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37] flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            Scholastic & Competitive Honors
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
            Featured Honors & Recognitions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((ach, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#800020] dark:text-[#D4AF37] font-bold block">
                  {ach.rankOrHonor} · {ach.date}
                </span>
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F4F4F5]">
                  {ach.title}
                </h3>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
                  {ach.organization}
                </p>
                <p className="text-xs text-[#555555] dark:text-[#D4D4D8] leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {ach.certificateImage && (
                <button
                  onClick={() => {
                    const found = CERTIFICATES_DATA.find((c) => c.image === ach.certificateImage);
                    if (found) onOpenCertificate(found);
                    else if (ach.certificateImage) {
                      onOpenCertificate({
                        id: `ach-${idx}`,
                        name: ach.title,
                        issuingOrganization: ach.organization,
                        completionDate: ach.date,
                        category: 'Academic & Honors',
                        image: ach.certificateImage,
                        description: ach.description,
                        tags: [ach.category, ach.rankOrHonor],
                      });
                    }
                  }}
                  className="pt-2 text-xs text-[#800020] dark:text-[#D4AF37] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  View Original Certificate Image →
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES GALLERY GRID */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
            Certificate Gallery ({filteredCerts.length})
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
            Verified Certificates & Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onOpenCertificate(cert)}
              className="group bg-white dark:bg-[#18181B] rounded-xl overflow-hidden border border-[#E7E2DA] dark:border-[#27272A] hover:border-[#800020]/40 dark:hover:border-[#D4AF37]/50 shadow-sm cursor-pointer transition-all duration-200 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] bg-[#121214] overflow-hidden flex items-center justify-center p-2">
                <img
                  src={cert.image}
                  alt={cert.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono px-2 py-0.5 bg-black/80 backdrop-blur-sm text-white rounded">
                  {cert.category}
                </span>
                {cert.score && (
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-mono font-bold px-2 py-0.5 bg-[#800020] text-white rounded">
                    Score: {cert.score}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F4F4F5] group-hover:text-[#800020] dark:group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium">
                    {cert.issuingOrganization}
                  </p>
                  <p className="text-xs text-[#555555] dark:text-[#D4D4D8] line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E2DA] dark:border-[#27272A] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#71717A]">
                    {cert.completionDate}
                  </span>
                  <span className="text-xs font-semibold text-[#800020] dark:text-[#D4AF37] group-hover:underline inline-flex items-center gap-1">
                    Expand
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
