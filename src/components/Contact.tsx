import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Check, Copy, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

// Web3Forms configuration: uses env variable if present, falling back to user's access key
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'a85abebb-04ce-4acd-ab6d-5de5e5514a3b';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    // Reset submission feedback banner once user starts modifying after an error
    if (status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    if (status === 'submitting') return;

    setStatus('submitting');
    setStatusMessage('');

    // Pre-format email subject with default fallback
    const subjectLine = formData.subject.trim()
      ? `New Portfolio Contact Message: ${formData.subject.trim()}`
      : 'New Portfolio Contact Message';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: subjectLine,
          message: formData.message.trim(),
          botcheck: '', // Honeypot spam prevention
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Thank you! Your message has been sent successfully. I will get back to you soon.');
        // Reset form fields upon successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        setStatus('error');
        setStatusMessage(
          data.message || 'Submission failed. Please check your details and try again, or reach out via direct email.'
        );
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      setStatus('error');
      setStatusMessage('A network error occurred while submitting the form. Please check your connection or send a direct email.');
    }
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
            Let's Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A6ABB5] leading-relaxed">
            Open for internships, student projects, and UI/UX design opportunities. Have an idea or project in mind? Let's connect and bring it to life!
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
                Fill in the details below to reach me directly. Messages are delivered straight to my inbox.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Hidden Fields for Web3Forms configuration and spam protection */}
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-[#F5F5F2] mb-1.5">
                    Full Name <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g. Priyadharshini"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border text-sm text-[#F5F5F2] placeholder-[#A6ABB5]/40 focus:outline-none transition-colors ${
                      errors.name 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-[#2A2F38] focus:border-[#F5A623]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-[#F5F5F2] mb-1.5">
                    Email Address <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="name@domain.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border text-sm text-[#F5F5F2] placeholder-[#A6ABB5]/40 focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-[#2A2F38] focus:border-[#F5A623]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-[#F5F5F2] mb-1.5">
                    Subject <span className="text-[#A6ABB5] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
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
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Share your thoughts, opportunity, or feedback..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border text-sm text-[#F5F5F2] placeholder-[#A6ABB5]/40 focus:outline-none transition-colors resize-none ${
                      errors.message 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-[#2A2F38] focus:border-[#F5A623]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg ${
                      status === 'submitting'
                        ? 'bg-[#F5A623]/70 text-black cursor-not-allowed shadow-none'
                        : 'text-black bg-[#F5A623] hover:bg-[#e0951b] cursor-pointer shadow-[#F5A623]/15 active:scale-95'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Success Feedback Banner */}
                {status === 'success' && (
                  <div 
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 space-y-1.5 transition-all"
                    role="alert"
                  >
                    <div className="flex items-center gap-2 font-semibold text-emerald-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Message Sent Successfully!</span>
                    </div>
                    <p className="text-xs text-emerald-200/90 leading-relaxed">
                      {statusMessage}
                    </p>
                  </div>
                )}

                {/* Error Feedback Banner */}
                {status === 'error' && (
                  <div 
                    className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 space-y-2 transition-all"
                    role="alert"
                  >
                    <div className="flex items-center gap-2 font-semibold text-rose-300 text-sm">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Message Delivery Failed</span>
                    </div>
                    <p className="text-xs text-rose-200/90 leading-relaxed">
                      {statusMessage}
                    </p>
                    <p className="text-xs text-[#A6ABB5] pt-0.5">
                      You can also reach me directly at{' '}
                      <a 
                        href={`mailto:${PERSONAL_INFO.contactEmail}`} 
                        className="text-[#F5A623] hover:underline font-semibold"
                      >
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
