import { useMemo, useRef } from "react";
import usePageFlip from "../../hooks/usePageFlip";
import { gsap, useGSAP } from "../../lib/gsap";
import Page from "./Page";
import Bookmarks from "./Bookmarks";

// Import chapter components
import Cover from "../Chapters/Cover";
import AboutMe from "../Chapters/AboutMe";
import Skills from "../Chapters/Skills";
import Projects from "../Chapters/Projects";
import Experience from "../Chapters/Experience";
import Contact from "../Chapters/Contact";

/**
 * Book component - Main container for the portfolio book
 * Manages page navigation and renders all chapters
 */
const Book = () => {
  const bookRef = useRef(null);
  const pageRefs = useRef([]);

  // Define chapters with their content and metadata
  const chapters = useMemo(
    () => [
      {
        id: "cover",
        title: "Cover",
        component: Cover,
        bookmarkClass: "bookmark-cover",
      },
      {
        id: "about",
        title: "About Me",
        component: AboutMe,
        bookmarkClass: "bookmark-about",
      },
      {
        id: "skills",
        title: "Skills",
        component: Skills,
        bookmarkClass: "bookmark-skills",
      },
      {
        id: "projects",
        title: "Projects",
        component: Projects,
        bookmarkClass: "bookmark-projects",
      },
      {
        id: "experience",
        title: "Experience",
        component: Experience,
        bookmarkClass: "bookmark-experience",
      },
      {
        id: "contact",
        title: "Contact",
        component: Contact,
        bookmarkClass: "bookmark-contact",
      },
    ],
    [],
  );

  const {
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
    canGoNext,
    canGoPrev,
    isPageFlipped,
    getPageZIndex,
  } = usePageFlip(chapters.length);

  // Open the book shell as soon as navigation starts so the cover flip and frame expand together.
  const visualPage = pendingPage ?? currentPage;
  const isBookOpen = visualPage > 0;
  const isCoverView = !isBookOpen;

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.matchMedia("(max-width: 480px)").matches;

      pageRefs.current.forEach((page, index) => {
        if (!page) return;

        gsap.set(page, {
          rotationY: index < currentPage ? -180 : 0,
          xPercent: 0,
          autoAlpha: !isMobile || index === currentPage ? 1 : 0,
          zIndex: getPageZIndex(index),
          transformOrigin: "left center",
        });
      });

      if (flippingPage === null || pendingPage === null || !direction) return;

      if (reduceMotion) {
        completeFlip();
        return;
      }

      if (isMobile) {
        const activePage = pageRefs.current[currentPage];
        const nextPageEl = pageRefs.current[pendingPage];
        const xOffset = direction === "forward" ? 4 : -4;

        gsap
          .timeline({
            defaults: { duration: 0.18, ease: "power2.out" },
            onComplete: completeFlip,
          })
          .to(activePage, { xPercent: -xOffset, autoAlpha: 0 }, 0)
          .set(nextPageEl, { xPercent: xOffset, autoAlpha: 0, zIndex: 100 }, 0)
          .to(nextPageEl, { xPercent: 0, autoAlpha: 1 }, 0.04);
        return;
      }

      const page = pageRefs.current[flippingPage];
      if (!page) {
        completeFlip();
        return;
      }

      const targetRotation = direction === "forward" ? -180 : 0;

      gsap
        .timeline({
          defaults: { duration: 0.82, ease: "power3.inOut" },
          onComplete: completeFlip,
        })
        .set(page, {
          zIndex: 100,
          transformOrigin: "left center",
          willChange: "transform",
        })
        .to(page, { rotationY: targetRotation }, 0)
        .set(page, { willChange: "auto" });
    },
    {
      scope: bookRef,
      dependencies: [
        currentPage,
        flippingPage,
        pendingPage,
        direction,
        completeFlip,
        getPageZIndex,
      ],
    },
  );

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const activePage = pageRefs.current[currentPage];
      if (!activePage || reduceMotion) return;

      const targets = activePage.querySelectorAll(
        ".page-header, .section, .project-card, .skill-item, .timeline-item",
      );

      const isMobile = window.matchMedia("(max-width: 480px)").matches;

      if (isMobile) {
        if (targets.length) {
          gsap.set(targets, { y: 0, autoAlpha: 1 });
        }

        activePage.querySelectorAll(".skill-progress").forEach((bar) => {
          const level = Number(bar.dataset.level || 0) / 100;
          gsap.set(bar, { scaleX: level, transformOrigin: "left center" });
        });
        return;
      }

      if (targets.length) {
        gsap.fromTo(
          targets,
          { y: 14, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.42,
            ease: "power2.out",
            stagger: 0.05,
            overwrite: "auto",
          },
        );
      }

      activePage.querySelectorAll(".skill-progress").forEach((bar) => {
        const level = Number(bar.dataset.level || 0) / 100;
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: level,
            duration: 0.7,
            ease: "power2.out",
            transformOrigin: "left center",
            overwrite: "auto",
          },
        );
      });
    },
    { scope: bookRef, dependencies: [currentPage, mobileSide] },
  );

  // Handle page click to flip
  const handlePageClick = (event, pageIndex) => {
    if (isAnimating) return;
    if (event.target.closest("a, button, input, textarea, select, label")) return;

    // Click on current page goes to next
    if (pageIndex === currentPage && canGoNext) {
      nextPage();
    }
  };

  const handlePageKeyDown = (event, pageIndex) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    handlePageClick(event, pageIndex);
  };

  const activeChapter = chapters[visualPage];
  const showMobileSideToggle = isBookOpen && activeChapter && !isAnimating;

  return (
    <div
      ref={bookRef}
      className={`book-container ${isCoverView ? "cover-view" : "open-view"}`}
    >
      <div className={`book ${isBookOpen ? "book--open" : "book--closed"}`}>
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
          {isBookOpen && <div className="book-cover back-cover" />}

          <div className="pages-container">
            {chapters.map((chapter, index) => {
              const ChapterComponent = chapter.component;
              const isFlipped = isPageFlipped(index);
              const zIndex = getPageZIndex(index);

              return (
                <Page
                  key={chapter.id}
                  ref={(node) => {
                    pageRefs.current[index] = node;
                  }}
                  isFlipped={isFlipped}
                  zIndex={zIndex}
                  isCover={index === 0}
                  isActive={index === currentPage}
                  isFlipping={index === flippingPage}
                  mobileSide={index === currentPage ? mobileSide : "front"}
                  onClick={(event) => handlePageClick(event, index)}
                  onKeyDown={(event) => handlePageKeyDown(event, index)}
                  showFlipHint={index === currentPage && canGoNext}
                  backContent={<ChapterComponent isBackSide />}
                >
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
            hidden={!isBookOpen}
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

      {showMobileSideToggle && (
        <div className="mobile-side-toggle" aria-label="Chapter side">
          <button
            type="button"
            className={mobileSide === "front" ? "active" : ""}
            onClick={showFrontSide}
            aria-pressed={mobileSide === "front"}
          >
            Front
          </button>
          <button
            type="button"
            className={mobileSide === "back" ? "active" : ""}
            onClick={showBackSide}
            aria-pressed={mobileSide === "back"}
          >
            Back
          </button>
        </div>
      )}

      {/* Page counter */}
      <div className="page-counter">
        {isCoverView ? "Cover" : `${visualPage} / ${chapters.length - 1}`}
      </div>
    </div>
  );
};

export default Book;
