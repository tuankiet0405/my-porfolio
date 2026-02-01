/**
 * Cover - The front cover of the portfolio book
 * First impression with name, title, and branding
 */
const Cover = ({ isBackSide }) => {
  // Back side of cover - inside front cover / title page
  if (isBackSide) {
    return (
      <div className="chapter-content inside-cover">
        <div className="inside-cover-content">
          <p className="edition-text">First Edition</p>
          <div className="inside-decoration">❧</div>
          <p className="copyright-text">
            © 2026 Tuấn Kiệt
            <br />
            All rights reserved.
          </p>
          <div className="inside-quote">
            <p>
              "Code is poetry written for machines to execute and humans to
              understand."
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cover-content">
      <img src="porfolio.jpg" alt="Cover" className="cover-image" />
      {/* <div className="cover-decoration" />

      <h1 className="cover-title animate-fade-in">Portfolio</h1>

      <p className="cover-subtitle animate-fade-in delay-2">
        Frontend Developer
      </p>

      <div className="cover-decoration animate-fade-in delay-3" />

      <p className="cover-author animate-fade-in delay-4">By Tuấn Kiệt</p>

      <div className="cover-year animate-fade-in delay-5">2026</div> */}
    </div>
  );
};

export default Cover;
