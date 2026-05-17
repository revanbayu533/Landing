import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#000'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              opacity: 0.4,
              filter: 'contrast(1.2) brightness(0.7)'
            }}
          >
            <source src="/Braven.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 40%, rgba(2,2,2,1) 100%)',
            zIndex: 2
          }}></div>
        </div>

        <div className="container animate-up" style={{ 
          position: 'relative', 
          zIndex: 10,
          paddingTop: '200px'
        }}>
          <div style={{ maxWidth: '1000px' }}>
            <p style={{ 
              letterSpacing: '1.2em', 
              color: 'var(--primary)', 
              fontWeight: 800, 
              fontSize: '0.75rem', 
              marginBottom: '3rem',
              textShadow: '0 0 20px rgba(0, 210, 255, 0.5)'
            }}>
              PREMIUM INDONESIAN FRAGRANCE
            </p>
            <h1 style={{ fontSize: 'clamp(4rem, 18vw, 10rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 0.8, letterSpacing: '-0.05em' }}>
              LEVEL <br /> 
              <span className="gradient-text">UP</span>
            </h1>
            <p style={{ maxWidth: '550px', fontSize: '1.3rem', marginBottom: '4.5rem', color: '#fff', opacity: 0.8, lineHeight: 1.7 }}>
              Next-generation scents for the urban pioneer. Bold, enduring, and crafted for those who define the future.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              <button className="btn-primary">DISCOVER SHOP</button>
              <button style={{ 
                background: 'transparent', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: '#fff',
                padding: '1.2rem 3.5rem',
                fontWeight: 800,
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}>
                PLAY REEL
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '8rem'
          }}>
            <div className="animate-up delay-1">
              <div style={{ width: '60px', height: '2px', background: 'var(--primary)', marginBottom: '2.5rem' }}></div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 900 }}>Elite Quality</h3>
              <p>Meticulously crafted with high-quality oils ensuring a sophisticated scent profile that evolves with you.</p>
            </div>
            <div className="animate-up delay-2">
              <div style={{ width: '60px', height: '2px', background: 'var(--primary)', marginBottom: '2.5rem' }}></div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 900 }}>Eternal Scent</h3>
              <p>Stay fresh from day to night. Our Eau de Parfum formula provides up to 8 hours of intense fragrance.</p>
            </div>
            <div className="animate-up delay-3">
              <div style={{ width: '60px', height: '2px', background: 'var(--primary)', marginBottom: '2.5rem' }}></div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 900 }}>Certified Safe</h3>
              <p>Fully BPOM and Halal certified. Safe for skin and designed to be non-staining on clothing.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
            <p style={{ color: 'var(--primary)', letterSpacing: '0.6em', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.5rem' }}>COLLECTIONS</p>
            <h2 style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1 }}>MASTER <span className="gradient-text">LINEUP</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '5rem' }}>
            <div className="glass" style={{ padding: '0', borderRadius: '2.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
               <div style={{ height: '550px', position: 'relative' }}>
                  <img 
                    src="/collection_real.jpg" 
                    alt="Braven Collection" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', padding: '0.8rem 2rem', background: 'var(--primary)', color: '#000', fontSize: '0.75rem', fontWeight: 900, borderRadius: '4px', letterSpacing: '0.1em' }}>SIGNATURE</div>
               </div>
               <div style={{ padding: '5rem' }}>
                 <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 900 }}>Collection</h3>
                 <p style={{ marginBottom: '3.5rem', fontSize: '1.1rem', opacity: 0.7 }}>The essential foundation for daily mastery. A balanced blend of fresh elements and urban depth.</p>
                 <button className="btn-primary" style={{ width: '100%' }}>EXPLORE SERIES</button>
               </div>
            </div>

            <div className="glass" style={{ padding: '0', borderRadius: '2.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
               <div style={{ height: '550px', position: 'relative' }}>
                  <img 
                    src="/code_real.jpg" 
                    alt="Braven Code" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', padding: '0.8rem 2rem', background: '#fff', color: '#000', fontSize: '0.75rem', fontWeight: 900, borderRadius: '4px', letterSpacing: '0.1em' }}>ELEGANCE</div>
               </div>
               <div style={{ padding: '5rem' }}>
                 <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 900 }}>Code</h3>
                 <p style={{ marginBottom: '3.5rem', fontSize: '1.1rem', opacity: 0.7 }}>Command every room. A sophisticated scent profile designed for the modern professional leader.</p>
                 <button className="btn-primary" style={{ width: '100%' }}>EXPLORE SERIES</button>
               </div>
            </div>
          </div>
          
          <div className="glass" style={{ marginTop: '5rem', borderRadius: '3rem', overflow: 'hidden', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', border: '1px solid rgba(0, 210, 255, 0.1)' }}>
             <div style={{ flex: '1 1 600px', height: '800px', position: 'relative' }}>
                <img 
                  src="/extreme_real.jpg" 
                  alt="Braven Extreme" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
             </div>
             <div style={{ flex: '1 1 500px', padding: '7rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0a0a 0%, #020202 100%)' }}>
               <p style={{ color: 'var(--primary)', letterSpacing: '0.6em', marginBottom: '2.5rem', fontWeight: 900, fontSize: '1rem' }}>EXTRAIT DE PARFUM</p>
               <h3 style={{ fontSize: '6rem', marginBottom: '2.5rem', fontWeight: 900, lineHeight: 0.85 }}>EXTREME <br /> <span className="gradient-text">FORCE</span></h3>
               <p style={{ marginBottom: '4.5rem', fontSize: '1.3rem', opacity: 0.7, lineHeight: 1.8 }}>
                 Maximum concentration. Pure dominance. 
                 The pinnacle of our craft, delivering unparalleled projection and a legacy that lingers.
               </p>
               <button className="btn-primary" style={{ width: 'fit-content', padding: '1.8rem 5rem' }}>SHOP EXTREME SERIES</button>
             </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ position: 'relative', textAlign: 'center', background: '#000' }}>
        <div className="container">
          <h2 style={{ fontSize: '6rem', marginBottom: '3rem', fontWeight: 900, lineHeight: 0.9 }}>UNLEASH THE <br /><span className="gradient-text">PIONEER</span></h2>
          <p style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.4rem', opacity: 0.6 }}>
            Step into the next era of fragrance. Join the movement of men who refuse to settle.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
             <a href="https://www.tokopedia.com/braven-perfume" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ minWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TOKOPEDIA OFFICIAL</a>
             <a href="https://shopee.co.id/braven" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ minWidth: '300px', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SHOPEE OFFICIAL</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
