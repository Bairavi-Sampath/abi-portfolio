import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Check, Copy, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedDirectAction, setSubmittedDirectAction] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto generation with prefilled fields
    const subjectLine = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.contactEmail}?subject=${subjectLine}&body=${bodyContent}`;
    setSubmittedDirectAction(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#171A20] border-t border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              CONTACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
            Let's Connect and Create Something Meaningful.
          </h2>
          <p className="mt-3 text-base text-[#A6ABB5]">
            "I'm always interested in learning, exploring ideas and connecting with people who enjoy building useful things."
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-2xl bg-[#1C2027] border border-[#2A2F38] shadow-lg space-y-6">
              <h3 className="text-base font-bold text-[#F5F5F2]">
                Contact Coordinates
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#14171E] border border-[#2A2F38] text-[#F5A623] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-[#A6ABB5] block">Direct Email</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.contactEmail}`}
                    className="text-sm font-semibold text-[#F5F5F2] hover:text-[#F5A623] transition-colors break-all"
                  >
                    {PERSONAL_INFO.contactEmail}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="mt-1 text-[11px] text-[#A6ABB5] hover:text-[#F5F5F2] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#14171E] border border-[#2A2F38] text-[#F5A623] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#A6ABB5] block">Academic Campus / Location</span>
                  <span className="text-sm font-semibold text-[#F5F5F2]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#14171E] border border-[#2A2F38] text-[#F5A623] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#A6ABB5] block">Phone Contact</span>
                  <a 
                    href={`tel:${PERSONAL_INFO.contactPhone}`}
                    className="text-sm font-mono text-[#F5F5F2] hover:text-[#F5A623] transition-colors"
                  >
                    {PERSONAL_INFO.contactPhone}
                  </a>
                  <span className="text-[10px] text-[#A6ABB5]/70 block mt-0.5">
                    {PERSONAL_INFO.contactPhoneNote}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Profile Matrix */}
            <div className="p-6 rounded-2xl bg-[#1C2027] border border-[#2A2F38] shadow-lg">
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#A6ABB5] mb-4">
                Verified Online Profiles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <div key={link.name}>
                    {link.isConfigured ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#14171E] border border-[#2A2F38] hover:border-[#F5A623]/50 transition-colors group"
                      >
                        <span className="text-xs font-medium text-[#F5F5F2] group-hover:text-[#F5A623]">
                          {link.name}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#A6ABB5] group-hover:text-[#F5A623]" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#14171E]/60 border border-dashed border-[#2A2F38] text-[#A6ABB5]">
                        <span className="text-xs">{link.name}</span>
                        <span className="text-[10px] font-mono text-[#A6ABB5]/60">Pending</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#1C2027] border border-[#2A2F38] p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-[#F5F5F2] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#A6ABB5] mb-6">
                Fill in the details below. This form triggers your local email client with your message pre-composed.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-[#F5F5F2] mb-1.5">
                    Your Name <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priyadharshini"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border text-sm text-[#F5F5F2] placeholder-[#A6ABB5]/40 focus:outline-none transition-colors ${
                      errors.name 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-[#2A2F38] focus:border-[#F5A623]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-[#F5F5F2] mb-1.5">
                    Your Email Address <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border text-sm text-[#F5F5F2] placeholder-[#A6ABB5]/40 focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-[#2A2F38] focus:border-[#F5A623]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-[#F5F5F2] mb-1.5">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Design collaboration or project inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border border-[#2A2F38] focus:border-[#F5A623] text-sm text-[#F5F5F2] placeholder-[#A6ABB5]/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#F5F5F2] mb-1.5">
                    Message <span className="text-[#F5A623]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your thoughts, opportunity, or feedback..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border text-sm text-[#F5F5F2] placeholder-[#A6ABB5]/40 focus:outline-none transition-colors resize-none ${
                      errors.message 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-[#2A2F38] focus:border-[#F5A623]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-xl transition-all cursor-pointer shadow-lg shadow-[#F5A623]/15 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch Email Client</span>
                  </button>
                </div>

                {/* Genuine Fallback Feedback */}
                {submittedDirectAction && (
                  <div className="p-3.5 rounded-lg bg-[#14171E] border border-cyan-500/40 text-xs text-[#A6ABB5] space-y-1">
                    <p className="text-[#F5F5F2] font-semibold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Email client launched with your message pre-formatted!
                    </p>
                    <p>
                      If your default mail client didn't launch automatically, simply write directly to{' '}
                      <a href={`mailto:${PERSONAL_INFO.contactEmail}`} className="text-[#F5A623] underline">
                        {PERSONAL_INFO.contactEmail}
                      </a>.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
