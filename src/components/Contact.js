import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* Animated SVG icons */
const EmailIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    animate={shouldAnimate ? { y: [0, -2, 0] } : {}}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </motion.svg>
);

const PhoneIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    animate={shouldAnimate ? { rotate: [0, 15, -15, 15, 0] } : {}}
    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.51a2 2 0 012.11.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </motion.svg>
);

const GithubIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
    animate={shouldAnimate ? { rotate: [0, 360] } : {}}
    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </motion.svg>
);

const LinkedinIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
    animate={shouldAnimate ? { scale: [1, 1.1, 1] } : {}}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </motion.svg>
);

const WhatsAppIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
    animate={shouldAnimate ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] } : {}}
    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </motion.svg>
);

const contactLinks = [
  {
    icon: EmailIcon, label: 'Email', val: 'rohit7067842611@gmail.com',
    href: 'mailto:rohit7067842611@gmail.com',
    color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)',
  },
  {
    icon: WhatsAppIcon, label: 'WhatsApp', val: '+91 7067842611',
    href: 'https://wa.me/917067842611?text=Hi%20Rohit!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.',
    color: '#25D366', bg: 'rgba(37,211,102,0.1)', border: 'rgba(37,211,102,0.25)',
  },
  {
    icon: PhoneIcon, label: 'Phone', val: '+91 7067842611',
    href: 'tel:7067842611',
    color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)',
  },
  {
    icon: GithubIcon, label: 'GitHub', val: 'github.com/Rohit8426',
    href: 'https://github.com/Rohit8426',
    color: '#818cf8', bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.2)',
  },
  {
    icon: LinkedinIcon, label: 'LinkedIn', val: 'rohit-chakrawarti',
    href: 'https://www.linkedin.com/in/rohit-chakrawarti-976106208',
    color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.2)',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredItem, setHoveredItem] = React.useState(null);

  return (
    <section id="contact" style={{ padding: '7rem 0', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="sec-label">05 · Let's Connect</p>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start', marginTop: '3rem' }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{
              fontFamily: "'Clash Display', 'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 700,
              letterSpacing: '-0.04em', lineHeight: 1,
            }}>
              Let's build{' '}
              <motion.span
                className="grad-text"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: '200%' }}
              >something great.</motion.span>
            </h2>
            <p style={{
              color: 'var(--t2)', marginTop: '1.25rem', fontSize: '1rem',
              maxWidth: 380, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.75,
            }}>
              Open to freelance projects, remote work, and exciting opportunities worldwide. Let's talk!
            </p>

            {/* WhatsApp CTA banner */}
            <motion.a
              href="https://wa.me/917067842611?text=Hi%20Rohit!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(37,211,102,0.25)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.1rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.06))',
                border: '1px solid rgba(37,211,102,0.35)', borderRadius: 16,
                marginTop: '2rem', marginBottom: '0.5rem',
                color: '#25D366', cursor: 'pointer', transition: 'all 0.3s',
              }}
            >
              <motion.div
                style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: 'rgba(37,211,102,0.15)',
                  border: '1px solid rgba(37,211,102,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <WhatsAppIcon animate={true} />
              </motion.div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.92rem', color: '#25D366' }}>
                  Start WhatsApp Chat
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'rgba(37,211,102,0.7)', marginTop: '0.1rem' }}>
                  Typically responds within a few hours
                </div>
              </div>
              <motion.span
                style={{ marginLeft: 'auto', fontSize: '1.2rem' }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >→</motion.span>
            </motion.a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
              {contactLinks.map((cl, i) => {
                const Icon = cl.icon;
                const isHovered = hoveredItem === i;
                return (
                  <motion.a
                    key={cl.label} href={cl.href}
                    target={cl.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    whileHover={{ x: 8, borderColor: cl.color, background: cl.bg }}
                    onHoverStart={() => setHoveredItem(i)}
                    onHoverEnd={() => setHoveredItem(null)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '0.9rem 1.25rem', background: 'var(--s1)',
                      border: '1px solid var(--border)', borderRadius: 14,
                      transition: 'all 0.3s', color: 'var(--t1)',
                    }}
                  >
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: cl.bg, border: `1px solid ${cl.border}`,
                      color: cl.color, flexShrink: 0,
                    }}>
                      <Icon animate={isHovered} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.62rem',
                        color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.08em',
                      }}>{cl.label}</div>
                      <div style={{ fontSize: '0.86rem', color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif" }}>{cl.val}</div>
                    </div>
                    <motion.span
                      style={{ marginLeft: 'auto', color: cl.color, opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -5 }}
                      transition={{ duration: 0.2 }}
                    >↗</motion.span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Education card */}
            <motion.div whileHover={{ borderColor: 'var(--border2)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
              style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.75rem', transition: 'all 0.3s' }}
            >
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🎓</motion.span>
                Education
              </div>
              {[
                ['Degree', 'B.Tech — CSE'],
                ['University', 'UIT RGPV, Shivpuri'],
                ['CGPA', '7.64 / 10'],
                ['Batch', '2020 – 2024'],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.55rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.84rem',
                }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>{k}</span>
                  <span style={{ color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif" }}>{v}</span>
                </div>
              ))}
            </motion.div>

            {/* Info card */}
            <motion.div whileHover={{ borderColor: 'var(--border2)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
              style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.75rem', transition: 'all 0.3s' }}
            >
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>📍</motion.span>
                Quick Info
              </div>
              {[
                ['Location', 'Indore, MP'],
                ['Experience', '2+ Years'],
                ['Work Type', 'Remote / Contract'],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.55rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.84rem',
                }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>{k}</span>
                  <span style={{ color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif" }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.55rem 0', fontSize: '0.84rem' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>Status</span>
                <span style={{ color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                  <motion.div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(52,211,153,0.5)', '0 0 0 5px rgba(52,211,153,0)', '0 0 0 0 rgba(52,211,153,0.5)'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Open to Freelance
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}