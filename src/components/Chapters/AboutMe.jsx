const AboutMe = ({ isBackSide }) => {
  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 1 - Continued</span>
          <h2 className="chapter-title">My Journey</h2>
        </div>

        <div className="section">
          <h3 className="section-title">What Drives Me</h3>
          <p>
            I believe in creating digital experiences that are not only
            functional but also delightful. Every pixel matters, every
            interaction counts.
          </p>
          <p>
            My journey in frontend development started with curiosity and has
            evolved into a passion for crafting beautiful, performant web
            applications.
          </p>
        </div>

        <div className="section">
          <h3 className="section-title ">How I work with clients</h3>
          <p>
            I partner directly with product leaders and founders to move product
            initiatives from idea to measurable impact. My goal is to deliver
            frontend experiences that drive business outcomes — faster
            checkouts, clearer onboarding, and dashboards that make decisions
            easier.
          </p>
          <ul className="tech-list">
            <li>Fast discovery & prioritized roadmaps focused on ROI</li>
            <li>High-quality UI implementation from Figma to production</li>
            <li>
              Performance-first approach: faster pages, better conversions
            </li>
          </ul>
        </div>

        <div className="section">
          <h3 className="section-title">What I bring to e‑commerce & SaaS</h3>
          <p>
            Technical decisions are framed by business questions: Will this
            improve conversion? Reduce churn? Lower maintenance costs? I choose
            tools and patterns that scale with product needs and team
            constraints.
          </p>
          <ul className="tech-list">
            <li>Next.js — SEO & performance</li>
            <li>React + TypeScript — reliable UI</li>
            <li>Tailwind — rapid, consistent styling</li>
            <li>Supabase / Postgres — pragmatic data layer</li>
            <li>Stripe integration — payments & subscriptions</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 1</span>
        <h2 className="chapter-title">About Me</h2>
      </div>

      <div className="section">
        <div className="profile-intro">
          <div className="profile-avatar">
            <div className="avatar-placeholder">👨‍💻</div>
          </div>
          <div className="profile-text">
            <h3>Hello, I'm</h3>
            <h2 className="name-highlight">Tuấn Kiệt</h2>
            <p className="tagline">Frontend Developer</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Introduction</h3>
        <p>
          Frontend developer focused on e‑commerce and SaaS. I design and build
          performant, conversion-focused interfaces and dashboards that help
          product teams ship faster and move metrics.
        </p>
      </div>
      <div className="section">
        <h6 className="section-title">Tools I use:</h6>
        <ul className="facts-list">
          <li>Next.js — faster pages & SEO</li>
          <li>TypeScript — fewer runtime bugs</li>
          <li>Tailwind — consistent UI, faster delivery</li>
          <li>Supabase / Postgres — predictable data</li>
          <li>Stripe & Payment Flows</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
