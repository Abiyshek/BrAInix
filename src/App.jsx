import React, { useState } from "react";
import { 
  ChevronDown, ArrowRight, Play, Mail, CheckCircle, AlertCircle, 
  Globe, Cpu, BookOpen, Search, Layers, Target, Rocket, Laptop, 
  Terminal, Shield, Settings, Briefcase, Award, Users, Zap, Phone, MapPin
} from "lucide-react";
import { HeroCanvas, HowCanvas, StarRating, InquiryModal } from "./components";
import { useCursor, useReveal } from "./hooks";
import { 
  features, courses, steps, testimonials, stats, footerLinks,
  services, servicesFeatures, servicesSteps, servicesStats
} from "./data/constants";
import { subscribeToNewsletter } from "./services/api";
import logoImg from "./assets/logo/BrAInix_logo.jpg";
import "./styles/globals.css";

export default function App() {
  const { cursorRef, dotRef, outerRef } = useCursor();
  const [productMode, setProductMode] = useState("services"); // "services" or "edu"
  useReveal(productMode);
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);

  const [preloaderActive, setPreloaderActive] = useState(true);
  const [preloaderFade, setPreloaderFade] = useState(false);

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
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
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
      <nav>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <img src={logoImg} alt="BrAInix Logo" style={{ height: "34px", width: "34px", borderRadius: "8px", objectFit: "cover", border: "0.5px solid var(--border)" }} />
            <span className="logo-text" style={{ fontFamily: "var(--fh)", fontWeight: "800", fontSize: "1.4rem", letterSpacing: "-0.03em", background: "linear-gradient(135deg, var(--cyan), var(--violet2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>BrAInix</span>
          </div>
          
          {/* Dynamic Switcher in Nav */}
          <div className="prod-switcher">
            <button 
              className={`switcher-btn ${productMode === "services" ? "active services" : ""}`}
              onClick={() => setProductMode("services")}
            >
              Services
            </button>
            <button 
              className={`switcher-btn ${productMode === "edu" ? "active edu" : ""}`}
              onClick={() => setProductMode("edu")}
            >
              Edu Platform
            </button>
          </div>
        </div>

        <ul className="nav-links">
          {productMode === "services" ? (
            <>
              <li><a href="#features">Studio Solutions</a></li>
              <li><a href="#courses">Our Services</a></li>
              <li><a href="#how">Delivery Flow</a></li>
            </>
          ) : (
            <>
              <li><a href="#features">Platform Features</a></li>
              <li><a href="#courses">Course Catalog</a></li>
              <li><a href="#how">How it works</a></li>
            </>
          )}
        </ul>

        <button 
          className="nav-cta" 
          onClick={() => document.getElementById("cta").scrollIntoView({ behavior: "smooth" })}
        >
          {productMode === "services" ? "Request Consultation" : "Start Learning"}
        </button>
      </nav>

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
      <section style={{ padding: "4rem 3rem", background: "var(--ink2)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
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
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.02)",
                border: "0.5px solid rgba(0, 229, 255, 0.15)",
                borderRadius: "20px",
                color: "var(--text)",
                textDecoration: "none",
                transition: "all 0.25s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 229, 255, 0.04)";
                e.currentTarget.style.borderColor = "var(--cyan)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
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
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.02)",
                border: "0.5px solid rgba(167, 139, 250, 0.15)",
                borderRadius: "20px",
                color: "var(--text)",
                textDecoration: "none",
                transition: "all 0.25s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(167, 139, 250, 0.04)";
                e.currentTarget.style.borderColor = "var(--violet2)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
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
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.02)",
                border: "0.5px solid rgba(245, 158, 11, 0.15)",
                borderRadius: "20px",
                color: "var(--text)",
                textDecoration: "none",
                transition: "all 0.25s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245, 158, 11, 0.04)";
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
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
            <span>42, 5th cross, maraimalai nagar, Puducherry</span>
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
