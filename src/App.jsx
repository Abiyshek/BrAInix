import React, { useState } from "react";
import {
  ChevronDown, ArrowRight, Play, Mail, CheckCircle, AlertCircle,
  Globe, Cpu, BookOpen, Search, Layers, Target, Rocket, Laptop,
  Terminal, Shield, Settings, Briefcase, Award, Users, Zap, Phone, MapPin,
  Menu, X
} from "lucide-react";
import { HeroCanvas, HowCanvas, StarRating, InquiryModal } from "./components";
import { useCursor, useReveal } from "./hooks";
import {
  features, courses, steps, testimonials, stats, footerLinks,
  services, servicesFeatures, servicesSteps, servicesStats
} from "./data/constants";
import { subscribeToNewsletter } from "./services/api";
import logoImg from "./assets/logo/BrAInix_logo.jpg";
import ourMissionImg from "./assets/about/our_mission.png";
import ourVisionImg from "./assets/about/our_vision.png";
import whyChooseUsImg from "./assets/about/why_choose_us.png";
import founderAvatarImg from "./assets/about/founder_avatar.jpg";
import "./styles/globals.css";

export default function App() {
  const { cursorRef, dotRef, outerRef } = useCursor();
  const [productMode, setProductMode] = useState("services"); // "services" or "edu"
  const [activePage, setActivePage] = useState("home"); // "home" or "about"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [preloaderFade, setPreloaderFade] = useState(false);
  useReveal(productMode, activePage, preloaderActive);
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);

  React.useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setPreloaderFade(true);
    }, 4400);

    const activeTimer = setTimeout(() => {
      setPreloaderActive(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(activeTimer);
    };
  }, []);

  const handlePhoneClick = (e) => {
    e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "tel:6374724269";
    } else {
      window.open("https://wa.me/916374724269", "_blank");
    }
  };

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSignup = () => {
    setToast(null);
    if (!email || !email.includes("@") || !email.includes(".")) {
      setToast({ type: "error", msg: "Please enter a valid email address." });
      return;
    }
    setSending(true);

    subscribeToNewsletter(email)
      .then(() => {
        setSending(false);
        setEmail("");
        setToast({ type: "success", msg: "Successfully subscribed! Check your email for confirmation." });
      })
      .catch((error) => {
        setSending(false);
        setToast({ type: "error", msg: error.message || "Failed to subscribe. Please try again." });
      });
  };

  const handleItemClick = (item) => {
    const btn = document.getElementById("book-consultation-btn");
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      document.getElementById("cta").scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const navigateToSection = (e, targetId) => {
    e.preventDefault();
    setActivePage("home");
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const activeFeatures = productMode === "services" ? servicesFeatures : features;
  const activeGrid = productMode === "services" ? services : courses;
  const activeSteps = productMode === "services" ? servicesSteps : steps;
  const activeStats = productMode === "services" ? servicesStats : stats;

  return (
    <>
      {/* PRELOADER */}
      {preloaderActive && (
        <div className={`preloader ${preloaderFade ? "fade-out" : ""}`}>
          <div className="preloader-logo-wrap">
            <img src={logoImg} alt="BrAInix" className="preloader-logo" />
          </div>
          <div className="preloader-text">BrAInix</div>
          <div className="preloader-bar-bg">
            <div className="preloader-bar" />
          </div>
        </div>
      )}

      {/* CURSOR */}
      <div id="np-cursor" ref={cursorRef}>
        <div className="cur-ring" ref={outerRef} />
        <div className="cur-dot" ref={dotRef} />
      </div>

      {/* NAV */}
      {/* NAV */}
      <nav>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="logo-container" onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <img src={logoImg} alt="BrAInix Logo" style={{ height: "34px", width: "34px", borderRadius: "8px", objectFit: "cover", border: "0.5px solid var(--border)" }} />
            <span className="logo-text" style={{ fontFamily: "var(--fh)", fontWeight: "800", fontSize: "1.4rem", letterSpacing: "-0.03em", background: "linear-gradient(135deg, var(--cyan), var(--violet2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>BrAInix</span>
          </div>

          {/* Dynamic Switcher in Nav */}
          <div className="prod-switcher">
            <button
              className={`switcher-btn ${productMode === "services" ? "active services" : ""}`}
              onClick={() => { setActivePage("home"); setProductMode("services"); setMobileMenuOpen(false); }}
            >
              Services
            </button>
            <button
              className={`switcher-btn ${productMode === "edu" ? "active edu" : ""}`}
              onClick={() => { setActivePage("home"); setProductMode("edu"); setMobileMenuOpen(false); }}
            >
              Edu Platform
            </button>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: activePage === "home" ? "var(--cyan)" : "var(--text2)", cursor: "pointer" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: activePage === "about" ? "var(--cyan)" : "var(--text2)", cursor: "pointer" }}
            >
              About
            </a>
          </li>
          {productMode === "services" ? (
            <>
              <li><a href="#pillars" onClick={(e) => navigateToSection(e, "pillars")}>Products</a></li>
              <li><a href="#features" onClick={(e) => navigateToSection(e, "features")}>Standards</a></li>
              <li><a href="#courses" onClick={(e) => navigateToSection(e, "courses")}>Capabilities</a></li>
              <li><a href="#how" onClick={(e) => navigateToSection(e, "how")}>Workflow</a></li>
              <li><a href="#cta" onClick={(e) => navigateToSection(e, "cta")}>Connect</a></li>
            </>
          ) : (
            <>
              <li><a href="#pillars" onClick={(e) => navigateToSection(e, "pillars")}>Platforms</a></li>
              <li><a href="#features" onClick={(e) => navigateToSection(e, "features")}>Features</a></li>
              <li><a href="#courses" onClick={(e) => navigateToSection(e, "courses")}>Catalogue</a></li>
              <li><a href="#how" onClick={(e) => navigateToSection(e, "how")}>Process</a></li>
              <li><a href="#cta" onClick={(e) => navigateToSection(e, "cta")}>Connect</a></li>
            </>
          )}
        </ul>

        <button
          className="nav-cta"
          onClick={() => {
            if (activePage !== "home") {
              setActivePage("home");
              setTimeout(() => {
                const ctaEl = document.getElementById("cta");
                if (ctaEl) ctaEl.scrollIntoView({ behavior: "smooth" });
              }, 100);
            } else {
              const ctaEl = document.getElementById("cta");
              if (ctaEl) ctaEl.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {productMode === "services" ? "Request Consultation" : "Start Learning"}
        </button>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-links">
            <li>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                style={{ color: activePage === "home" ? "var(--cyan)" : "var(--text2)" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                style={{ color: activePage === "about" ? "var(--cyan)" : "var(--text2)" }}
              >
                About
              </a>
            </li>
            {productMode === "services" ? (
              <>
                <li><a href="#pillars" onClick={(e) => { navigateToSection(e, "pillars"); setMobileMenuOpen(false); }}>Products</a></li>
                <li><a href="#features" onClick={(e) => { navigateToSection(e, "features"); setMobileMenuOpen(false); }}>Standards</a></li>
                <li><a href="#courses" onClick={(e) => { navigateToSection(e, "courses"); setMobileMenuOpen(false); }}>Capabilities</a></li>
                <li><a href="#how" onClick={(e) => { navigateToSection(e, "how"); setMobileMenuOpen(false); }}>Workflow</a></li>
                <li><a href="#cta" onClick={(e) => { navigateToSection(e, "cta"); setMobileMenuOpen(false); }}>Connect</a></li>
              </>
            ) : (
              <>
                <li><a href="#pillars" onClick={(e) => { navigateToSection(e, "pillars"); setMobileMenuOpen(false); }}>Platforms</a></li>
                <li><a href="#features" onClick={(e) => { navigateToSection(e, "features"); setMobileMenuOpen(false); }}>Features</a></li>
                <li><a href="#courses" onClick={(e) => { navigateToSection(e, "courses"); setMobileMenuOpen(false); }}>Catalogue</a></li>
                <li><a href="#how" onClick={(e) => { navigateToSection(e, "how"); setMobileMenuOpen(false); }}>Process</a></li>
                <li><a href="#cta" onClick={(e) => { navigateToSection(e, "cta"); setMobileMenuOpen(false); }}>Connect</a></li>
              </>
            )}
          </ul>
          <button
            className="nav-cta"
            style={{ width: "100%", marginTop: "1rem" }}
            onClick={() => {
              setMobileMenuOpen(false);
              if (activePage !== "home") {
                setActivePage("home");
                setTimeout(() => {
                  const ctaEl = document.getElementById("cta");
                  if (ctaEl) ctaEl.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                const ctaEl = document.getElementById("cta");
                if (ctaEl) ctaEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {productMode === "services" ? "Request Consultation" : "Start Learning"}
          </button>
        </div>
      )}

      {activePage === "home" ? (
        <>
          {/* HERO */}
          <section id="hero">
            <HeroCanvas />
            <div className="hero-content">
              {productMode === "services" ? (
                <>
                  <div className="hero-badge services-badge">
                    <span className="badge-dot services-dot" />
                    <Laptop size={12} style={{ marginRight: "4px" }} />
                    Premium Development & Identity Studio
                  </div>
                  <h1 style={{ letterSpacing: "-0.04em" }}>
                    Architecting the<br />
                    <span className="grad">
                      Future of Digital
                    </span><br />
                    Web Products.
                  </h1>
                  <p className="hero-sub">
                    We craft visually gorgeous, highly performant web applications, custom brand identities, and seamless product deployments for high-growth enterprises.
                  </p>
                  <div className="hero-actions">
                    <button
                      className="btn-primary"
                      onClick={() => document.getElementById("courses").scrollIntoView({ behavior: "smooth" })}
                    >
                      <Briefcase size={18} /> Our Web Services
                    </button>
                    <button
                      className="btn-ghost"
                      onClick={() => document.getElementById("how").scrollIntoView({ behavior: "smooth" })}
                    >
                      <Play size={16} /> View Delivery Workflow
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="hero-badge">
                    <span className="badge-dot" />
                    <Cpu size={12} style={{ marginRight: "4px" }} />
                    AI-Powered Learning Platform
                  </div>
                  <h1>
                    Learn Smarter.<br />
                    <span className="grad">Think Deeper.</span><br />
                    Grow Faster.
                  </h1>
                  <p className="hero-sub">
                    BrAInix adapts to your unique mind, delivering personalized, immersive education powered by cutting-edge AI and real-world expertise.
                  </p>
                  <div className="hero-actions">
                    <button
                      className="btn-primary"
                      onClick={() => document.getElementById("courses").scrollIntoView({ behavior: "smooth" })}
                    >
                      <BookOpen size={18} /> Explore Courses
                    </button>
                    <button
                      className="btn-ghost"
                      onClick={() => document.getElementById("how").scrollIntoView({ behavior: "smooth" })}
                    >
                      <Play size={16} /> See How It Works
                    </button>
                  </div>
                </>
              )}

              <div className="hero-stats">
                {activeStats.map(({ num, label }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div className="stat-num">{num}</div>
                    <div className="stat-lbl">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-ind" onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}>
              <div className="scroll-line" />
              <ChevronDown size={14} />
            </div>
          </section>

          {/* CORE PILARS / CHOOSE MODE */}
          <section id="pillars" style={{ padding: "4rem 3rem", background: "var(--ink2)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
              <div className="sec-label">Dual Engine Architecture</div>
              <h2 className="sec-title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>Choose your BrAInix destination</h2>
              <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                <div
                  className={`pillar-card ${productMode === "services" ? "selected" : ""}`}
                  onClick={() => setProductMode("services")}
                  style={{
                    background: "var(--ink)",
                    border: productMode === "services" ? "1px solid var(--cyan)" : "0.5px solid rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    padding: "2rem",
                    cursor: "pointer",
                    maxWidth: "350px",
                    textAlign: "left",
                    flex: "1 1 300px",
                    transition: "all 0.3s"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div style={{ background: "rgba(0, 229, 255, 0.1)", border: "0.5px solid var(--cyan)", borderRadius: "10px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cyan)" }}>
                      <Laptop size={20} />
                    </div>
                    {productMode === "services" && <span style={{ fontSize: "0.68rem", color: "var(--cyan)", border: "0.5px solid var(--cyan)", borderRadius: "100px", padding: "0.15rem 0.6rem" }}>Active</span>}
                  </div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.5rem" }}>BrAInix Services</h3>
                  <p style={{ color: "var(--text2)", fontSize: "0.85rem", lineHeight: "1.5", fontWeight: "300" }}>Custom high-end web platforms, full-stack design, cloud deployment, and system automation.</p>
                </div>

                <div
                  className={`pillar-card ${productMode === "edu" ? "selected" : ""}`}
                  onClick={() => setProductMode("edu")}
                  style={{
                    background: "var(--ink)",
                    border: productMode === "edu" ? "1px solid var(--violet2)" : "0.5px solid rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    padding: "2rem",
                    cursor: "pointer",
                    maxWidth: "350px",
                    textAlign: "left",
                    flex: "1 1 300px",
                    transition: "all 0.3s"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div style={{ background: "rgba(167, 139, 250, 0.1)", border: "0.5px solid var(--violet2)", borderRadius: "10px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--violet2)" }}>
                      <BookOpen size={20} />
                    </div>
                    {productMode === "edu" && <span style={{ fontSize: "0.68rem", color: "var(--violet2)", border: "0.5px solid var(--violet2)", borderRadius: "100px", padding: "0.15rem 0.6rem" }}>Active</span>}
                  </div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.5rem" }}>BrAInix Edu</h3>
                  <p style={{ color: "var(--text2)", fontSize: "0.85rem", lineHeight: "1.5", fontWeight: "300" }}>AI-Powered interactive courses spanning AI/ML, Python, Full Stack, DSA, and Embedded Systems.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES / CAPABILITIES */}
          <section id="features">
            <div className="features-header reveal">
              <div>
                <div className="sec-label">{productMode === "services" ? "The Studio Standard" : "The Academy standard"}</div>
                <h2 className="sec-title">
                  {productMode === "services" ? "Engineered for elite\nbusiness results" : "Built for the future\nof human potential"}
                </h2>
              </div>
              <p className="sec-sub">
                {productMode === "services"
                  ? "Every pixel perfectly aligned, every database query highly optimized, and every cloud instance secured to professional standards."
                  : "Every tool, every feature engineered to remove friction between you and your breakthrough moment."}
              </p>
            </div>
            <div className="features-grid">
              {activeFeatures.map(f => (
                <div className="feature-card reveal" key={f.title}>
                  <div className={`feat-icon ${f.cls}`}>{f.icon}</div>
                  <div className="feat-title">{f.title}</div>
                  <p className="feat-text">{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GRID / CATALOG */}
          <section id="courses">
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div className="sec-label reveal">{productMode === "services" ? "Studio Capabilities" : "Academic Catalogue"}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
                <h2 className="sec-title reveal">
                  {productMode === "services" ? "Web solutions that\ndefine brands" : "Courses that open\nnew worlds"}
                </h2>
                <p className="sec-sub reveal" style={{ maxWidth: 380, margin: 0 }}>
                  {productMode === "services"
                    ? "From initial vector brand assets to cloud deployments handling massive traffic."
                    : "From beginner to expert structured paths that actually get you there."}
                </p>
              </div>
            </div>
            <div className="courses-row">
              {activeGrid.map(c => (
                <div className="course-card reveal" key={c.name}>
                  <div className={`course-thumb ${c.thumb}`}>
                    {c.icon}
                    <span className="thumb-badge">{c.badge}</span>
                  </div>
                  <div className="course-body">
                    <div className="course-tags">
                      {c.tags.map(t => <span key={t.l} className={`ctag ${t.cls || ""}`}>{t.l}</span>)}
                    </div>
                    <div className="course-name">{c.name}</div>
                    <div className="course-desc">{c.desc}</div>
                    <div className="course-footer">
                      <div>
                        <div className="c-price" style={{ color: c.priceColor }}>{c.price}</div>
                        <div className="c-meta">{c.meta}</div>
                      </div>
                      <button className="c-btn" onClick={() => handleItemClick(c)}>
                        {productMode === "services" ? "Inquire" : "Enroll"} <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HOW IT WORKS / TIMELINE */}
          <section id="how">
            <HowCanvas />
            <div className="how-inner">
              <div className="reveal">
                <div className="sec-label">{productMode === "services" ? "Our Blueprint Flow" : "The learning structure"}</div>
                <h2 className="sec-title" style={{ marginBottom: "2.5rem" }}>
                  {productMode === "services" ? "From dynamic scoping\nto live launching" : "From absolute zero\nto career-ready"}
                </h2>
                <div className="how-steps">
                  {activeSteps.map((s, i) => (
                    <div className="step" key={s.title}>
                      <div className="step-num">0{i + 1}</div>
                      <div>
                        <div className="step-title">{s.icon}{s.title}</div>
                        <p className="step-text">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="how-visual reveal">
                <div className="orb-ring r1" />
                <div className="orb-ring r2" />
                <div className="orb-ring r3" />
                <div className="how-orb">
                  <div className="orb-inner">
                    {productMode === "services" ? (
                      <>
                        <Laptop size={64} color="#00E5FF" strokeWidth={1} />
                        <div className="orb-label">BrAInix Studio</div>
                        <div className="orb-sub">High-Fidelity Engine</div>
                      </>
                    ) : (
                      <>
                        <Search size={64} color="#00E5FF" strokeWidth={1} />
                        <div className="orb-label">BrAInix AI</div>
                        <div className="orb-sub">Adaptive Learning Engine</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA / INQUIRY */}
          <section id="cta">
            <div className="cta-inner" style={{ padding: "4rem 2rem" }}>
              <div className="cta-glow" />
              {productMode === "services" ? (
                <>
                  <div className="sec-label">Connect With Our Studio</div>
                  <h2>Ready to build <span className="grad">something legendary?</span></h2>
                  <p style={{ marginBottom: "1.5rem" }}>Reach out directly to kickstart your next digital product, schedule a design sprint, or request a custom architectural roadmap.</p>
                </>
              ) : (
                <>
                  <div className="sec-label">Connect With Our Academy</div>
                  <h2>Begin your learning <span className="grad">journey today</span></h2>
                  <p style={{ marginBottom: "1.5rem" }}>Get in touch with our admissions coordinators and engineering mentors to select the perfect roadmap for your career goals.</p>
                </>
              )}

              <div style={{ marginBottom: "2.5rem", display: "flex", justifyContent: "center" }}>
                <a
                  id="book-consultation-btn"
                  href="https://forms.gle/7p2BKU7n1imjDusJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  Book Consultation
                </a>
              </div>

              {/* Main Contacts Cards Grid */}
              <div className="cta-contacts-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                maxWidth: "960px",
                margin: "2rem auto 0"
              }}>
                {/* Phone/WA Card */}
                <a
                  href="#"
                  onClick={handlePhoneClick}
                  className="cta-card cyan-card"
                >
                  <div style={{ background: "rgba(0, 229, 255, 0.08)", borderRadius: "50%", padding: "1rem", marginBottom: "1rem" }}>
                    <Phone size={24} color="var(--cyan)" />
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--cyan)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600", marginBottom: "0.4rem" }}>
                    Mobile / WhatsApp
                  </div>
                  <div style={{ fontWeight: "700", fontSize: "1.1rem" }}>+91 63747 24269</div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:hashedtechs@gmail.com"
                  className="cta-card violet-card"
                >
                  <div style={{ background: "rgba(167, 139, 250, 0.08)", borderRadius: "50%", padding: "1rem", marginBottom: "1rem" }}>
                    <Mail size={24} color="var(--violet2)" />
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--violet2)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600", marginBottom: "0.4rem" }}>
                    Direct Email
                  </div>
                  <div style={{ fontWeight: "700", fontSize: "1.1rem" }}>hashedtechs@gmail.com</div>
                </a>

                {/* Address Card */}
                <a
                  href="https://maps.google.com/?q=42,+5th+cross,+maraimalai+nagar,+velrampet,+Puducherry-605004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-card gold-card"
                >
                  <div style={{ background: "rgba(245, 158, 11, 0.08)", borderRadius: "50%", padding: "1rem", marginBottom: "1rem" }}>
                    <MapPin size={24} color="var(--gold)" />
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600", marginBottom: "0.4rem" }}>
                    Studio Address
                  </div>
                  <div style={{ fontWeight: "500", fontSize: "0.82rem", lineHeight: "1.4", textAlign: "center", maxWidth: "220px" }}>
                    42, 5th cross, maraimalai nagar, velrampet, Puducherry-605004
                  </div>
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <AboutPage />
      )}

      {/* FOOTER */}
      <footer>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src={logoImg} alt="BrAInix Logo" style={{ height: "26px", width: "26px", borderRadius: "6px", objectFit: "cover", border: "0.5px solid var(--border)" }} />
          <span style={{ fontFamily: "var(--fh)", fontWeight: "800", fontSize: "1.2rem", letterSpacing: "-0.03em", background: "linear-gradient(135deg, var(--cyan), var(--violet2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>BrAInix</span>
        </div>
        <div className="f-contact" style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <a
            href="#"
            onClick={handlePhoneClick}
            className="f-contact-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "var(--text2)",
              fontSize: "0.85rem",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--cyan)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text2)"}
          >
            <Phone size={15} color="var(--cyan)" />
            <span>+91 63747 24269</span>
          </a>

          <a
            href="mailto:hashedtechs@gmail.com"
            className="f-contact-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "var(--text2)",
              fontSize: "0.85rem",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--cyan)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text2)"}
          >
            <Mail size={15} color="var(--cyan)" />
            <span>hashedtechs@gmail.com</span>
          </a>

          <a
            href="https://maps.google.com/?q=42,+5th+cross,+maraimalai+nagar,+velrampet,+Puducherry-605004"
            target="_blank"
            rel="noopener noreferrer"
            className="f-contact-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "var(--text2)",
              fontSize: "0.85rem",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--cyan)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text2)"}
          >
            <MapPin size={15} color="var(--cyan)" />
            <span>42, 5th cross, maraimalai nagar, velrampet, Puducherry</span>
          </a>
        </div>
        <div className="f-copy">© 2026 BrAInix, Inc.</div>
      </footer>

      {/* INQUIRY / ENROLLMENT MODAL */}
      <InquiryModal
        isOpen={isModalOpen}
        mode={productMode}
        item={selectedItem}
        onClose={handleCloseModal}
      />
    </>
  );
}

function AboutPage() {
  return (
    <div className="about-page" style={{ background: "var(--ink)", color: "var(--text)", paddingTop: "7rem", paddingBottom: "5rem" }}>
      {/* Hero Section */}
      <section style={{ padding: "4rem 3rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto", textAlign: "center" }}>
          <span className="sec-label" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--cyan)" }}>WHO WE ARE</span>
          <h1 className="grad" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: "800", marginTop: "1rem", marginBottom: "1.5rem", fontFamily: "var(--fh)", letterSpacing: "-0.03em" }}>
            About BrAInix
          </h1>
          <p style={{ color: "var(--text2)", fontSize: "1.1rem", fontWeight: "300", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto" }}>
            Bridging advanced web development and AI-driven adaptive education to shape the creators of tomorrow's digital economy.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section style={{ padding: "5rem 3rem", background: "var(--ink2)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 450px" }}>
            <span className="sec-label" style={{ color: "var(--cyan)" }}>Our Mission</span>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: "2.2rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Simplifying the path to unleash potential.
            </h2>
            <p style={{ color: "var(--text2)", fontSize: "0.95rem", lineHeight: "1.8", fontWeight: "300" }}>
              At BrAInix, we bridge the gap between cutting-edge technology and human capability. Our mission is to engineer high-fidelity web products for businesses while empowering learners to master complex engineering skills through adaptive, personalized pathways. We believe technology should expand horizons, not create barriers.
            </p>
          </div>
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
            <img
              src={ourMissionImg}
              alt="Our Mission"
              style={{ width: "100%", maxWidth: "450px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0, 229, 255, 0.15)" }}
            />
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section style={{ padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
            <img
              src={ourVisionImg}
              alt="Our Vision"
              style={{ width: "100%", maxWidth: "450px", borderRadius: "24px", border: "1px solid var(--border2)", boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)" }}
            />
          </div>
          <div style={{ flex: "1 1 450px" }}>
            <span className="sec-label" style={{ color: "var(--violet2)" }}>Our Vision</span>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: "2.2rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Empowering a limitless digital future.
            </h2>
            <p style={{ color: "var(--text2)", fontSize: "0.95rem", lineHeight: "1.8", fontWeight: "300" }}>
              Our vision outlines the desired future state we aspire to achieve, breaking barriers and enabling users to explore endless possibilities in the digital realm. By combining custom product design, robust system architectures, and AI-powered education, we are sculpting the future of digital product building.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "5rem 3rem", background: "var(--ink2)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 450px" }}>
            <span className="sec-label" style={{ color: "var(--gold)" }}>Why Choose Us</span>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: "2.2rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "2rem" }}>
              Engineered for Excellence
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Precision-Built Custom Web Platforms",
                "Industry-Expert Consultations",
                "Continuous Quality Assurance & Robust Testing",
                "High-Fidelity UI & Luxury Brand Identity Design",
                "Highly Scalable & Secure Cloud Infrastructure",
                "Dedicated Post-Launch Technical Support",
                "Interactive, AI-Powered Learning Paths",
                "Seamless Project Transition & Handoff Setup",
                "Transparent, Collaborative Development Workflows",
                "No Overheads for Custom System Upgrades"
              ].map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", color: "var(--text)", fontSize: "0.95rem", fontWeight: "400" }}>
                  <span style={{ color: "var(--cyan)", fontWeight: "900", fontSize: "1.2rem" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
            <img
              src={whyChooseUsImg}
              alt="Why Choose Us"
              style={{ width: "100%", maxWidth: "450px", borderRadius: "24px", border: "1px solid rgba(245, 158, 11, 0.25)", boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)" }}
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <span className="sec-label" style={{ color: "var(--cyan)" }}>THE LEADERSHIP</span>
          <h2 style={{ fontFamily: "var(--fh)", fontSize: "2.2rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "3rem" }}>
            Meet Our Founder
          </h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden", border: "4px solid var(--cyan)", boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)", marginBottom: "1.5rem" }}>
              <img src={`${founderAvatarImg}?update=${Date.now()}`} alt="Founder Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <h3 style={{ fontFamily: "var(--fh)", fontSize: "1.6rem", fontWeight: "700", color: "var(--text)", marginBottom: "0.5rem" }}>
              S ABIYSHEK
            </h3>
            <p style={{ color: "var(--cyan)", fontSize: "1rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Founder & CEO, BrAInix
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
