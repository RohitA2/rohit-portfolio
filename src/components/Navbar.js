import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navItems = ['skills', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: isMobile ? '1rem 1.25rem' : '1rem 3rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(3,5,10,0.85)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(148,163,184,0.08)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '1.4rem', fontWeight: 800,
          background: 'linear-gradient(135deg,#22d3ee,#818cf8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', letterSpacing: '-0.03em',
        }}>RC.</div>

        {/* Desktop nav */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
            {navItems.map(item => (
              <li key={item}>
                <Link to={item} smooth duration={600} offset={-70}
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--t3)', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = '#22d3ee'}
                  onMouseLeave={e => e.target.style.color = 'var(--t3)'}
                >{item}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop hire btn */}
        {!isMobile && (
          <motion.a href="mailto:rohit7067842611@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(34,211,238,0.35)' }}
            whileTap={{ scale: 0.97 }}
            style={{ background: 'linear-gradient(135deg,#22d3ee,#818cf8)', border: 'none', padding: '0.6rem 1.4rem', borderRadius: '8px', color: '#03050a', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.05em' }}
          >Hire Me →</motion.a>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: '1px solid var(--border2)', borderRadius: 8, padding: '0.5rem 0.7rem', cursor: 'pointer', color: 'var(--t1)', fontSize: '1.2rem' }}
          >{menuOpen ? '✕' : '☰'}</button>
        )}
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
              background: 'rgba(7,12,20,0.97)', backdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--border)',
              padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}
          >
            {navItems.map(item => (
              <Link key={item} to={item} smooth duration={600} offset={-70}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem',
                  color: 'var(--t2)', letterSpacing: '0.12em', textTransform: 'uppercase',
                  cursor: 'pointer', padding: '0.85rem 1rem',
                  borderRadius: 10, border: '1px solid var(--border)',
                  background: 'var(--s1)',
                }}
              >{item}</Link>
            ))}
            <a href="mailto:rohit7067842611@gmail.com"
              style={{ marginTop: '0.5rem', background: 'linear-gradient(135deg,#22d3ee,#818cf8)', border: 'none', padding: '0.9rem 1rem', borderRadius: 10, color: '#03050a', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}
            >Hire Me →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}