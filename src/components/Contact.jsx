import React, { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const fieldClass =
  'w-full bg-transparent border-0 border-b border-gray-800 rounded-none px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors';

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
      const response = await fetch('https://formspree.io/f/xgvlranb', {
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
          gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Portfolio Contact Form',
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

  const contactRows = [
    {
      label: 'Email',
      value: 'rithvikpanchumarthi@gmail.com',
      href: 'mailto:rithvikpanchumarthi@gmail.com',
    },
    { label: 'Location', value: 'Minneapolis, MN, USA', href: null },
    {
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/rithvikpanchumarthi/',
    },
    {
      label: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com/RithvikPanchumarthi',
    },
    {
      label: 'Training & Certifications',
      value: 'Linktree',
      href: 'https://linktr.ee/rithvikpanchumarthi',
    },
    {
      label: 'Tableau Public',
      value: 'Profile',
      href: 'https://public.tableau.com/app/profile/rithvik.sai.panchumarthi',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeader label="Contact" />

        <Reveal>
          <h2 className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8">
            Get in touch
          </h2>
        </Reveal>

        <Reveal>
          <div className="w-full h-px bg-gray-700 mb-12 lg:mb-16" />
        </Reveal>

        <Reveal className="mb-12 lg:mb-16 max-w-2xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            INTERESTED IN COLLABORATING
            <br />
            OR DISCUSSING DATA
            <br />
            ENGINEERING OPPORTUNITIES?
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            Fill out the form and I&apos;ll get back to you as soon as possible.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-gray-500 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-gray-500 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-gray-500 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs tracking-widest uppercase text-gray-500 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${fieldClass} resize-none`}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm tracking-widest uppercase text-white hover:opacity-60 transition-opacity underline underline-offset-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-sm text-gray-300 border-l border-white pl-4">
                Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-sm text-gray-300 border-l border-gray-500 pl-4">
                Sorry, there was an error sending your message. Please try again or contact me directly.
              </p>
            )}
          </form>

          <div className="space-y-0 max-w-2xl">
            {contactRows.map((row, index) => {
              const inner = (
                <>
                  <span className="text-sm text-gray-400 tracking-widest uppercase">{row.label}</span>
                  <span className="text-gray-500 group-hover:text-white transition-colors flex items-center gap-3">
                    {row.value}
                    {row.href && <span aria-hidden="true">↗</span>}
                  </span>
                </>
              );

              const rowClass =
                'flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4';

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
            <div className="border-t border-gray-800" />
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Or reach me directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:rithvikpanchumarthi@gmail.com"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              rithvikpanchumarthi@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rithvikpanchumarthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RithvikPanchumarthi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal
          as="footer"
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Rithvik Panchumarthi. Built with React &amp; Tailwind CSS.
            </p>
            <p className="text-xs text-gray-600 mt-2 max-w-xl">
              &quot;Data is the new oil, but unlike oil, data is reusable and grows more valuable with use.&quot;
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/rithvikpanchumarthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-white transition-colors underline underline-offset-4"
          >
            Follow me on LinkedIn for data engineering updates
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
