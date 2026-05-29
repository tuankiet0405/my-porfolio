import { useState, useCallback } from 'react';

/**
 * Custom hook to manage page flip state and navigation
 * @param {number} totalPages - Total number of pages in the book
 * @returns {object} Page flip state and control methods
 */
const usePageFlip = (totalPages) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flippingPage, setFlippingPage] = useState(null);
  const [pendingPage, setPendingPage] = useState(null);
  const [direction, setDirection] = useState(null); // 'forward' | 'backward'
  const [mobileSide, setMobileSide] = useState('front');

  /**
   * Go to a specific page
   */
  const goToPage = useCallback((pageIndex) => {
    if (isAnimating) return;
    if (pageIndex < 0 || pageIndex >= totalPages) return;
    if (pageIndex === currentPage) return;

    const nextDirection = pageIndex > currentPage ? 'forward' : 'backward';

    setIsAnimating(true);
    setDirection(nextDirection);
    setFlippingPage(nextDirection === 'forward' ? currentPage : pageIndex);
    setPendingPage(pageIndex);
    setMobileSide('front');
  }, [currentPage, isAnimating, totalPages]);

  const completeFlip = useCallback(() => {
    setCurrentPage((previousPage) => pendingPage ?? previousPage);
    setIsAnimating(false);
    setFlippingPage(null);
    setPendingPage(null);
    setDirection(null);
  }, [pendingPage]);

  const showFrontSide = useCallback(() => {
    setMobileSide('front');
  }, []);

  const showBackSide = useCallback(() => {
    setMobileSide('back');
  }, []);

  const toggleMobileSide = useCallback(() => {
    setMobileSide((side) => (side === 'front' ? 'back' : 'front'));
  }, []);

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
    if (isAnimating && pageIndex === flippingPage) {
      return 100; // Animating page on top
    }
    // Stack pages so current page is visible
    return totalPages - Math.abs(currentPage - pageIndex);
  }, [currentPage, flippingPage, isAnimating, totalPages]);

  return {
    currentPage,
    isAnimating,
    flippingPage,
    pendingPage,
    direction,
    mobileSide,
    goToPage,
    nextPage,
    prevPage,
    completeFlip,
    showFrontSide,
    showBackSide,
    toggleMobileSide,
    canGoNext,
    canGoPrev,
    isPageFlipped,
    getPageZIndex,
    totalPages
  };
};

export default usePageFlip;
