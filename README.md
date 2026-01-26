# Portfolio Book

A creative portfolio website designed like a book with page-flip animations.

## Features

- **Book-style navigation** - Flip through pages like a real book
- **3D page flip animation** - Realistic CSS 3D transforms
- **Theme switcher** - 5 color themes + dark/light mode
- **Bookmarks** - Quick navigation tabs on the right side
- **Responsive** - Works on desktop, tablet, and mobile

## Tech Stack

- React 18
- Vite
- SCSS

## Getting Started

```bash
# Install dependencies
npm install
# or
bun install

# Start dev server
npm run dev
# or
bun run dev

# Build for production
npm run build
```

Dev server runs at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Book/           # Book container, Page, Bookmarks
│   ├── Chapters/       # Cover, AboutMe, Skills, Projects, Experience, Contact
│   └── ThemeToggle/    # Theme selector component
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── usePageFlip.js
├── styles/
│   ├── components/     # Component-specific styles
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _animations.scss
│   └── main.scss
├── App.jsx
└── main.jsx
```

## Customization

### Change your info
Edit files in `src/components/Chapters/` to update your personal information.

### Change colors
Edit `src/context/ThemeContext.jsx` to modify theme colors or add new themes.

### Add/remove chapters
Edit `src/components/Book/Book.jsx` - modify the `chapters` array.

## License

MIT
