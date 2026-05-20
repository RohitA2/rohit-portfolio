import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  { icon: '⚛️', cat: 'Frontend', color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)', tags: ['React.js','Next.js','TypeScript','Redux','Tailwind CSS','Material UI','Bootstrap'], tc: 'cy' },
  { icon: '⚙️', cat: 'Backend', color: '#818cf8', bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.2)', tags: ['Node.js','Express.js','REST API','GraphQL','Socket.IO','JWT Auth','Cron Jobs'], tc: 'bl' },
  { icon: '🗄️', cat: 'Databases', color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)', tags: ['PostgreSQL','MongoDB','MySQL','Sequelize ORM'], tc: 'gr' },
  { icon: '☁️', cat: 'Cloud & DevOps', color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.2)', tags: ['AWS EC2','AWS S3','AWS IAM','Docker','Nginx','PM2','Linux/Ubuntu'], tc: 'vi' },
  { icon: '🔌', cat: 'Integrations', color: '#fb7185', bg: 'rgba(251,113,133,0.1)', border: 'rgba(251,113,133,0.2)', tags: ['Stripe','Twilio','Firebase','BankID','SendGrid','NodeMailer','jsPDF'], tc: 'ro' },
  { icon: '🛠️', cat: 'Tools & Concepts', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.2)', tags: ['Git/GitHub','Postman','VS Code','DSA','OOP','ERP Systems'], tc: 'am' },
];

const tagColors = {
  cy: { bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.2)', color: '#22d3ee' },
  bl: { bg: 'rgba(129,140,248,0.07)', border: 'rgba(129,140,248,0.2)', color: '#818cf8' },
  gr: { bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.2)', color: '#34d399' },
  vi: { bg: 'rgba(192,132,252,0.07)', border: 'rgba(192,132,252,0.2)', color: '#c084fc' },
  ro: { bg: 'rgba(251,113,133,0.07)', border: 'rgba(251,113,133,0.2)', color: '#fb7185' },
  am: { bg: 'rgba(251,191,36,0.07)', border: 'rgba(251,191,36,0.2)', color: '#fbbf24' },
};

function SkillCard({ icon, cat, color, bg, border, tags, tc, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const tc_ = tagColors[tc];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6, borderColor: color, boxShadow: `0 20px 60px rgba(0,0,0,0.5)` }}
      style={{
        background: 'var(--s1)', border: '1px solid var(--border)',
        borderRadius: 18, padding: '1.75rem', transition: 'border-color 0.3s',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: 12, display: 'flex',
        alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
        fontSize: '1.3rem', background: bg, border: `1px solid ${border}`,
      }}>{icon}</div>
      <div style={{
        fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700,
        marginBottom: '1rem', color: 'var(--t1)',
      }}>{cat}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {tags.map(tag => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.06 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
              letterSpacing: '0.05em', padding: '0.28rem 0.7rem', borderRadius: '100px',
              background: tc_.bg, border: `1px solid ${tc_.border}`, color: tc_.color,
              cursor: 'default',
            }}
          >{tag}</motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 0', background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="sec-label">02 · Expertise</p>
        <h2 className="sec-title">Technical <span className="grad-text">Arsenal</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem', marginTop: '3rem' }}>
          {skillsData.map((s, i) => <SkillCard key={s.cat} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
