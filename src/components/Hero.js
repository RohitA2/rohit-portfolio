import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { n: '2+', l: 'Years Exp', icon: '📅' },
  { n: '4', l: 'Companies', icon: '🏢' },
  { n: '10+', l: 'Projects', icon: '🚀' },
  { n: 'AWS', l: 'Deployed', icon: '☁️' },
];

/* ── Animated SVG icons ── */
const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <motion.polyline points="16 18 22 12 16 6" animate={{ x: [0, 2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.polyline points="8 6 2 12 8 18" animate={{ x: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
  </svg>
);

const ServerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <motion.circle cx="6" cy="6" r="1.5" fill="currentColor" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
    <motion.circle cx="6" cy="18" r="1.5" fill="currentColor" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Scroll indicator arrow ── */
const ScrollIndicator = () => (
  <motion.div
    style={{
      position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
      cursor: 'pointer', zIndex: 10,
    }}
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
  >
    <span style={{
      fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem',
      color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase',
    }}>scroll</span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   FREE STOCK CODING VIDEOS from Pexels (no API key needed)
   Using direct mp4 links — all royalty-free.
   
   SWAP any of these VIDEO_URL values with your own video
   uploaded to /public folder: videoUrl = '/your-video.mp4'
   ───────────────────────────────────────────────────────── */
const VIDEO_URL =
  'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4';

/* Fallback videos (uncomment if above doesn't load fast enough) */
// const VIDEO_URL = 'https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4'; // code on screen
// const VIDEO_URL = 'https://videos.pexels.com/video-files/7988086/7988086-hd_1920_1080_30fps.mp4'; // dark code

export default function Hero() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  /* Animated mesh blobs on canvas — sits above video, below content */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      t += 0.003;
      const blobs = [
        { x: width * 0.15 + Math.sin(t * 0.7) * 100, y: height * 0.3 + Math.cos(t * 0.5) * 70, r: 380, c: 'rgba(34,211,238,0.09)' },
        { x: width * 0.85 + Math.cos(t * 0.5) * 110, y: height * 0.55 + Math.sin(t * 0.7) * 80, r: 320, c: 'rgba(129,140,248,0.08)' },
        { x: width * 0.5  + Math.sin(t * 0.9) * 70,  y: height * 0.85 + Math.cos(t * 0.4) * 60, r: 260, c: 'rgba(192,132,252,0.07)' },
      ];
      blobs.forEach(b => {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.c); g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* Autoplay video */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: '5rem', position: 'relative', zIndex: 1, overflow: 'hidden',
    }}>

      {/* ── LAYER 1: Background video ── */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: videoLoaded ? 0.18 : 0,
          transition: 'opacity 1.2s ease',
          filter: 'saturate(0.6) brightness(0.5)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── LAYER 2: Dark base gradient (ensure text readability) ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `
          linear-gradient(
            to bottom,
            rgba(3,5,10,0.55) 0%,
            rgba(3,5,10,0.35) 40%,
            rgba(3,5,10,0.60) 75%,
            rgba(3,5,10,0.92) 100%
          )
        `,
      }} />

      {/* ── LAYER 3: Subtle noise texture ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
      }} />

      {/* ── LAYER 4: Animated color blobs canvas ── */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 3,
      }} />

      {/* ── LAYER 5: Left vignette (extra depth) ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 80% at 20% 50%, transparent 40%, rgba(3,5,10,0.5) 100%)',
      }} />

      {/* ── LAYER 6: Content ── */}
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 3rem',
        width: '100%', position: 'relative', zIndex: 5,
      }}>

        {/* Available pill */}
        <motion.div {...fadeUp(0)} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)',
          borderRadius: '100px', padding: '0.45rem 1.1rem',
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem',
          color: 'var(--green)', letterSpacing: '0.06em', marginBottom: '1.5rem',
        }}>
          <motion.div
            style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }}
            animate={{ boxShadow: ['0 0 0 0 rgba(52,211,153,0.5)', '0 0 0 7px rgba(52,211,153,0)', '0 0 0 0 rgba(52,211,153,0.5)'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Available for Freelance
        </motion.div>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0.1)} style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem',
          color: 'var(--t3)', letterSpacing: '0.18em', textTransform: 'uppercase',
          marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <motion.span style={{ color: 'var(--cyan)' }} animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <CodeIcon />
          </motion.span>
          MERN Stack · AWS · Full Stack Developer
        </motion.p>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "'Clash Display', 'Space Grotesk', sans-serif",
          fontSize: 'clamp(3.5rem,8.5vw,7.5rem)',
          fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92,
          marginBottom: '1.6rem',
          textShadow: '0 4px 40px rgba(0,0,0,0.6)',
        }}>
          Rohit
          <motion.span
            style={{
              display: 'block',
              background: 'linear-gradient(135deg,#22d3ee 0%,#818cf8 50%,#c084fc 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', backgroundSize: '200%',
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            Chakrawarti
          </motion.span>
        </motion.h1>

        {/* Type animation */}
        <motion.div {...fadeUp(0.3)} style={{
          fontSize: '1.1rem', color: 'var(--t2)', maxWidth: 580,
          lineHeight: 1.8, marginBottom: '2.8rem',
          fontFamily: "'Space Grotesk', sans-serif",
          display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--t2)' }}>
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <ServerIcon />
            </motion.span>
            I build
          </span>
          <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>
            <TypeAnimation
              sequence={[
                'scalable REST APIs', 2000,
                'React.js dashboards', 2000,
                'AWS EC2 deployments', 2000,
                'real-time Socket.IO apps', 2000,
                'PostgreSQL backends', 2000,
              ]}
              repeat={Infinity} speed={55}
            />
          </span>
          — clean code to production.
        </motion.div>

        {/* Buttons */}
        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <Link to="projects" smooth duration={600} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(34,211,238,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg,#22d3ee,#818cf8)',
                border: 'none', padding: '0.85rem 2rem', borderRadius: '12px',
                color: '#03050a', fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer',
              }}
            >View Projects →</motion.button>
          </Link>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/917067842611?text=Hi%20Rohit!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#25D366', color: '#25D366', boxShadow: '0 8px 30px rgba(37,211,102,0.2)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'rgba(37,211,102,0.07)', color: '#25D366',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem',
              letterSpacing: '0.04em', padding: '0.85rem 1.75rem', borderRadius: '12px',
              border: '1px solid rgba(37,211,102,0.35)', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.25s',
            }}
          >
            <motion.span animate={{ rotate: [0, 10, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
              <WhatsAppIcon />
            </motion.span>
            WhatsApp
          </motion.a>

          <motion.a href="https://github.com/Rohit8426" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#22d3ee', color: '#22d3ee' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'rgba(255,255,255,0.04)', color: 'var(--t1)',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem',
              letterSpacing: '0.04em', padding: '0.85rem 1.75rem', borderRadius: '12px',
              border: '1px solid var(--border2)', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
            }}
          >
            <GithubIcon /> GitHub ↗
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/rohit-chakrawarti-976106208" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#818cf8', color: '#818cf8' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'rgba(255,255,255,0.04)', color: 'var(--t1)',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem',
              letterSpacing: '0.04em', padding: '0.85rem 1.75rem', borderRadius: '12px',
              border: '1px solid var(--border2)', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
            }}
          >
            <LinkedinIcon /> LinkedIn ↗
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.5)} style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1px', background: 'rgba(148,163,184,0.06)',
          border: '1px solid rgba(148,163,184,0.1)', borderRadius: '18px', overflow: 'hidden',
          backdropFilter: 'blur(16px)',
        }}>
          {stats.map(({ n, l, icon }, i) => (
            <motion.div
              key={l}
              whileHover={{ background: 'rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              style={{ background: 'rgba(3,5,10,0.55)', padding: '1.6rem', textAlign: 'center', backdropFilter: 'blur(20px)' }}
            >
              <motion.div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
              >{icon}</motion.div>
              <div style={{
                fontFamily: "'Clash Display', 'Space Grotesk', sans-serif",
                fontSize: '2rem', fontWeight: 700,
                background: 'linear-gradient(135deg,#22d3ee,#818cf8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', lineHeight: 1,
              }}>{n}</div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem',
                color: 'var(--t3)', letterSpacing: '0.1em', marginTop: '0.35rem',
                textTransform: 'uppercase',
              }}>{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <ScrollIndicator />
    </section>
  );
}