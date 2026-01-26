import { useState, useCallback, useRef } from 'react';

/**
 * Custom hook to manage page flip state and navigation
 * @param {number} totalPages - Total number of pages in the book
 * @returns {object} Page flip state and control methods
 */
const usePageFlip = (totalPages) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null); // 'forward' | 'backward'
  const animationTimeoutRef = useRef(null);
  
  const ANIMATION_DURATION = 800; // ms - matches CSS transition

  /**
   * Go to a specific page
   */
  const goToPage = useCallback((pageIndex) => {
    if (isAnimating) return;
    if (pageIndex < 0 || pageIndex >= totalPages) return;
    if (pageIndex === currentPage) return;

    setIsAnimating(true);
    setFlipDirection(pageIndex > currentPage ? 'forward' : 'backward');

    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    setCurrentPage(pageIndex);

    // Reset animation state after transition completes
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      setFlipDirection(null);
    }, ANIMATION_DURATION);
  }, [currentPage, isAnimating, totalPages]);

  /**
   * Go to the next page
   */
  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, goToPage]);

  /**
   * Go to the previous page
   */
  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  /**
   * Check if we can go to the next page
   */
  const canGoNext = currentPage < totalPages - 1 && !isAnimating;

  /**
   * Check if we can go to the previous page
   */
  const canGoPrev = currentPage > 0 && !isAnimating;

  /**
   * Get the flip state for a specific page index
   * Returns whether the page should be flipped based on current page
   */
  const isPageFlipped = useCallback((pageIndex) => {
    return pageIndex < currentPage;
  }, [currentPage]);

  /**
   * Get z-index for page stacking
   * Pages that are closer to being viewed should be on top
   */
  const getPageZIndex = useCallback((pageIndex) => {
    if (isAnimating && pageIndex === currentPage) {
      return 100; // Animating page on top
    }
    // Stack pages so current page is visible
    return totalPages - Math.abs(currentPage - pageIndex);
  }, [currentPage, isAnimating, totalPages]);

  return {
    currentPage,
    isAnimating,
    flipDirection,
    goToPage,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    isPageFlipped,
    getPageZIndex,
    totalPages
  };
};

export default usePageFlip;
