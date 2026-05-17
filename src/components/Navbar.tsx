'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShopOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.85)',
      borderBottom: '1px solid rgba(0, 210, 255, 0.1)',
      transition: 'all 0.4s ease'
    }}>
      <div className="container" style={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{ 
          fontSize: '1.6rem', 
          fontWeight: 900, 
          letterSpacing: '0.4em',
          background: 'linear-gradient(135deg, #fff 20%, var(--primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'block'
        }}>
          BRAVEN
        </Link>
        
        <div style={{ 
          display: 'flex', 
          gap: '3.5rem', 
          fontSize: '0.65rem', 
          fontWeight: 700, 
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          position: 'relative'
        }}>
          <Link href="#collections" className="nav-link">COLLECTIONS</Link>
          <Link href="#about" className="nav-link">ABOUT</Link>
          
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button 
              onClick={() => setIsShopOpen(!isShopOpen)}
              className="nav-link"
              style={{ 
                background: 'none', 
                border: 'none', 
                padding: 0, 
                cursor: 'pointer',
                font: 'inherit',
                color: isShopOpen ? '#fff' : '#ccc'
              }}
            >
              SHOP {isShopOpen ? '▲' : '▼'}
            </button>

            {isShopOpen && (
              <div className="glass" style={{
                position: 'absolute',
                top: 'calc(100% + 25px)',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '280px',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(0, 210, 255, 0.2)',
                background: 'rgba(5, 5, 5, 0.95)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 210, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                animation: 'fadeInUp 0.3s ease forwards',
                zIndex: 1001
              }}>
                <a 
                  href="https://www.tokopedia.com/braven-perfume" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    transition: 'all 0.3s ease'
                  }}
                  className="shop-option"
                >
                  <div style={{ width: '32px', height: '32px', background: '#42b549', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#fff', fontSize: '0.8rem' }}>T</div>
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 800 }}>TOKOPEDIA</span>
                    <span style={{ color: '#666', fontSize: '0.6rem' }}>Official Store</span>
                  </div>
                </a>

                <a 
                  href="https://shopee.co.id/braven" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    transition: 'all 0.3s ease'
                  }}
                  className="shop-option"
                >
                  <div style={{ width: '32px', height: '32px', background: '#ee4d2d', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#fff', fontSize: '0.8rem' }}>S</div>
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 800 }}>SHOPEE</span>
                    <span style={{ color: '#666', fontSize: '0.6rem' }}>Official Store</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          <Link href="#contact" className="nav-link">CONTACT</Link>
        </div>

        <button className="btn-primary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.6rem' }}>
          JOIN THE SQUAD
        </button>
      </div>
    </nav>
  );
}
