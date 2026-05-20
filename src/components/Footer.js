import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)', borderTop: '1px solid var(--border)',
      padding: '1.75rem 3rem', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 1, flexWrap: 'wrap', gap: '1rem',
    }}>
      <div style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.1rem',
        background: 'linear-gradient(135deg,#22d3ee,#818cf8)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>RC.</div>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>
        Rohit Chakrawarti · MERN Stack Developer · Indore, India
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--t3)' }}>
        Built with ❤️ & ☕
      </span>
    </footer>
  );
}
