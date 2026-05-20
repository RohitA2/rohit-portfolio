import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const expData = [
  {
    company: 'BlueWebSpark Technologies Pvt. Ltd.',
    role: 'MERN Stack Developer',
    period: 'Jul 2025 – Present',
    projects: [
      {
        name: '📄 SignLink — E-Signing Platform', url: 'https://signlink.se', urlLabel: '↗ signlink.se',
        bullets: ['Enterprise e-signing with Sweden BankID identity verification', 'Twilio SMS/OTP + Firebase push notifications', 'AWS EC2 + S3 deployment with Nginx & PM2', 'Multi-channel email proposal delivery via SendGrid'],
      },
      {
        name: '🚛 Transport & Logistics ERP', url: 'https://stclogistics.in', urlLabel: '↗ stclogistics.in',
        bullets: ['Full-stack ERP — fleet, driver, booking, analytics', 'Automated PDF generation (Booking Slips, Bilty)', 'Cron Job compliance tracking for licence expiry', 'Financial engine for driver bhatta & idle truck days'],
      },
    ],
  },
  {
    company: 'InstaMD Technology Pvt. Ltd.',
    role: 'MERN Stack Developer',
    period: 'Mar 2025 – Jun 2025',
    projects: [
      {
        name: '🏥 Healthcare CRM', url: 'https://admin.instamd.co.in', urlLabel: '↗ admin.instamd.co.in',
        bullets: ['Internal CRM managing doctors, users & content moderation', 'Analytics dashboards for healthcare platform KPIs', 'AWS SNS/SMS notifications, EC2 + S3 deployment', 'React.js + Bootstrap + MUI + Tailwind responsive UIs'],
      },
    ],
  },
  {
    company: 'CodemegSoft Solutions Pvt. Ltd.',
    role: 'Node.js Developer',
    period: 'Nov 2024 – Mar 2025',
    projects: [
      {
        name: '🌍 Tour & Travel Platform', url: 'https://umrhatours.com', urlLabel: '↗ umrhatours.com',
        bullets: ['Scalable Node.js + Express.js RESTful APIs', 'Stripe payment + NodeMailer notifications', 'Socket.IO real-time chat + Firebase push notifications', 'JWT multi-role auth: Admin / Vendor / User'],
      },
    ],
  },
  {
    company: 'GGITC LLP',
    role: 'Full Stack Developer',
    period: 'Sep 2023 – Oct 2024',
    projects: [
      {
        name: '🏢 Web Agency Projects', url: null, urlLabel: null,
        bullets: ['Multiple client-facing full-stack web applications', 'React.js + Bootstrap + Tailwind responsive UIs', 'Node.js + Express.js with MongoDB, MySQL, PostgreSQL', 'Clean version-controlled codebases via Git & GitHub'],
      },
    ],
  },
];

function ExpCard({ data, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ borderColor: 'rgba(34,211,238,0.25)', boxShadow: '0 25px 70px rgba(0,0,0,0.5)' }}
      style={{
        background: 'var(--s1)', border: '1px solid var(--border)',
        borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '1.75rem 2rem', display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', gap: '1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: 'var(--t1)' }}>{data.company}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--cyan)', fontWeight: 500, marginTop: '0.25rem' }}>{data.role}</div>
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--t3)',
          background: 'var(--s2)', border: '1px solid var(--border2)',
          padding: '0.35rem 0.85rem', borderRadius: '100px', whiteSpace: 'nowrap',
        }}>{data.period}</span>
      </div>

      {/* Body */}
      <div style={{
        padding: '1.75rem 2rem',
        display: 'grid',
        gridTemplateColumns: data.projects.length > 1 ? '1fr 1fr' : '1fr',
        gap: '1.25rem',
      }}>
        {data.projects.map(proj => (
          <div key={proj.name} style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: 14, padding: '1.25rem',
          }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '0.25rem' }}>{proj.name}</div>
            {proj.url && <a href={proj.url} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--green)', marginBottom: '0.75rem', display: 'block' }}>{proj.urlLabel}</a>}
            <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: '0.75rem' }}>
              {proj.bullets.map(b => (
                <li key={b} style={{
                  fontSize: '0.82rem', color: 'var(--t2)', marginBottom: '0.35rem',
                  lineHeight: 1.55, position: 'relative', paddingLeft: '1.25rem',
                }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--cyan)', fontSize: '0.7rem' }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '7rem 0', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="sec-label">03 · Work History</p>
        <h2 className="sec-title">Professional <span className="grad-text">Experience</span></h2>
        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
          {expData.map((d, i) => <ExpCard key={d.company} data={d} index={i} />)}
        </div>
      </div>
    </section>
  );
}
