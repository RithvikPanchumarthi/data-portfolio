import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const copy = portfolioData.site.contact;
const fields = copy.fields;

const fieldClass =
  'w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-accent transition-colors';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(copy.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        if (typeof gtag !== 'undefined') {
          gtag('event', copy.analytics.event, {
            event_category: copy.analytics.category,
            event_label: copy.analytics.label,
          });
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactRows = copy.rows;

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeader label={copy.label} />

        <Reveal>
          <h2 className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8 text-foreground">
            {copy.heading}
          </h2>
        </Reveal>

        <Reveal>
          <div className="w-full h-px bg-border mb-12 lg:mb-16" />
        </Reveal>

        <Reveal className="mb-12 lg:mb-16 max-w-2xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-tight mb-4">
            {copy.promptLines.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h3>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            {copy.promptNote}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {fields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder={fields.name.placeholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder={fields.email.placeholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {fields.subject.label}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder={fields.subject.placeholder}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {fields.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${fieldClass} resize-none`}
                placeholder={fields.message.placeholder}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors underline underline-offset-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? copy.sendingLabel : copy.submitLabel}
            </button>

            {submitStatus === 'success' && (
              <p className="text-sm text-muted-foreground border-l border-accent pl-4">
                {copy.successMessage}
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-sm text-muted-foreground border-l border-muted-foreground pl-4">
                {copy.errorMessage}
              </p>
            )}
          </form>

          <div className="space-y-0 max-w-2xl">
            {contactRows.map((row, index) => {
              const inner = (
                <>
                  <span className="text-sm text-muted-foreground tracking-widest uppercase">{row.label}</span>
                  <span className="text-muted-foreground group-hover:text-accent transition-colors flex items-center gap-3">
                    {row.value}
                    {row.href && <span aria-hidden="true">↗</span>}
                  </span>
                </>
              );

              const rowClass =
                'flex items-center justify-between border-t border-border py-5 md:py-6 group hover:bg-secondary transition-colors px-4 -mx-4';

              return row.href ? (
                <Reveal as="a" key={row.label} href={row.href} delay={index * 0.08} className={rowClass}
                  {...(row.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {inner}
                </Reveal>
              ) : (
                <Reveal key={row.label} delay={index * 0.08} className={rowClass}>
                  {inner}
                </Reveal>
              );
            })}
            <div className="border-t border-border" />
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6 lg:mb-8 tracking-widest uppercase">
            {copy.directLabel}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            {copy.directLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-lg lg:text-xl text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="footer"
          className="mt-24 lg:mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {copy.footerName}. {copy.footerCredit}
          </p>
          <a
            href={portfolioData.site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
          >
            {copy.linkedinCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
