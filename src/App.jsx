import React, { useState } from "react";
import { ChevronDown, ArrowRight, Play, Mail, CheckCircle, AlertCircle, Globe, Cpu, BookOpen, Search, Layers, Target, Rocket } from "lucide-react";
import { HeroCanvas, HowCanvas, StarRating, EnrollmentModal } from "./components";
import { useCursor, useReveal } from "./hooks";
import { features, courses, steps, testimonials, stats, footerLinks } from "./data/constants";
import { subscribeToNewsletter } from "./services/api";
import "./styles/globals.css";

export default function App() {
  const { cursorRef, dotRef, outerRef } = useCursor();
  useReveal();

  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSignup = () => {
    setToast(null);
    if (!email || !email.includes("@") || !email.includes(".")) {
      setToast({ type:"error", msg:"Please enter a valid email address." });
      return;
    }
    setSending(true);
    
    subscribeToNewsletter(email)
      .then(() => {
        setSending(false);
        setEmail("");
        setToast({ type:"success", msg:"Successfully subscribed! Check your email for confirmation." });
      })
      .catch((error) => {
        setSending(false);
        setToast({ type:"error", msg:error.message || "Failed to subscribe. Please try again." });
      });
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsEnrollmentOpen(true);
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      {/* CURSOR */}
      <div id="np-cursor" ref={cursorRef}>
        <div className="cur-ring" ref={outerRef} />
        <div className="cur-dot"  ref={dotRef} />
      </div>

      {/* NAV */}
      <nav>
        <div className="logo">BrAInix</div>
        <ul className="nav-links">
          <li><a href="#features">Platform</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#how">How it works</a></li>
          {/* <li><a href="#testimonials">Stories</a></li> */}
        </ul>
        <button className="nav-cta" onClick={() => document.getElementById("cta").scrollIntoView({behavior:"smooth"})}>
          Start Learning
        </button>
      </nav>

      {/* HERO */}
      <section id="hero">
        <HeroCanvas />
        <div className="hero-content">
          <div className="hero-badge"><span className="badge-dot"/><Cpu size={12}/>AI-Powered Learning Platform</div>
          <h1>Learn Smarter.<br/><span className="grad">Think Deeper.</span><br/>Grow Faster.</h1>
          <p className="hero-sub">BrAInix adapts to your unique mind, delivering personalized, immersive education powered by cutting-edge AI and real-world expertise.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById("courses").scrollIntoView({behavior:"smooth"})}>
              <BookOpen size={18}/> Explore Courses
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById("how").scrollIntoView({behavior:"smooth"})}>
              <Play size={16}/> See How It Works
            </button>
          </div>
          <div className="hero-stats">
            {stats.map(({num, label}) => (
              <div key={label} style={{textAlign:"center"}}>
                <div className="stat-num">{num}</div>
                <div className="stat-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-ind" onClick={() => document.getElementById("features").scrollIntoView({behavior:"smooth"})}>
          <div className="scroll-line"/>
          <ChevronDown size={14}/>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="features-header reveal">
          <div>
            <div className="sec-label">The Platform</div>
            <h2 className="sec-title">Built for the future<br/>of human potential</h2>
          </div>
          <p className="sec-sub">Every tool, every feature engineered to remove friction between you and your breakthrough moment.</p>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div className="feature-card reveal" key={f.title}>
              <div className={`feat-icon ${f.cls}`}>{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses">
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="sec-label reveal">Course Catalog</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"1rem"}}>
            <h2 className="sec-title reveal">Courses that open<br/>new worlds</h2>
            <p className="sec-sub reveal" style={{maxWidth:380,margin:0}}>From beginner to expert structured paths that actually get you there.</p>
          </div>
        </div>
        <div className="courses-row">
          {courses.map(c => (
            <div className="course-card reveal" key={c.name}>
              <div className={`course-thumb ${c.thumb}`}>
                {c.icon}
                <span className="thumb-badge">{c.badge}</span>
              </div>
              <div className="course-body">
                <div className="course-tags">
                  {c.tags.map(t => <span key={t.l} className={`ctag ${t.cls||""}`}>{t.l}</span>)}
                </div>
                <div className="course-name">{c.name}</div>
                <div className="course-desc">{c.desc}</div>
                <div className="course-footer">
                  <div>
                    <div className="c-price" style={{color:c.priceColor}}>{c.price}</div>
                    <div className="c-meta">{c.meta}</div>
                  </div>
                  <button className="c-btn" onClick={() => handleEnrollClick(c)}>Enroll <ArrowRight size={12}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <HowCanvas />
        <div className="how-inner">
          <div className="reveal">
            <div className="sec-label">The Process</div>
            <h2 className="sec-title" style={{marginBottom:"2.5rem"}}>From zero to<br/>career-ready</h2>
            <div className="how-steps">
              {steps.map((s,i) => (
                <div className="step" key={s.title}>
                  <div className="step-num">0{i+1}</div>
                  <div>
                    <div className="step-title">{s.icon}{s.title}</div>
                    <p className="step-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="how-visual reveal">
            <div className="orb-ring r1"/>
            <div className="orb-ring r2"/>
            <div className="orb-ring r3"/>
            <div className="how-orb">
              <div className="orb-inner">
                <Search size={64} color="#00E5FF" strokeWidth={1}/>
                <div className="orb-label">BrAInix AI</div>
                <div className="orb-sub">Adaptive Intelligence Engine</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - COMMENTED OUT */}

      {/* CTA */}
      <section id="cta">
        <div className="cta-inner">
          <div className="cta-glow"/>
          <div className="sec-label">Join 100+ Learners</div>
          <h2>Your next chapter<br/>starts <span className="grad">right now</span></h2>
          <p>Get 7 days free. No credit card needed. Cancel anytime. Pure, focused learning from day one.</p>
          <div className="input-row">
            <input className="email-inp" type="email" placeholder="Enter your email address"
              value={email} onChange={e=>setEmail(e.target.value)}
              onKeyDown={e=>e.key==="Enter"&&handleSignup()}/>
            <button className="btn-primary" style={{whiteSpace:"nowrap",padding:".72rem 1.7rem",fontSize:".88rem"}}
              onClick={handleSignup} disabled={sending}>
              <Mail size={16}/>{sending?"Sending…":"Get Started Free"}
            </button>
          </div>
          {toast && (
            <div className={`toast ${toast.type}`}>
              {toast.type==="success"
                ? <CheckCircle size={15}/>
                : <AlertCircle size={15}/>}
              {toast.msg}
            </div>
          )}
          <div className="mail-note">
            <Globe size={12} color="var(--muted)"/>
            Newsletter subscription active
          </div>
          <div style={{fontSize:".78rem",color:"var(--muted)",marginTop:".5rem"}}>Join 100+ learners who started this week</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="f-logo">BrAInix</div>
        <div className="f-contact">
          <div>eMail:<a href="mailto:hashedtechs@gmail.com">hashedtechs@gmail.com</a></div>
          <div>Mobile:<a href="tel:9994875475">9994875475</a></div>
        </div>
        <div className="f-copy">© 2026 BrAInix, Inc.</div>
      </footer>

      {/* ENROLLMENT MODAL */}
      <EnrollmentModal 
        isOpen={isEnrollmentOpen} 
        course={selectedCourse} 
        onClose={handleCloseEnrollment} 
      />
    </>
  );
}
