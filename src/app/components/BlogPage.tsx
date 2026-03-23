import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavBar } from './NavBar';
import { FooterSection } from './FooterSection';
import { FeaturedCard, SecondaryCard, featuredPost, gridPosts } from './BlogCards';

const categories = ['TODOS', 'SISTEMA', 'VIDA', 'RAÍZ', 'TALLO', 'FLOR'];

function GrainOverlay() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.04, mixBlendMode: 'multiply' }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="blog-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#blog-grain)" />
      </svg>
    </div>
  );
}

export function BlogPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('TODOS');

  const filteredPosts =
    activeCategory === 'TODOS'
      ? gridPosts
      : gridPosts.filter((p) => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: '#FAF8F4', overflowX: 'hidden' }}>
      <NavBar />

      {/* ── HEADER ── */}
      <section style={{ background: '#1A1A2E', position: 'relative', overflow: 'hidden', paddingTop: '148px', paddingBottom: '80px', paddingLeft: '80px', paddingRight: '80px' }}
        className="!pt-[112px] !pb-[64px] !px-6 md:!pt-[148px] md:!pb-[80px] md:!px-[80px]"
      >
        <div style={{ position: 'absolute', top: '-30px', right: '-20px', width: '460px', height: '460px', borderRadius: '55% 45% 65% 35% / 45% 55% 45% 55%', background: '#F5C842', opacity: 0.06, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#C97B5A', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 400 }}>
            NOTAS Y PROCESO
          </p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(36px, 5.5vw, 64px)', color: '#FAF8F4', lineHeight: 1.15, marginBottom: '20px' }}>
            Lo que estoy construyendo<br />y documentando.
          </h1>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: '18px', color: '#D6D0C4', lineHeight: 1.65, marginBottom: '36px', maxWidth: '540px' }}>
            Reflexiones desde el proceso real. Sin resolución garantizada. Solo lo que estoy aprendiendo mientras lo aprendo.
          </p>

          {/* Category pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
            <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`}</style>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '2px', borderRadius: '20px',
                    border: isActive ? 'none' : '1px solid #D6D0C4',
                    background: isActive ? '#F5C842' : 'transparent',
                    color: isActive ? '#1A1A2E' : '#D6D0C4',
                    cursor: 'pointer', transition: 'all 0.2s', fontWeight: isActive ? 700 : 400,
                    whiteSpace: 'nowrap', padding: '8px 16px',
                  }}
                  onMouseEnter={(e) => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FAF8F4'; el.style.color = '#FAF8F4'; } }}
                  onMouseLeave={(e) => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#D6D0C4'; el.style.color = '#D6D0C4'; } }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ background: '#FAF8F4', position: 'relative', overflow: 'hidden', padding: '72px 80px 100px' }}
        className="!py-10 !px-6 md:!pt-[72px] md:!pb-[100px] md:!px-[80px]"
      >
        <GrainOverlay />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Featured */}
          <div style={{ marginBottom: '32px' }}>
            <FeaturedCard post={featuredPost} />
          </div>

          {/* Grid */}
          {filteredPosts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {filteredPosts.map((post, i) => (
                <SecondaryCard key={`${post.category}-${i}`} post={post} />
              ))}
            </div>
          ) : (
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: '15px', color: '#A0998E', textAlign: 'center', padding: '60px 0' }}>
              No hay notas en esta categoría todavía.
            </p>
          )}

          {/* Back link */}
          <div style={{ marginTop: '72px', textAlign: 'center' }}>
            <button
              onClick={() => navigate('/')}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#888888', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              ← Volver al inicio
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
