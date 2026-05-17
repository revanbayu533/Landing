'use client';

export default function Footer() {
  return (
    <footer style={{
      background: '#050505',
      padding: '8rem 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 900, 
          letterSpacing: '0.5em', 
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #fff 20%, var(--primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          BRAVEN
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 4rem', opacity: 0.5, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
          Crafted for the bold. Designed for the active. Unleash your character with fragrances that define your journey.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '3rem',
          marginBottom: '5rem'
        }}>
          <a 
            href="https://www.instagram.com/braven_id/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#fff', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              letterSpacing: '0.3em',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              opacity: 0.8
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            INSTAGRAM
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '4rem' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', opacity: 0.3 }}>
            © 2026 BRAVEN PERFUME. PT GRIFF PRIMA ABADI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
