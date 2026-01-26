import { memo } from 'react';

/**
 * Page component representing a single page in the book
 * Supports 3D flip animation with front and back faces
 */
const Page = memo(({ 
  children, 
  backContent,
  isFlipped, 
  zIndex, 
  isCover,
  isCoverView,
  isActive,
  pageNumber,
  onClick,
  showFlipHint
}) => {
  const pageClasses = [
    'page',
    isFlipped ? 'flipped' : '',
    isCover ? 'cover-page' : '',
    isActive ? 'active' : '',
    isCover && isCoverView ? 'cover-centered' : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={pageClasses}
      style={{ zIndex }}
      onClick={onClick}
    >
      {/* Front side of the page */}
      <div className="page-front">
        <div className="page-content">
          {children}
        </div>
        {pageNumber !== undefined && !isCover && (
          <span className="page-number right">{pageNumber}</span>
        )}
        {showFlipHint && (
          <span className="flip-hint">
            {isCover ? 'Click to open' : 'Click to turn'}
          </span>
        )}
      </div>
      
      {/* Back side of the page (visible when flipped) */}
      <div className="page-back">
        <div className="page-content">
          {backContent}
        </div>
        {pageNumber !== undefined && (
          <span className="page-number left">{pageNumber + 1}</span>
        )}
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
