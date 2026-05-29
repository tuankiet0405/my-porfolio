import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { gsap, useGSAP } from '../../lib/gsap';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const { isDark, toggleDarkMode, colorTheme, changeColorTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useGSAP(
    () => {
      const panel = rootRef.current?.querySelector('.theme-toggle__panel');
      const controls = rootRef.current?.querySelectorAll('.mode-switch__btn, .color-theme-btn');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!panel) return;

      if (!isOpen) {
        gsap.to(panel, {
          autoAlpha: 0,
          y: -10,
          scale: 0.96,
          duration: reduceMotion ? 0 : 0.18,
          ease: 'power2.in',
        });
        return;
      }

      const timeline = gsap
        .timeline({ defaults: { ease: 'power2.out' } })
        .to(panel, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: reduceMotion ? 0 : 0.25,
        });

      if (controls?.length) {
        timeline.fromTo(
          controls,
          { y: 8, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: reduceMotion ? 0 : 0.24,
            stagger: 0.035,
          },
          '<0.05',
        );
      }
    },
    { scope: rootRef, dependencies: [isOpen] },
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return;

      setIsOpen(false);
      buttonRef.current?.focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closePanel = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="theme-toggle" ref={rootRef}>
      {/* Settings button */}
      <button 
        ref={buttonRef}
        className="theme-toggle__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Theme settings"
        aria-expanded={isOpen}
        aria-controls="theme-settings-panel"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>

      {/* Settings panel */}
      <div
        id="theme-settings-panel"
        className={`theme-toggle__panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-label="Theme settings"
      >
        <div className="theme-toggle__header">
          <h3>Theme Settings</h3>
          <button 
            ref={closeButtonRef}
            className="theme-toggle__close"
            onClick={closePanel}
            aria-label="Close theme settings"
          >
            ×
          </button>
        </div>

        {/* Dark/Light mode toggle */}
        <div className="theme-toggle__section">
          <label className="theme-toggle__label">Mode</label>
          <div className="mode-switch">
            <button 
              className={`mode-switch__btn ${!isDark ? 'active' : ''}`}
              onClick={() => isDark && toggleDarkMode()}
              aria-pressed={!isDark}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              Light
            </button>
            <button 
              className={`mode-switch__btn ${isDark ? 'active' : ''}`}
              onClick={() => !isDark && toggleDarkMode()}
              aria-pressed={isDark}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              Dark
            </button>
          </div>
        </div>

        {/* Color theme selection */}
        <div className="theme-toggle__section">
          <label className="theme-toggle__label">Color Theme</label>
          <div className="color-themes">
            {availableThemes.map(theme => (
              <button
                key={theme.id}
                className={`color-theme-btn ${colorTheme === theme.id ? 'active' : ''}`}
                onClick={() => changeColorTheme(theme.id)}
                title={theme.name}
                aria-pressed={colorTheme === theme.id}
              >
                <div 
                  className="color-theme-btn__preview"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 50%, ${theme.accent} 100%)`
                  }}
                />
                <span className="color-theme-btn__name">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="theme-toggle__overlay"
          onClick={closePanel}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
