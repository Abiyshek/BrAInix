import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

export function InquiryModal({ isOpen, mode, item, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "beginner",
    budget: "₹10,000 - ₹50,000",
    description: ""
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  // Reset form when item or mode changes
  useEffect(() => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "beginner",
      budget: "₹10,000 - ₹50,000",
      description: ""
    });
    setToast(null);
  }, [item, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(null);

    if (!formData.fullName.trim()) {
      setToast({ type: "error", msg: "Please enter your name." });
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setToast({ type: "error", msg: "Please enter a valid email address." });
      return;
    }

    if (!formData.phone.match(/^\d{10}$/)) {
      setToast({ type: "error", msg: "Please enter a valid 10-digit phone number." });
      return;
    }

    if (mode === "services" && !formData.description.trim()) {
      setToast({ type: "error", msg: "Please describe your project briefly." });
      return;
    }

    setSubmitting(true);

    // Frontend-only: simulate successful submission
    setTimeout(() => {
      setSubmitting(false);
      if (mode === "services") {
        setToast({ type: "success", msg: "Inquiry Sent! We will contact you within 24 hours." });
      } else {
        setToast({ type: "success", msg: "Registered !!! Check your inbox for next steps." });
      }
      setTimeout(() => {
        onClose();
      }, 2200);
    }, 800);
  };

  if (!isOpen || !item) return null;

  const isServices = mode === "services";

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(10, 14, 26, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10000,
      backdropFilter: "blur(12px)"
    }}>
      <div style={{
        background: "var(--ink)",
        border: isServices ? "0.5px solid var(--border)" : "0.5px solid var(--border2)",
        borderRadius: "24px",
        padding: "2.5rem",
        maxWidth: "500px",
        width: "90%",
        maxHeight: "90vh",
        overflowY: "auto",
        position: "relative",
        boxShadow: isServices 
          ? "0 20px 50px rgba(0, 229, 255, 0.15)"
          : "0 20px 50px rgba(124, 58, 237, 0.15)",
        animation: "fadeUp 0.3s ease-out"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "rgba(255, 255, 255, 0.05)",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
        >
          <X size={20} color="var(--text)" />
        </button>

        <div style={{ marginBottom: "1.5rem" }}>
          <span style={{
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: isServices ? "var(--cyan)" : "var(--violet2)",
            fontWeight: "700"
          }}>
            {isServices ? "BrAInix Services Hub" : "BrAInix Academy"}
          </span>
          <h2 style={{
            fontFamily: "var(--fh)",
            fontSize: "1.8rem",
            fontWeight: "800",
            marginTop: "0.4rem",
            marginBottom: "0.5rem",
            color: "var(--text)"
          }}>
            {isServices ? `Inquire: ${item.name}` : `Enroll: ${item.name}`}
          </h2>
          <p style={{
            color: "var(--text2)",
            fontSize: "0.92rem",
            fontWeight: "300"
          }}>
            {isServices 
              ? "Share your project goals below, and we'll engineer a customized blueprint and timeline."
              : "Register below to secure your workspace and receive step-by-step onboarding details."}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{
              display: "block",
              color: "var(--text)",
              fontSize: "0.85rem",
              fontWeight: "500",
              marginBottom: "0.4rem"
            }}>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.03)",
                border: "0.5px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                color: "var(--text)",
                fontFamily: "var(--fb)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = isServices ? "var(--cyan)" : "var(--violet2)";
                e.target.style.boxShadow = isServices ? "0 0 0 3px rgba(0, 229, 255, 0.1)" : "0 0 0 3px rgba(124, 58, 237, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{
              display: "block",
              color: "var(--text)",
              fontSize: "0.85rem",
              fontWeight: "500",
              marginBottom: "0.4rem"
            }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@company.com"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.03)",
                border: "0.5px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                color: "var(--text)",
                fontFamily: "var(--fb)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = isServices ? "var(--cyan)" : "var(--violet2)";
                e.target.style.boxShadow = isServices ? "0 0 0 3px rgba(0, 229, 255, 0.1)" : "0 0 0 3px rgba(124, 58, 237, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{
              display: "block",
              color: "var(--text)",
              fontSize: "0.85rem",
              fontWeight: "500",
              marginBottom: "0.4rem"
            }}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.03)",
                border: "0.5px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                color: "var(--text)",
                fontFamily: "var(--fb)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = isServices ? "var(--cyan)" : "var(--violet2)";
                e.target.style.boxShadow = isServices ? "0 0 0 3px rgba(0, 229, 255, 0.1)" : "0 0 0 3px rgba(124, 58, 237, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {isServices ? (
            <>
              <div style={{ marginBottom: "1.2rem" }}>
                <label style={{
                  display: "block",
                  color: "var(--text)",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  marginBottom: "0.4rem"
                }}>
                  Estimated Budget *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "0.5px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "12px",
                    color: "var(--text)",
                    fontFamily: "var(--fb)",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    cursor: "pointer"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--cyan)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0, 229, 255, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <option value="Under ₹50,000" style={{ background: "var(--ink2)" }}>Under ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000" style={{ background: "var(--ink2)" }}>₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹2,50,000" style={{ background: "var(--ink2)" }}>₹1,00,000 - ₹2,50,000</option>
                  <option value="₹2,50,000+" style={{ background: "var(--ink2)" }}>₹2,50,000+ (Enterprise)</option>
                </select>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{
                  display: "block",
                  color: "var(--text)",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  marginBottom: "0.4rem"
                }}>
                  Project Overview & Requirements *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your brand, functional pages needed, timelines, reference websites, etc."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "0.5px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "12px",
                    color: "var(--text)",
                    fontFamily: "var(--fb)",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    resize: "vertical"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--cyan)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0, 229, 255, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </>
          ) : (
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block",
                color: "var(--text)",
                fontSize: "0.85rem",
                fontWeight: "500",
                marginBottom: "0.4rem"
              }}>
                Experience Level
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "0.5px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "12px",
                  color: "var(--text)",
                  fontFamily: "var(--fb)",
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "all 0.2s",
                  boxSizing: "border-box",
                  cursor: "pointer"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--violet2)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(124, 58, 237, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <option value="beginner" style={{ background: "var(--ink2)" }}>Beginner (No coding experience)</option>
                <option value="intermediate" style={{ background: "var(--ink2)" }}>Intermediate (Builds basic projects)</option>
                <option value="advanced" style={{ background: "var(--ink2)" }}>Advanced (Working professional)</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "0.85rem 1.5rem",
              background: submitting
                ? "rgba(255, 255, 255, 0.1)"
                : isServices 
                  ? "linear-gradient(135deg, var(--cyan), var(--violet))"
                  : "linear-gradient(135deg, var(--violet), var(--gold))",
              color: submitting ? "var(--muted)" : "#000",
              fontFamily: "var(--fh)",
              fontWeight: "700",
              fontSize: "1rem",
              border: "none",
              borderRadius: "100px",
              cursor: submitting ? "not-allowed" : "pointer",
              transition: "all 0.25s",
              boxShadow: submitting
                ? "none"
                : isServices 
                  ? "0 4px 15px rgba(0, 229, 255, 0.3)"
                  : "0 4px 15px rgba(124, 58, 237, 0.3)"
            }}
            onMouseEnter={(e) => {
              if (!submitting) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = isServices
                  ? "0 6px 20px rgba(0, 229, 255, 0.5)"
                  : "0 6px 20px rgba(124, 58, 237, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!submitting) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = isServices
                  ? "0 4px 15px rgba(0, 229, 255, 0.3)"
                  : "0 4px 15px rgba(124, 58, 237, 0.3)";
              }
            }}
          >
            {submitting ? "Sending Project Blueprint..." : isServices ? "Request Service Blueprint" : "Complete Registration"}
          </button>
        </form>

        {toast && (
          <div style={{
            borderRadius: "12px",
            padding: "1rem 1.2rem",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            background: toast.type === "success" 
              ? "rgba(0, 229, 255, 0.1)" 
              : "rgba(239, 68, 68, 0.1)",
            border: toast.type === "success"
              ? "0.5px solid var(--cyan)"
              : "0.5px solid #EF4444",
            color: toast.type === "success" ? "var(--cyan)" : "#FCA5A5",
            marginTop: "1.2rem"
          }}>
            {toast.type === "success"
              ? <CheckCircle size={18} />
              : <AlertCircle size={18} />}
            <span>{toast.msg}</span>
          </div>
        )}
      </div>
    </div>
  );
}
