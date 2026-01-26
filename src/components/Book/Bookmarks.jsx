import { memo } from 'react';

/**
 * Bookmarks component - Tab navigation on the right side of the book
 * Each bookmark represents a chapter and allows quick navigation
 */
const Bookmarks = memo(({ chapters, currentPage, onNavigate, hidden }) => {
  return (
    <div className={`bookmarks ${hidden ? 'bookmarks--hidden' : ''}`}>
      {chapters.map((chapter, index) => {
        const isActive = currentPage === index;
        
        return (
          <div
            key={chapter.id}
            className={`bookmark-tab ${chapter.bookmarkClass} ${isActive ? 'active' : ''}`}
            onClick={() => onNavigate(index)}
            role="button"
            tabIndex={hidden ? -1 : 0}
            aria-label={`Go to ${chapter.title}`}
            aria-current={isActive ? 'page' : undefined}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate(index);
              }
            }}
          >
            <span className="bookmark-label">
              {getShortLabel(chapter.id)}
            </span>
            <span className="bookmark-tooltip">
              {chapter.title}
            </span>
          </div>
        );
      })}
    </div>
  );
});

/**
 * Get short label for bookmark tab
 * Shows abbreviated text that fits in the vertical tab
 */
function getShortLabel(chapterId) {
  const labels = {
    cover: '●',
    about: 'AB',
    skills: 'SK',
    projects: 'PR',
    experience: 'EX',
    contact: 'CT'
  };
  return labels[chapterId] || chapterId.slice(0, 2).toUpperCase();
}

Bookmarks.displayName = 'Bookmarks';

export default Bookmarks;
