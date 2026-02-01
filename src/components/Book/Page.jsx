import { memo } from "react";

/**
 * Page component representing a single page in the book
 * Supports 3D flip animation with front and back faces
 */
const Page = memo(
  ({
    children,
    backContent,
    isFlipped,
    zIndex,
    isCover,
    isCoverView,
    isActive,
    pageNumber,
    onClick,
    showFlipHint,
  }) => {
    const pageClasses = [
      "page",
      isFlipped ? "flipped" : "",
      isCover ? "cover-page" : "",
      isActive ? "active" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={pageClasses} style={{ zIndex }} onClick={onClick}>
        {/* Front side of the page */}
        <div className="page-front">
          <div className="page-content">{children}</div>

          {showFlipHint && (
            <span className="flip-hint">
              {isCover ? "Click to open" : "Click to turn"}
            </span>
          )}
        </div>

        <div className="page-back">
          <div className="page-content">{backContent}</div>
        </div>
      </div>
    );
  },
);

Page.displayName = "Page";

export default Page;
