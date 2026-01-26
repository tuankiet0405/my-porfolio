import { createContext, useContext, useState, useEffect } from 'react';

// Predefined color themes
export const colorThemes = {
  ocean: {
    name: 'Ocean',
    primary: '#0a192f',
    secondary: '#112240',
    accent: '#64ffda',
    accentHover: '#4cd9b4',
    text: '#ccd6f6',
    textSecondary: '#8892b0',
    paper: '#f5f0e1',
    bookmarks: {
      cover: '#0a192f',
      about: '#e94560',
      skills: '#0f3460',
      projects: '#533483',
      experience: '#16a085',
      contact: '#e67e22'
    }
  },
  sunset: {
    name: 'Sunset',
    primary: '#1a1a2e',
    secondary: '#16213e',
    accent: '#ff6b6b',
    accentHover: '#ee5a5a',
    text: '#eaeaea',
    textSecondary: '#a0a0a0',
    paper: '#fef9ef',
    bookmarks: {
      cover: '#1a1a2e',
      about: '#ff6b6b',
      skills: '#4ecdc4',
      projects: '#ffe66d',
      experience: '#95e1d3',
      contact: '#f38181'
    }
  },
  forest: {
    name: 'Forest',
    primary: '#1b2d1b',
    secondary: '#2d4a2d',
    accent: '#90EE90',
    accentHover: '#7dcc7d',
    text: '#e8f5e9',
    textSecondary: '#a5d6a7',
    paper: '#f1f8e9',
    bookmarks: {
      cover: '#1b2d1b',
      about: '#ef5350',
      skills: '#66bb6a',
      projects: '#ab47bc',
      experience: '#26a69a',
      contact: '#ffa726'
    }
  },
  purple: {
    name: 'Purple Dream',
    primary: '#1a1a2e',
    secondary: '#2d1b4e',
    accent: '#bd93f9',
    accentHover: '#a77bdb',
    text: '#f8f8f2',
    textSecondary: '#b0a0c0',
    paper: '#faf5ff',
    bookmarks: {
      cover: '#2d1b4e',
      about: '#ff79c6',
      skills: '#8be9fd',
      projects: '#bd93f9',
      experience: '#50fa7b',
      contact: '#ffb86c'
    }
  },
  midnight: {
    name: 'Midnight',
    primary: '#0d1117',
    secondary: '#161b22',
    accent: '#58a6ff',
    accentHover: '#4090e0',
    text: '#c9d1d9',
    textSecondary: '#8b949e',
    paper: '#f6f8fa',
    bookmarks: {
      cover: '#0d1117',
      about: '#f85149',
      skills: '#58a6ff',
      projects: '#a371f7',
      experience: '#3fb950',
      contact: '#d29922'
    }
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [colorTheme, setColorTheme] = useState('ocean');

  // Load saved preferences
  useEffect(() => {
    const savedDark = localStorage.getItem('portfolio-dark-mode');
    const savedTheme = localStorage.getItem('portfolio-color-theme');
    
    if (savedDark !== null) {
      setIsDark(savedDark === 'true');
    }
    if (savedTheme && colorThemes[savedTheme]) {
      setColorTheme(savedTheme);
    }
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    const theme = colorThemes[colorTheme];
    const root = document.documentElement;
    
    // Set CSS custom properties
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-accent-hover', theme.accentHover);
    root.style.setProperty('--color-text', theme.text);
    root.style.setProperty('--color-text-secondary', theme.textSecondary);
    root.style.setProperty('--color-paper', theme.paper);
    
    // Bookmark colors
    Object.entries(theme.bookmarks).forEach(([key, value]) => {
      root.style.setProperty(`--bookmark-${key}`, value);
    });

    // Dark/Light mode
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Save preferences
    localStorage.setItem('portfolio-dark-mode', isDark);
    localStorage.setItem('portfolio-color-theme', colorTheme);
  }, [isDark, colorTheme]);

  const toggleDarkMode = () => setIsDark(prev => !prev);
  
  const changeColorTheme = (themeName) => {
    if (colorThemes[themeName]) {
      setColorTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{
      isDark,
      colorTheme,
      currentTheme: colorThemes[colorTheme],
      toggleDarkMode,
      changeColorTheme,
      availableThemes: Object.keys(colorThemes).map(key => ({
        id: key,
        ...colorThemes[key]
      }))
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
