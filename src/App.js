import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── ANIMATED SVG ICON COMPONENTS ─── */
const HeartIcon = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    animate={{ scale: [1, 1.3, 1], fill: ['none', '#fb7185', 'none'] }}
    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    style={{ color: '#fb7185', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </motion.svg>
);

const CoffeeIcon = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ color: '#fbbf24', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <motion.path d="M18 8h1a4 4 0 0 1 0 8h-1"
      animate={{ pathLength: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <motion.line x1="6" y1="1" x2="6" y2="4"
      animate={{ scaleY: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
    />
    <motion.line x1="10" y1="1" x2="10" y2="4"
      animate={{ scaleY: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
    />
    <motion.line x1="14" y1="1" x2="14" y2="4"
      animate={{ scaleY: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
    />
  </motion.svg>
);

const RocketIcon = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ color: '#818cf8', display: 'inline-block', verticalAlign: 'middle' }}
    animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </motion.svg>
);

const StarIcon = () => (
  <motion.svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
    style={{ color: '#fbbf24', display: 'inline-block', verticalAlign: 'middle' }}
    animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </motion.svg>
);

const CodeBracketIcon = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <motion.polyline points="16 18 22 12 16 6" animate={{ x: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.polyline points="8 6 2 12 8 18" animate={{ x: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </motion.svg>
);

const ServerPulseIcon = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <motion.circle cx="6" cy="6" r="1.5" fill="currentColor" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
    <motion.circle cx="6" cy="18" r="1.5" fill="currentColor" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }} />
  </motion.svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EmailIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    animate={shouldAnimate ? { y: [0, -3, 0] } : {}}
    transition={{ duration: 1.5, repeat: Infinity }}
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

const GithubAnimIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
    animate={shouldAnimate ? { rotate: [0, 360] } : {}}
    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </motion.svg>
);

const LinkedinAnimIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
    animate={shouldAnimate ? { scale: [1, 1.15, 1] } : {}}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </motion.svg>
);

const WhatsAppAnimIcon = ({ animate: shouldAnimate }) => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
    animate={shouldAnimate ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] } : {}}
    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </motion.svg>
);

/* ─── HOOKS ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return isMobile;
}

/* ─── PARTICLE CANVAS ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], animId;
    const mouse = { x: -999, y: -999 };
    const COLORS = ['#22d3ee', '#818cf8', '#c084fc', '#34d399'];
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.5 + 0.5; this.a = Math.random() * 0.4 + 0.1;
        this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.c; ctx.globalAlpha = this.a; ctx.fill(); ctx.globalAlpha = 1;
      }
    }
    for (let i = 0; i < 120; i++) particles.push(new Particle());
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${(1 - d / 100) * 0.08})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
        const md = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
        if (md < 160) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(129,140,248,${(1 - md / 160) * 0.18})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    const onMouseMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMouseMove);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMouseMove); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}

/* ─── NAVBAR ─── */
const navItems = ['skills', 'experience', 'projects', 'contact'];
const navIcons = {
  skills: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  experience: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
  projects: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" /></svg>,
  contact: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <>
      <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '0.85rem 1.25rem' : '0.9rem 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(3,5,10,0.95)' : 'rgba(3,5,10,0.75)',
        backdropFilter: 'blur(28px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(148,163,184,0.12)' : 'rgba(148,163,184,0.05)'}`,
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.4s',
      }}>
        <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg,#22d3ee,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            RC
            <motion.span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', marginLeft: 2 }} animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map(item => (
              <li key={item}>
                <motion.div whileHover={{ background: 'rgba(34,211,238,0.07)' }} onClick={() => scrollTo(item)} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'var(--t3)', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.3s', padding: '0.5rem 0.9rem', borderRadius: '8px', border: '1px solid transparent' }}>
                  {navIcons[item]}{item}
                </motion.div>
              </li>
            ))}
          </ul>
        )}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <motion.a href="https://wa.me/917067842611" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, borderColor: '#25D366', color: '#25D366' }} whileTap={{ scale: 0.97 }} style={{ background: 'transparent', border: '1px solid rgba(37,211,102,0.3)', padding: '0.5rem 1rem', borderRadius: '8px', color: '#25D366', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.25s' }}>
              <WhatsAppIcon size={14} /> Chat
            </motion.a>
            <motion.a href="mailto:rohit7067842611@gmail.com" whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(34,211,238,0.35)' }} whileTap={{ scale: 0.97 }} style={{ background: 'linear-gradient(135deg,#22d3ee,#818cf8)', border: 'none', padding: '0.55rem 1.3rem', borderRadius: '8px', color: '#03050a', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.04em' }}>Hire Me →</motion.a>
          </div>
        )}
        {isMobile && (
          <motion.button onClick={() => setMenuOpen(!menuOpen)} whileTap={{ scale: 0.95 }} style={{ background: 'none', border: '1px solid var(--border2)', borderRadius: 8, padding: '0.45rem 0.65rem', cursor: 'pointer', color: 'var(--t1)' }}>
            <AnimatePresence mode="wait">
              {menuOpen ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} style={{ display: 'block', fontSize: '1.1rem' }}>✕</motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} style={{ display: 'block', fontSize: '1.1rem' }}>☰</motion.span>}
            </AnimatePresence>
          </motion.button>
        )}
      </motion.nav>
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div initial={{ opacity: 0, y: -20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.97 }} transition={{ duration: 0.2 }} style={{ position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99, background: 'rgba(7,12,20,0.97)', backdropFilter: 'blur(28px)', borderBottom: '1px solid var(--border)', padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} onClick={() => { scrollTo(item); setMenuOpen(false); }} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: 'var(--t2)', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', padding: '0.85rem 1rem', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--s1)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: 'var(--cyan)' }}>{navIcons[item]}</span>{item}
              </motion.div>
            ))}
            <motion.a href="https://wa.me/917067842611" target="_blank" rel="noreferrer" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.05 }} style={{ marginTop: '0.25rem', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', padding: '0.9rem 1rem', borderRadius: 10, color: '#25D366', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <WhatsAppIcon /> WhatsApp Chat
            </motion.a>
            <motion.a href="mailto:rohit7067842611@gmail.com" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (navItems.length + 1) * 0.05 }} style={{ background: 'linear-gradient(135deg,#22d3ee,#818cf8)', border: 'none', padding: '0.9rem 1rem', borderRadius: 10, color: '#03050a', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>Hire Me →</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── HERO ─── */
const stats = [
  { n: '2+', l: 'Years Exp', icon: '📅' },
  { n: '4', l: 'Companies', icon: '🏢' },
  { n: '10+', l: 'Projects', icon: '🚀' },
  { n: 'AWS', l: 'Deployed', icon: '☁️' },
];

function TypeWriter({ sequences }) {
  const [text, setText] = useState('');
  const [seqIdx, setSeqIdx] = useState(0);
  const [phase, setPhase] = useState('typing');
  const [charIdx, setCharIdx] = useState(0);
  useEffect(() => {
    const current = sequences[seqIdx];
    if (phase === 'typing') {
      if (charIdx < current.length) {
        const t = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 35);
        return () => clearTimeout(t);
      } else {
        setSeqIdx(i => (i + 1) % sequences.length);
        setPhase('typing');
      }
    }
  }, [charIdx, phase, seqIdx]);
  return <span>{text}<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>|</motion.span></span>;
}

function Hero() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, t = 0;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      t += 0.003;
      [
        { x: width * 0.15 + Math.sin(t * 0.7) * 100, y: height * 0.3 + Math.cos(t * 0.5) * 70, r: 380, c: 'rgba(34,211,238,0.09)' },
        { x: width * 0.85 + Math.cos(t * 0.5) * 110, y: height * 0.55 + Math.sin(t * 0.7) * 80, r: 320, c: 'rgba(129,140,248,0.08)' },
        { x: width * 0.5 + Math.sin(t * 0.9) * 70, y: height * 0.85 + Math.cos(t * 0.4) * 60, r: 260, c: 'rgba(192,132,252,0.07)' },
      ].forEach(b => {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.c); g.addColorStop(1, 'transparent');
        ctx.fillStyle = g; ctx.fillRect(0, 0, width, height);
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  const fadePad = isMobile ? '0 1.25rem' : '0 3rem';

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <video ref={videoRef} src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" autoPlay muted loop playsInline onLoadedData={() => setVideoLoaded(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: videoLoaded ? 0.18 : 0, transition: 'opacity 1.2s ease', filter: 'saturate(0.6) brightness(0.5)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(to bottom, rgba(3,5,10,0.55) 0%, rgba(3,5,10,0.35) 40%, rgba(3,5,10,0.60) 75%, rgba(3,5,10,0.92) 100%)' }} />
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: fadePad, width: '100%', position: 'relative', zIndex: 5 }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '100px', padding: '0.45rem 1.1rem', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', color: 'var(--green)', letterSpacing: '0.06em', marginBottom: '1.5rem' }}>
          <motion.div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} animate={{ boxShadow: ['0 0 0 0 rgba(52,211,153,0.5)', '0 0 0 7px rgba(52,211,153,0)', '0 0 0 0 rgba(52,211,153,0.5)'] }} transition={{ duration: 1.5, repeat: Infinity }} />
          Available for Freelance
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', color: 'var(--t3)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <motion.span style={{ color: 'var(--cyan)' }} animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}><CodeBracketIcon /></motion.span>
          MERN Stack · AWS · Full Stack Developer
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 'clamp(3rem,14vw,5rem)' : 'clamp(3.5rem,8.5vw,7.5rem)', fontWeight: 690, letterSpacing: '-0.04em', lineHeight: 0.92, marginBottom: '1.6rem', textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}>
          Rohit
          <motion.span style={{ display: 'block', background: 'linear-gradient(135deg,#22d3ee 0%,#818cf8 50%,#c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200%' }} animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }} transition={{ duration: 5, repeat: Infinity }}>
            Chakrawarti
          </motion.span>
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', color: 'var(--t2)', maxWidth: 580, lineHeight: 1.8, marginBottom: '2.8rem', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--t2)' }}>
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><ServerPulseIcon /></motion.span>
            I build
          </span>
          <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>
            <TypeWriter sequences={['scalable REST APIs', 'React.js dashboards', 'AWS EC2 deployments', 'real-time Socket.IO apps', 'PostgreSQL backends']} />
          </span>
          — clean code, production ready.
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <motion.button onClick={() => scrollTo('projects')} whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(34,211,238,0.4)' }} whileTap={{ scale: 0.97 }} style={{ background: 'linear-gradient(135deg,#22d3ee,#818cf8)', border: 'none', padding: isMobile ? '0.75rem 1.5rem' : '0.85rem 2rem', borderRadius: '12px', color: '#03050a', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer' }}>View Projects →</motion.button>
          <motion.a href="https://wa.me/917067842611" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, borderColor: '#25D366', boxShadow: '0 8px 30px rgba(37,211,102,0.2)' }} whileTap={{ scale: 0.97 }} style={{ background: 'rgba(37,211,102,0.07)', color: '#25D366', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', letterSpacing: '0.04em', padding: isMobile ? '0.75rem 1.25rem' : '0.85rem 1.75rem', borderRadius: '12px', border: '1px solid rgba(37,211,102,0.35)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.25s' }}>
            <motion.span animate={{ rotate: [0, 10, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}><WhatsAppIcon /></motion.span>
            WhatsApp
          </motion.a>
          <motion.a href="https://github.com/Rohit8426" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, borderColor: '#22d3ee', color: '#22d3ee' }} whileTap={{ scale: 0.97 }} style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', letterSpacing: '0.04em', padding: isMobile ? '0.75rem 1.25rem' : '0.85rem 1.75rem', borderRadius: '12px', border: '1px solid var(--border2)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', backdropFilter: 'blur(8px)' }}>
            <GithubIcon /> GitHub
          </motion.a>
          {!isMobile && (
            <motion.a href="https://www.linkedin.com/in/rohit-chakrawarti-976106208" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, borderColor: '#818cf8', color: '#818cf8' }} whileTap={{ scale: 0.97 }} style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', letterSpacing: '0.04em', padding: '0.85rem 1.75rem', borderRadius: '12px', border: '1px solid var(--border2)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', backdropFilter: 'blur(8px)' }}>
              <LinkedinIcon /> LinkedIn
            </motion.a>
          )}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(148,163,184,0.1)', borderRadius: '18px', overflow: 'hidden', backdropFilter: 'blur(16px)' }}>
          {stats.map(({ n, l, icon }, i) => (
            <motion.div key={l} whileHover={{ background: 'rgba(255,255,255,0.06)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.08 }} style={{ background: 'rgba(3,5,10,0.55)', padding: isMobile ? '1.1rem 0.5rem' : '1.6rem', textAlign: 'center', backdropFilter: 'blur(20px)' }}>
              <motion.div style={{ fontSize: isMobile ? '1rem' : '1.4rem', marginBottom: '0.4rem' }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}>{icon}</motion.div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? '1.3rem' : '2rem', fontWeight: 800, background: 'linear-gradient(135deg,#22d3ee,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: isMobile ? '0.55rem' : '0.65rem', color: 'var(--t3)', letterSpacing: '0.1em', marginTop: '0.35rem', textTransform: 'uppercase' }}>{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', zIndex: 10 }} animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      </motion.div>
    </section>
  );
}

/* ─── MARQUEE ─── */
const techs = [
  { name: 'React.js', icon: '⚛️' }, { name: 'Node.js', icon: '🟢' }, { name: 'PostgreSQL', icon: '🐘' },
  { name: 'AWS EC2', icon: '☁️' }, { name: 'Express.js', icon: '⚙️' }, { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' }, { name: 'Socket.IO', icon: '🔌' }, { name: 'Docker', icon: '🐳' },
  { name: 'Nginx + PM2', icon: '🚀' }, { name: 'Stripe API', icon: '💳' }, { name: 'Firebase', icon: '🔥' },
  { name: 'TypeScript', icon: '📘' }, { name: 'JWT Auth', icon: '🔐' }, { name: 'GraphQL', icon: '💜' },
];

function Marquee() {
  const all = [...techs, ...techs, ...techs];
  //Rohit Sharma
  // rohit chakrawarti
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--s1)', padding: '1.1rem 0', position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2, background: 'linear-gradient(to right, var(--s1), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2, background: 'linear-gradient(to left, var(--s1), transparent)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', gap: '2.5rem', animation: 'marquee 35s linear infinite', whiteSpace: 'nowrap' }}>
        {all.map((t, i) => (
          <div key={i} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.74rem', color: 'var(--t3)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <motion.span style={{ display: 'inline-block', fontSize: '1rem' }} animate={{ y: [0, -3, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: (i % techs.length) * 0.15 }}>{t.icon}</motion.span>
            {t.name}
            <motion.div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(34,211,238,0.4)' }} animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
}

/* ─── SKILLS ─── */
const skillsData = [
  { cat: 'Frontend', color: '#22d3ee', border: 'rgba(34,211,238,0.2)', bg: 'rgba(34,211,238,0.06)', skills: [{ name: 'React.js', level: 92 }, { name: 'TypeScript', level: 78 }, { name: 'Tailwind CSS', level: 88 }, { name: 'Next.js', level: 72 }] },
  { cat: 'Backend', color: '#818cf8', border: 'rgba(129,140,248,0.2)', bg: 'rgba(129,140,248,0.06)', skills: [{ name: 'Node.js', level: 90 }, { name: 'Express.js', level: 88 }, { name: 'GraphQL', level: 68 }, { name: 'Socket.IO', level: 82 }] },
  { cat: 'Database', color: '#34d399', border: 'rgba(52,211,153,0.2)', bg: 'rgba(52,211,153,0.06)', skills: [{ name: 'PostgreSQL', level: 85 }, { name: 'MongoDB', level: 88 }, { name: 'MySQL', level: 80 }, { name: 'Redis', level: 65 }] },
  { cat: 'DevOps & Cloud', color: '#c084fc', border: 'rgba(192,132,252,0.2)', bg: 'rgba(192,132,252,0.06)', skills: [{ name: 'AWS EC2 + S3', level: 82 }, { name: 'Nginx + PM2', level: 80 }, { name: 'Docker', level: 70 }, { name: 'Git & GitHub', level: 92 }] },
];

function SkillBar({ name, level, color, delay }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} style={{ marginBottom: '0.85rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', color: 'var(--t2)' }}>{name}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color }}>
          <motion.span animate={inView ? { opacity: [0, 1] } : {}} transition={{ duration: 0.3, delay }}>{level}%</motion.span>
        </span>
      </div>
      <div style={{ height: 5, background: 'rgba(148,163,184,0.1)', borderRadius: 3, overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }} style={{ height: '100%', background: `linear-gradient(90deg, ${color}aa, ${color})`, borderRadius: 3 }} />
      </div>
    </div>
  );
}

function Skills() {
  const [titleRef, inView] = useInView(0.1);
  const isMobile = useIsMobile();
  return (
    <section id="skills" style={{ padding: '7rem 0', background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 3rem' }}>
        <p className="sec-label">02 · Technical Arsenal</p>
        <h2 className="sec-title" ref={titleRef}>Skills & <span className="grad-text">Expertise</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
          {skillsData.map((cat, ci) => (
            <motion.div key={cat.cat} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: ci * 0.1 }} whileHover={{ borderColor: cat.border, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }} style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 20, padding: '1.75rem', transition: 'all 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: cat.color }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: cat.color }}>{cat.cat}</span>
              </div>
              {cat.skills.map((s, si) => <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} delay={0.2 + si * 0.1} />)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
const expData = [
  { company: 'BlueWebSpark Technologies Pvt. Ltd.', role: 'MERN Stack Developer', period: 'Jul 2025 – Present', projects: [{ name: '📄 SignLink — E-Signing Platform', url: 'https://signlink.se', urlLabel: '↗ signlink.se', bullets: ['Enterprise e-signing with Sweden BankID identity verification', 'Twilio SMS/OTP + Firebase push notifications', 'AWS EC2 + S3 deployment with Nginx & PM2', 'Multi-channel email proposal delivery via SendGrid'] }, { name: '🚛 Transport & Logistics ERP', url: 'https://stclogistics.in', urlLabel: '↗ stclogistics.in', bullets: ['Full-stack ERP — fleet, driver, booking, analytics', 'Automated PDF generation (Booking Slips, Bilty)', 'Cron Job compliance tracking for licence expiry', 'Financial engine for driver bhatta & idle truck days'] }] },
  { company: 'InstaMD Technology Pvt. Ltd.', role: 'MERN Stack Developer', period: 'Mar 2025 – Jun 2025', projects: [{ name: '🏥 Healthcare CRM', url: 'https://admin.instamd.co.in', urlLabel: '↗ admin.instamd.co.in', bullets: ['Internal CRM managing doctors, users & content moderation', 'Analytics dashboards for healthcare platform KPIs', 'AWS SNS/SMS notifications, EC2 + S3 deployment', 'React.js + Bootstrap + MUI + Tailwind responsive UIs'] }] },
  { company: 'CodemegSoft Solutions Pvt. Ltd.', role: 'Node.js Developer', period: 'Nov 2024 – Mar 2025', projects: [{ name: '🌍 Tour & Travel Platform', url: 'https://umrhatours.com', urlLabel: '↗ umrhatours.com', bullets: ['Scalable Node.js + Express.js RESTful APIs', 'Stripe payment + NodeMailer notifications', 'Socket.IO real-time chat + Firebase push notifications', 'JWT multi-role auth: Admin / Vendor / User'] }] },
  { company: 'GGITC LLP', role: 'Full Stack Developer', period: 'Sep 2023 – Oct 2024', projects: [{ name: '🏢 Web Agency Projects', url: null, urlLabel: null, bullets: ['Multiple client-facing full-stack web applications', 'React.js + Bootstrap + Tailwind responsive UIs', 'Node.js + Express.js with MongoDB, MySQL, PostgreSQL', 'Clean version-controlled codebases via Git & GitHub'] }] },
];

function ExpCard({ data, index }) {
  const [ref, inView] = useInView(0.1);
  const isMobile = useIsMobile();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: index * 0.1 }} whileHover={{ borderColor: 'rgba(34,211,238,0.25)', boxShadow: '0 25px 70px rgba(0,0,0,0.5)' }} style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s' }}>
      <div style={{ padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 800, color: 'var(--t1)' }}>{data.company}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--cyan)', fontWeight: 500, marginTop: '0.25rem' }}>{data.role}</div>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--t3)', background: 'var(--s2)', border: '1px solid var(--border2)', padding: '0.35rem 0.85rem', borderRadius: '100px', whiteSpace: 'nowrap', flexShrink: 0 }}>{data.period}</span>
      </div>
      <div style={{ padding: '1.5rem 1.75rem', display: 'grid', gridTemplateColumns: (!isMobile && data.projects.length > 1) ? '1fr 1fr' : '1fr', gap: '1.25rem' }}>
        {data.projects.map(proj => (
          <div key={proj.name} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem' }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '0.25rem' }}>{proj.name}</div>
            {proj.url && <a href={proj.url} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--green)', marginBottom: '0.75rem', display: 'block' }}>{proj.urlLabel}</a>}
            <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: '0.75rem' }}>
              {proj.bullets.map(b => (
                <li key={b} style={{ fontSize: '0.82rem', color: 'var(--t2)', marginBottom: '0.35rem', lineHeight: 1.55, position: 'relative', paddingLeft: '1.25rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--cyan)', fontSize: '0.7rem' }}>→</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Experience() {
  const isMobile = useIsMobile();
  return (
    <section id="experience" style={{ padding: '7rem 0', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 3rem' }}>
        <p className="sec-label">03 · Work History</p>
        <h2 className="sec-title">Professional <span className="grad-text">Experience</span></h2>
        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
          {expData.map((d, i) => <ExpCard key={d.company} data={d} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ─── */
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
  const [ref, inView] = useInView(0.1);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: (index % 3) * 0.1 }} whileHover={{ y: -8, boxShadow: '0 30px 80px rgba(0,0,0,0.6)', borderColor: 'rgba(34,211,238,0.2)' }} style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '3.5rem', fontWeight: 800, color: 'rgba(34,211,238,0.06)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.num}</div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--t1)' }}>{p.name}</div>
      {p.url ? <a href={p.url} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--green)', marginBottom: '1rem', display: 'block' }}>{p.urlLabel}</a>
        : <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--t3)', marginBottom: '1rem', display: 'block' }}>{p.urlLabel}</span>}
      <p style={{ fontSize: '0.84rem', color: 'var(--t2)', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>{p.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {p.stack.map(({ t, c }) => { const tc = tagColors[c]; return <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.05em', padding: '0.28rem 0.7rem', borderRadius: '100px', background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color }}>{t}</span>; })}
      </div>
    </motion.div>
  );
}

function Projects() {
  const isMobile = useIsMobile();
  return (
    <section id="projects" style={{ padding: '7rem 0', background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 3rem' }}>
        <p className="sec-label">04 · Featured Work</p>
        <h2 className="sec-title">Projects <span className="grad-text">I've Built</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '1.2rem', marginTop: '3rem' }}>
          {projects.map((p, i) => <ProjectCard key={p.num} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
const contactLinks = [
  { icon: EmailIcon, label: 'Email', val: 'rohit7067842611@gmail.com', href: 'mailto:rohit7067842611@gmail.com', color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)' },
  { icon: WhatsAppAnimIcon, label: 'WhatsApp', val: '+91 7067842611', href: 'https://wa.me/917067842611', color: '#25D366', bg: 'rgba(37,211,102,0.1)', border: 'rgba(37,211,102,0.25)' },
  { icon: PhoneIcon, label: 'Phone', val: '+91 7067842611', href: 'tel:7067842611', color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)' },
  { icon: GithubAnimIcon, label: 'GitHub', val: 'github.com/Rohit8426', href: 'https://github.com/Rohit8426', color: '#818cf8', bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.2)' },
  { icon: LinkedinAnimIcon, label: 'LinkedIn', val: 'rohit-chakrawarti', href: 'https://www.linkedin.com/in/rohit-chakrawarti-976106208', color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.2)' },
];

function Contact() {
  const [ref, inView] = useInView(0.1);
  const [hoveredItem, setHoveredItem] = useState(null);
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{ padding: '7rem 0', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 3rem' }}>
        <p className="sec-label">05 · Let's Connect</p>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? '2.5rem' : '4rem', alignItems: 'start', marginTop: '3rem' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 'clamp(2rem,8vw,3rem)' : 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
              Let's build{' '}
              <motion.span className="grad-text" animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }} transition={{ duration: 4, repeat: Infinity }} style={{ backgroundSize: '200%' }}>something great.</motion.span>
            </h2>
            <p style={{ color: 'var(--t2)', marginTop: '1.25rem', fontSize: '1rem', maxWidth: 380, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.75 }}>
              Open to freelance projects, remote work, and exciting opportunities worldwide. Let's talk!
            </p>
            <motion.a href="https://wa.me/917067842611" target="_blank" rel="noreferrer" whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(37,211,102,0.25)' }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.5rem', background: 'linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.06))', border: '1px solid rgba(37,211,102,0.35)', borderRadius: 16, marginTop: '2rem', marginBottom: '0.5rem', color: '#25D366', cursor: 'pointer', transition: 'all 0.3s' }}>
              <motion.div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <WhatsAppAnimIcon animate={true} />
              </motion.div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.92rem', color: '#25D366' }}>Start WhatsApp Chat</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'rgba(37,211,102,0.7)', marginTop: '0.1rem' }}>Typically responds within a few hours</div>
              </div>
              <motion.span style={{ marginLeft: 'auto', fontSize: '1.2rem' }} animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </motion.a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
              {contactLinks.map((cl, i) => {
                const Icon = cl.icon;
                const isHovered = hoveredItem === i;
                return (
                  <motion.a key={cl.label} href={cl.href} target={cl.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }} whileHover={{ x: 8, borderColor: cl.color, background: cl.bg }} onHoverStart={() => setHoveredItem(i)} onHoverEnd={() => setHoveredItem(null)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.25rem', background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 14, transition: 'all 0.3s', color: 'var(--t1)' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: cl.bg, border: `1px solid ${cl.border}`, color: cl.color, flexShrink: 0 }}>
                      <Icon animate={isHovered} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.62rem', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{cl.label}</div>
                      <div style={{ fontSize: '0.86rem', color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif' " }}>{cl.val}</div>
                    </div>
                    <motion.span style={{ marginLeft: 'auto', color: cl.color, opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -5 }} transition={{ duration: 0.2 }}>↗</motion.span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: isMobile ? 0 : 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div whileHover={{ borderColor: 'var(--border2)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }} style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.75rem', transition: 'all 0.3s' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🎓</motion.span>Education
              </div>
              {[['Degree', 'B.Tech — CSE'], ['University', 'UIT RGPV, Shivpuri'], ['CGPA', '7.64 / 10'], ['Batch', '2020 – 2024']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.55rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.84rem' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>{k}</span>
                  <span style={{ color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif" }}>{v}</span>
                </div>
              ))}
            </motion.div>
            <motion.div whileHover={{ borderColor: 'var(--border2)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }} style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.75rem', transition: 'all 0.3s' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>📍</motion.span>Quick Info
              </div>
              {[['Location', 'Indore, MP'], ['Experience', '2+ Years'], ['Work Type', 'Remote / Contract']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.55rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.84rem' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>{k}</span>
                  <span style={{ color: 'var(--t1)', fontFamily: "'Space Grotesk', sans-serif" }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.55rem 0', fontSize: '0.84rem' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>Status</span>
                <span style={{ color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                  <motion.div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} animate={{ boxShadow: ['0 0 0 0 rgba(52,211,153,0.5)', '0 0 0 5px rgba(52,211,153,0)', '0 0 0 0 rgba(52,211,153,0.5)'] }} transition={{ duration: 1.5, repeat: Infinity }} />
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

/* ─── FOOTER ─── */
function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: isMobile ? '2rem 1.25rem' : '2rem 3rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', position: 'relative', zIndex: 1, gap: '1rem' }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg,#22d3ee,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>RC.</div>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--t3)', letterSpacing: '0.05em' }}>
        Rohit Chakrawarti · MERN Stack Developer · Indore, India
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--t3)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        Built with <HeartIcon /> &amp; <CoffeeIcon /> <RocketIcon />
      </span>
    </footer>
  );
}

/* ─── APP ─── */
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        :root {
          --bg: #03050a; --bg2: #070c14; --s1: #0d1321; --s2: #111827;
          --cyan: #22d3ee; --blue: #818cf8; --violet: #c084fc;
          --green: #34d399; --rose: #fb7185; --amber: #fbbf24;
          --t1: #f1f5f9; --t2: #94a3b8; --t3: #475569;
          --border: rgba(148,163,184,0.08); --border2: rgba(148,163,184,0.15);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--t1); font-family: 'Space Grotesk', sans-serif; font-size: 16px; line-height: 1.6; overflow-x: hidden; }
        a { text-decoration: none; color: inherit; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg2); }
        ::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 3px; }
        .grad-text { background: linear-gradient(135deg,var(--cyan) 0%,var(--blue) 50%,var(--violet) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .sec-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--cyan); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.75rem; }
        .sec-label::before { content: ''; width: 30px; height: 1px; background: var(--cyan); }
        .sec-title { font-family: 'Syne', sans-serif; font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 0.75rem; }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }
        @media (max-width: 768px) {
          .sec-title { font-size: clamp(1.75rem, 6vw, 2.5rem); }
        }
      `}</style>
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Marquee />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <motion.a href="https://wa.me/917067842611" target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(37,211,102,0.45)', cursor: 'pointer' }} animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <WhatsAppIcon size={28} />
      </motion.a>
    </>
  );
}