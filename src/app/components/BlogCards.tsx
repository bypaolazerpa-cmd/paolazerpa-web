import React, { useState } from 'react';

export interface BlogPost {
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageBg: string;
}

// Category accent colors
export const categoryColors: Record<string, string> = {
  SISTEMA: '#8888B0',
  VIDA: '#C97B5A',
  RAÍZ: '#6A9E80',
  TALLO: '#B08060',
  FLOR: '#9A7AB0',
};

// ─── VERTICAL image block (desktop secondary card) ───────────────────────────
function CardImageVertical({
  bg,
  category,
  categoryColor,
}: {
  bg: string;
  category: string;
  categoryColor: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        background: bg,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-20px',
          width: '120px',
          height: '120px',
          borderRadius: '60% 40% 70% 30% / 50% 60% 40% 60%',
          background: categoryColor,
          opacity: 0.18,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-10px',
          width: '80px',
          height: '80px',
          borderRadius: '40% 60% 50% 70% / 60% 40% 60% 40%',
          background: categoryColor,
          opacity: 0.12,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '8px',
          letterSpacing: '2px',
          color: categoryColor,
          opacity: 0.6,
        }}
      >
        {category}
      </div>
    </div>
  );
}

// ─── SQUARE image block (mobile horizontal card) ─────────────────────────────
function CardImageSquare({
  bg,
  categoryColor,
}: {
  bg: string;
  categoryColor: string;
}) {
  return (
    <div
      style={{
        width: '96px',
        minWidth: '96px',
        alignSelf: 'stretch',
        background: bg,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-16px',
          right: '-16px',
          width: '72px',
          height: '72px',
          borderRadius: '55% 45% 65% 35% / 45% 55% 45% 55%',
          background: categoryColor,
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '-10px',
          width: '44px',
          height: '44px',
          borderRadius: '40% 60% 50% 70% / 60% 40% 60% 40%',
          background: categoryColor,
          opacity: 0.14,
        }}
      />
    </div>
  );
}

// ─── FEATURED POST CARD ───────────────────────────────────────────────────────
interface FeaturedCardProps {
  post: BlogPost & { image: string };
}

export function FeaturedCard({ post }: FeaturedCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E8E4DE',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, transform 0.3s',
        boxShadow: hovered
          ? '0 20px 60px rgba(26,26,46,0.12)'
          : '0 4px 24px rgba(26,26,46,0.06)',
        transform: hovered ? 'translateY(-3px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image panel */}
      <div
        className="w-full md:w-[45%] min-h-[220px] md:min-h-[380px]"
        style={{
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(26,26,46,0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content panel */}
      <div
        className="p-6 md:p-[52px]"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Category + DESTACADO */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '8px',
              letterSpacing: '2px',
              color: post.categoryColor,
              background: post.imageBg,
              padding: '4px 10px',
              borderRadius: '20px',
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '8px',
              letterSpacing: '2px',
              color: '#A0998E',
            }}
          >
            DESTACADO
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-[22px] md:text-[32px]"
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: 'italic',
            color: '#1A1A2E',
            lineHeight: 1.2,
            marginBottom: '16px',
            fontWeight: 400,
          }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p
          className="text-[14px] md:text-[16px]"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            color: '#5A5450',
            lineHeight: 1.7,
            marginBottom: '28px',
            maxWidth: '480px',
          }}
        >
          {post.excerpt}
        </p>

        {/* Meta + CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '9px',
              letterSpacing: '1.5px',
              color: '#A0998E',
            }}
          >
            {post.date} · {post.readTime}
          </span>
          <button
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '2px',
              color: '#1A1A2E',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              borderBottom: '1px solid #1A1A2E',
              paddingBottom: '2px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#C97B5A';
              el.style.borderColor = '#C97B5A';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#1A1A2E';
              el.style.borderColor = '#1A1A2E';
            }}
          >
            LEER NOTA →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── SECONDARY CARD — desktop: vertical / mobile: horizontal ─────────────────
interface SecondaryCardProps {
  post: BlogPost;
}

export function SecondaryCard({ post }: SecondaryCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E8E4DE',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, transform 0.3s',
        boxShadow: hovered
          ? '0 16px 48px rgba(26,26,46,0.10)'
          : '0 2px 16px rgba(26,26,46,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Desktop layout: vertical (image top, content bottom) ── */}
      <div className="hidden md:flex md:flex-col">
        <CardImageVertical
          bg={post.imageBg}
          category={post.category}
          categoryColor={post.categoryColor}
        />
        <DesktopCardContent post={post} />
      </div>

      {/* ── Mobile layout: horizontal (image left, content right) ── */}
      <div
        className="flex md:hidden"
        style={{ flexDirection: 'row', minHeight: '100px' }}
      >
        <CardImageSquare bg={post.imageBg} categoryColor={post.categoryColor} />
        <MobileCardContent post={post} />
      </div>
    </div>
  );
}

// Desktop card content (vertical card)
function DesktopCardContent({ post }: { post: BlogPost }) {
  return (
    <div
      style={{
        padding: '28px 28px 32px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          letterSpacing: '2px',
          color: post.categoryColor,
          marginBottom: '14px',
          display: 'block',
        }}
      >
        {post.category}
      </span>
      <h3
        style={{
          fontFamily: "'Fraunces', serif",
          fontStyle: 'italic',
          fontSize: '19px',
          color: '#1A1A2E',
          lineHeight: 1.3,
          fontWeight: 400,
          flex: 1,
          marginBottom: '24px',
        }}
      >
        {post.title}
      </h3>
      <div
        style={{
          height: '1px',
          background: '#EDE9E4',
          marginBottom: '20px',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '9px',
            letterSpacing: '1.5px',
            color: '#A0998E',
          }}
        >
          {post.date}
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '9px',
            letterSpacing: '1.5px',
            color: '#A0998E',
          }}
        >
          {post.readTime}
        </span>
      </div>
    </div>
  );
}

// Mobile card content (horizontal card — image left, text right)
function MobileCardContent({ post }: { post: BlogPost }) {
  return (
    <div
      style={{
        flex: 1,
        padding: '14px 16px 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: 0,
      }}
    >
      {/* Top: category + title */}
      <div>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '8px',
            letterSpacing: '1.5px',
            color: post.categoryColor,
            display: 'block',
            marginBottom: '6px',
          }}
        >
          {post.category}
        </span>
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: 'italic',
            fontSize: '15px',
            color: '#1A1A2E',
            lineHeight: 1.3,
            fontWeight: 400,
            margin: 0,
            /* clamp to 2 lines */
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          } as React.CSSProperties}
        >
          {post.title}
        </h3>
      </div>

      {/* Bottom: meta */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '10px',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '8px',
            letterSpacing: '1px',
            color: '#A0998E',
          }}
        >
          {post.date}
        </span>
        <span
          style={{
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: '#A0998E',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '8px',
            letterSpacing: '1px',
            color: '#A0998E',
          }}
        >
          {post.readTime}
        </span>
      </div>
    </div>
  );
}

// ─── SHARED POSTS DATA ────────────────────────────────────────────────────────
export const featuredPost: BlogPost & { image: string } = {
  category: 'SISTEMA',
  categoryColor: categoryColors['SISTEMA'],
  title: 'Cómo construyo mi sistema de trabajo cuando todo parece urgente.',
  excerpt:
    'Hay momentos en los que todo compite por mi atención al mismo tiempo. Aquí está lo que hago cuando eso pasa y cómo construí un sistema que aguanta sin romperse.',
  date: 'Dic 2024',
  readTime: '7 min leer',
  imageBg: '#E8E8F0',
  image:
    'https://images.unsplash.com/photo-1632937145991-91620be68319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZSUyMG1pbmltYWwlMjBkZXNrfGVufDF8fHx8MTc3Mzg0NDkxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
};

export const gridPosts: BlogPost[] = [
  {
    category: 'SISTEMA',
    categoryColor: categoryColors['SISTEMA'],
    title: 'Rediseñar no es empezar de cero. Es entender qué parte del sistema estaba roto.',
    excerpt: '',
    date: 'Ene 2025',
    readTime: '4 min',
    imageBg: '#E8E8F0',
  },
  {
    category: 'VIDA',
    categoryColor: categoryColors['VIDA'],
    title: 'Emigré a los 19. Lo que aprendí sobre sostener una vida sin red de apoyo.',
    excerpt: '',
    date: 'Feb 2025',
    readTime: '6 min',
    imageBg: '#FDF3D7',
  },
  {
    category: 'RAÍZ',
    categoryColor: categoryColors['RAÍZ'],
    title: 'Cómo rediseñé mi ritual de mañana sin que dependiera de mi estado de ánimo.',
    excerpt: '',
    date: 'Feb 2025',
    readTime: '3 min',
    imageBg: '#D4E4DA',
  },
  {
    category: 'TALLO',
    categoryColor: categoryColors['TALLO'],
    title: 'Mi escritorio antes y después: lo que cambió y por qué funciona.',
    excerpt: '',
    date: 'Mar 2025',
    readTime: '4 min',
    imageBg: '#EDE0D4',
  },
  {
    category: 'FLOR',
    categoryColor: categoryColors['FLOR'],
    title: 'Las relaciones también son diseño. Lo que aprendí al empezar a elegir.',
    excerpt: '',
    date: 'Mar 2025',
    readTime: '5 min',
    imageBg: '#E8E0EF',
  },
  {
    category: 'SISTEMA',
    categoryColor: categoryColors['SISTEMA'],
    title: 'Lo que aprendí al intentar sostener todo al mismo tiempo.',
    excerpt: '',
    date: 'Mar 2025',
    readTime: '5 min',
    imageBg: '#E8E8F0',
  },
];

// First 3 for landing page preview
export const previewPosts = gridPosts.slice(0, 3);
