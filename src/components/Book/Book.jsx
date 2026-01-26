import { useMemo } from 'react';
import usePageFlip from '../../hooks/usePageFlip';
import Page from './Page';
import Bookmarks from './Bookmarks';

// Import chapter components
import Cover from '../Chapters/Cover';
import AboutMe from '../Chapters/AboutMe';
import Skills from '../Chapters/Skills';
import Projects from '../Chapters/Projects';
import Experience from '../Chapters/Experience';
import Contact from '../Chapters/Contact';

/**
 * Book component - Main container for the portfolio book
 * Manages page navigation and renders all chapters
 */
const Book = () => {
  // Define chapters with their content and metadata
  const chapters = useMemo(() => [
    {
      id: 'cover',
      title: 'Cover',
      component: Cover,
      bookmarkClass: 'bookmark-cover'
    },
    {
      id: 'about',
      title: 'About Me',
      component: AboutMe,
      bookmarkClass: 'bookmark-about'
    },
    {
      id: 'skills',
      title: 'Skills',
      component: Skills,
      bookmarkClass: 'bookmark-skills'
    },
    {
      id: 'projects',
      title: 'Projects',
      component: Projects,
      bookmarkClass: 'bookmark-projects'
    },
    {
      id: 'experience',
      title: 'Experience',
      component: Experience,
      bookmarkClass: 'bookmark-experience'
    },
    {
      id: 'contact',
      title: 'Contact',
      component: Contact,
      bookmarkClass: 'bookmark-contact'
    }
  ], []);

  const {
    currentPage,
    isAnimating,
    goToPage,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    isPageFlipped,
    getPageZIndex
  } = usePageFlip(chapters.length);

  // Check if we're on the cover page (closed book view)
  const isCoverView = currentPage === 0;

  // Handle page click to flip
  const handlePageClick = (pageIndex) => {
    if (isAnimating) return;
    
    // Click on current page goes to next
    if (pageIndex === currentPage && canGoNext) {
      nextPage();
    }
  };

  return (
    <div className={`book-container ${isCoverView ? 'cover-view' : 'open-view'}`}>
      <div className={`book ${isCoverView ? 'book--closed' : 'book--open'}`}>
        {/* Navigation arrows */}
        <button 
          className="nav-arrow prev"
          onClick={prevPage}
          disabled={!canGoPrev}
          aria-label="Previous page"
        >
          ‹
        </button>
        
        <div className="book-wrapper">
          {/* Back cover (static) - only visible when book is open */}
          {!isCoverView && <div className="book-cover back-cover" />}
          
          {/* Pages container */}
          <div className="pages-container">
            {chapters.map((chapter, index) => {
              const ChapterComponent = chapter.component;
              const isFlipped = isPageFlipped(index);
              const zIndex = getPageZIndex(index);
              
              return (
                <Page
                  key={chapter.id}
                  isFlipped={isFlipped}
                  zIndex={zIndex}
                  isCover={index === 0}
                  isCoverView={isCoverView}
                  isActive={index === currentPage}
                  pageNumber={index > 0 ? index : undefined}
                  onClick={() => handlePageClick(index)}
                  showFlipHint={index === currentPage && canGoNext}
                  backContent={
                    // Back side shows the continued content of the SAME chapter
                    <ChapterComponent isBackSide />
                  }
                >
                  {/* Front side shows the main content */}
                  <ChapterComponent />
                </Page>
              );
            })}
          </div>
          
          {/* Bookmarks - hide on cover view */}
          <Bookmarks
            chapters={chapters}
            currentPage={currentPage}
            onNavigate={goToPage}
            hidden={isCoverView}
          />
        </div>
        
        <button 
          className="nav-arrow next"
          onClick={nextPage}
          disabled={!canGoNext}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
      
      {/* Page counter */}
      <div className="page-counter">
        {isCoverView ? 'Cover' : `${currentPage} / ${chapters.length - 1}`}
      </div>
    </div>
  );
};

export default Book;
