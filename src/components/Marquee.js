import React from 'react';

const techs = ['React.js','Node.js','PostgreSQL','AWS EC2','Express.js','Tailwind CSS','MongoDB','Socket.IO','Docker','Nginx + PM2','Stripe API','Firebase','TypeScript','JWT Auth','GraphQL'];

export default function Marquee() {
  const all = [...techs, ...techs];
  return (
    <div style={{
      overflow: 'hidden', borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)', background: 'var(--s1)',
      padding: '1rem 0', position: 'relative', zIndex: 1,
    }}>
      <div style={{
        display: 'flex', gap: '2.5rem',
        animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap',
      }}>
        {all.map((t, i) => (
          <div key={i} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem',
            color: 'var(--t3)', letterSpacing: '0.12em', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--cyan)' }} />
            {t}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
