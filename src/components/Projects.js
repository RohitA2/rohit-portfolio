import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tagColors = {
  cy: { bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.2)', color: '#22d3ee' },
  bl: { bg: 'rgba(129,140,248,0.07)', border: 'rgba(129,140,248,0.2)', color: '#818cf8' },
  gr: { bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.2)', color: '#34d399' },
  vi: { bg: 'rgba(192,132,252,0.07)', border: 'rgba(192,132,252,0.2)', color: '#c084fc' },
  ro: { bg: 'rgba(251,113,133,0.07)', border: 'rgba(251,113,133,0.2)', color: '#fb7185' },
  am: { bg: 'rgba(251,191,36,0.07)', border: 'rgba(251,191,36,0.2)', color: '#fbbf24' },
};

const projects = [
  { num: '01', name: 'Transport & Logistics ERP', url: 'https://stclogistics.in', urlLabel: '↗ stclogistics.in', desc: 'Full-stack ERP covering fleet management, booking scheduling, automated PDF generation, Cron-based compliance alerts, and driver financial calculations.', stack: [{ t: 'React.js', c: 'cy' }, { t: 'Node.js', c: 'bl' }, { t: 'PostgreSQL', c: 'gr' }, { t: 'AWS EC2', c: 'vi' }, { t: 'jsPDF', c: 'ro' }] },
  { num: '02', name: 'SignLink E-Signing', url: 'https://signlink.se', urlLabel: '↗ signlink.se', desc: 'Enterprise digital signing with Sweden BankID identity verification, Twilio OTP, Firebase notifications, and full CDN-optimized AWS deployment.', stack: [{ t: 'React.js', c: 'cy' }, { t: 'Express.js', c: 'bl' }, { t: 'PostgreSQL', c: 'gr' }, { t: 'BankID', c: 'vi' }, { t: 'Twilio', c: 'ro' }] },
  { num: '03', name: 'Healthcare CRM', url: 'https://admin.instamd.co.in', urlLabel: '↗ admin.instamd.co.in', desc: 'Internal healthcare CRM managing doctor/user data, admin workflows, analytics dashboards, content moderation, and AWS SNS notifications.', stack: [{ t: 'React.js', c: 'cy' }, { t: 'Node.js', c: 'bl' }, { t: 'MongoDB', c: 'gr' }, { t: 'AWS SNS', c: 'vi' }, { t: 'MUI', c: 'am' }] },
  { num: '04', name: 'Tour & Travel Platform', url: 'https://umrhatours.com', urlLabel: '↗ umrhatours.com', desc: 'Travel booking with Stripe payments, Socket.IO real-time chat, Firebase notifications, package search/filter, and JWT multi-role authentication.', stack: [{ t: 'Node.js', c: 'bl' }, { t: 'PostgreSQL', c: 'gr' }, { t: 'Stripe', c: 'ro' }, { t: 'Socket.IO', c: 'bl' }, { t: 'Firebase', c: 'am' }] },
  { num: '05', name: 'Cab Booking System', url: null, urlLabel: 'Client Project', desc: 'Real-time cab booking with live ride tracking via map APIs, Stripe payments, fare estimation, driver/vehicle management, and a review & rating system.', stack: [{ t: 'React.js', c: 'cy' }, { t: 'Node.js', c: 'bl' }, { t: 'MongoDB', c: 'gr' }, { t: 'Stripe', c: 'ro' }, { t: 'Maps API', c: 'vi' }] },
  { num: '06', name: 'MERN Blog Platform', url: null, urlLabel: 'Client Project', desc: 'Dynamic full-featured blogging platform with CRUD, JWT auth, comment management, category filtering, and clean responsive content creation UI.', stack: [{ t: 'React.js', c: 'cy' }, { t: 'Express.js', c: 'bl' }, { t: 'MongoDB', c: 'gr' }, { t: 'JWT', c: 'vi' }, { t: 'Tailwind', c: 'am' }] },
];

function ProjectCard({ p, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 30px 80px rgba(0,0,0,0.6)', borderColor: 'rgba(34,211,238,0.2)' }}
      style={{
        background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 20,
        padding: '2rem', display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top gradient bar on hover handled via CSS */}
      <div style={{
        fontFamily: "'Syne', sans-serif", fontSize: '3.5rem', fontWeight: 800,
        color: 'rgba(34,211,238,0.06)', lineHeight: 1, marginBottom: '0.75rem',
      }}>{p.num}</div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--t1)' }}>{p.name}</div>
      {p.url
        ? <a href={p.url} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--green)', marginBottom: '1rem', display: 'block' }}>{p.urlLabel}</a>
        : <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--t3)', marginBottom: '1rem', display: 'block' }}>{p.urlLabel}</span>
      }
      <p style={{ fontSize: '0.84rem', color: 'var(--t2)', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>{p.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {p.stack.map(({ t, c }) => {
          const tc = tagColors[c];
          return (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
              letterSpacing: '0.05em', padding: '0.28rem 0.7rem', borderRadius: '100px',
              background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color,
            }}>{t}</span>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 0', background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="sec-label">04 · Featured Work</p>
        <h2 className="sec-title">Projects <span className="grad-text">I've Built</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem', marginTop: '3rem' }}>
          {projects.map((p, i) => <ProjectCard key={p.num} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
