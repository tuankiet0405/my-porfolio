import { forwardRef, memo } from "react";

/**
 * Page component representing a single page in the book
 * Supports 3D flip animation with front and back faces
 */
const Page = memo(forwardRef(
  ({
    children,
    backContent,
    isFlipped,
    zIndex,
    isCover,
    isActive,
    isFlipping,
    mobileSide,
    onClick,
    onKeyDown,
    showFlipHint,
  }, ref) => {
    const pageClasses = [
      "page",
      isFlipped ? "flipped" : "",
      isCover ? "cover-page" : "",
      isActive ? "active" : "",
      isFlipping ? "flipping" : "",
      mobileSide === "back" ? "mobile-show-back" : "mobile-show-front",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={pageClasses}
        style={{ zIndex }}
        onClick={onClick}
        onKeyDown={onKeyDown}
        aria-hidden={!isActive}
      >
        {/* Front side of the page */}
        <div className="page-front" aria-hidden={!isActive || mobileSide === "back"}>
          <div className="page-content">{children}</div>

          {showFlipHint && (
            <span className="flip-hint" aria-hidden="true">
              {isCover ? "Click to open" : "Click to turn"}
            </span>
          )}
        </div>

        <div className="page-back" aria-hidden={!isActive || mobileSide !== "back"}>
          <div className="page-content">{backContent}</div>
        </div>
      </div>
    );
  },
));

Page.displayName = "Page";

export default Page;
