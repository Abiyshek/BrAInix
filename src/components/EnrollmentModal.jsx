import React, { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { submitCourseEnrollment } from "../services/api";

export function EnrollmentModal({ isOpen, course, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "beginner"
  });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(null);

    if (!formData.fullName.trim()) {
      setToast({ type: "error", msg: "Please enter your full name." });
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

    setSubmitting(true);

    // Submit enrollment via API
    submitCourseEnrollment({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      courseName: course.name,
      experience: formData.experience
    })
      .then(() => {
        setSubmitting(false);
        setToast({
          type: "success",
          msg: "Registered !!!"
        });

        // Reset form and close after 2 seconds
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            experience: "beginner"
          });
          setToast(null);
          onClose();
        }, 2000);
      })
      .catch((error) => {
        setSubmitting(false);
        setToast({
          type: "error",
          msg: error.message || "Failed to submit enrollment. Please try again."
        });
      });
  };

  if (!isOpen || !course) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10000,
      backdropFilter: "blur(4px)"
    }}>
      <div style={{
        background: "var(--ink)",
        border: "0.5px solid var(--border2)",
        borderRadius: "24px",
        padding: "2.5rem",
        maxWidth: "500px",
        width: "90%",
        maxHeight: "90vh",
        overflowY: "auto",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "rgba(255, 255, 255, 0.1)",
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
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
        >
          <X size={20} color="var(--text)" />
        </button>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{
            fontFamily: "var(--fh)",
            fontSize: "1.8rem",
            fontWeight: "800",
            marginBottom: "0.5rem",
            color: "var(--text)"
          }}>
            Enroll in {course.name}
          </h2>
          <p style={{
            color: "var(--text2)",
            fontSize: "0.95rem",
            fontWeight: "300"
          }}>
            Complete the form below to register and we'll send you course details.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
          <div style={{ marginBottom: "1.3rem" }}>
            <label style={{
              display: "block",
              color: "var(--text)",
              fontSize: "0.9rem",
              fontWeight: "500",
              marginBottom: "0.5rem"
            }}>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "0.5px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                color: "var(--text)",
                fontFamily: "var(--fb)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--cyan)";
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 229, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "1.3rem" }}>
            <label style={{
              display: "block",
              color: "var(--text)",
              fontSize: "0.9rem",
              fontWeight: "500",
              marginBottom: "0.5rem"
            }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "0.5px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                color: "var(--text)",
                fontFamily: "var(--fb)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--cyan)";
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 229, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "1.3rem" }}>
            <label style={{
              display: "block",
              color: "var(--text)",
              fontSize: "0.9rem",
              fontWeight: "500",
              marginBottom: "0.5rem"
            }}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "0.5px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                color: "var(--text)",
                fontFamily: "var(--fb)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--cyan)";
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 229, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{
              display: "block",
              color: "var(--text)",
              fontSize: "0.9rem",
              fontWeight: "500",
              marginBottom: "0.5rem"
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
                background: "rgba(255, 255, 255, 0.05)",
                border: "0.5px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                color: "var(--text)",
                fontFamily: "var(--fb)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box",
                cursor: "pointer"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--cyan)";
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 229, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.target.style.boxShadow = "none";
              }}
            >
              <option value="beginner" style={{ background: "var(--ink2)" }}>Beginner</option>
              <option value="intermediate" style={{ background: "var(--ink2)" }}>Intermediate</option>
              <option value="advanced" style={{ background: "var(--ink2)" }}>Advanced</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "0.85rem 1.5rem",
              background: submitting ? "rgba(0, 229, 255, 0.3)" : "linear-gradient(135deg, var(--cyan), var(--violet))",
              color: "#000",
              fontFamily: "var(--fh)",
              fontWeight: "700",
              fontSize: "1rem",
              border: "none",
              borderRadius: "100px",
              cursor: submitting ? "not-allowed" : "pointer",
              transition: "all 0.25s",
              opacity: submitting ? 0.6 : 1
            }}
            onMouseEnter={(e) => !submitting && (e.target.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => !submitting && (e.target.style.transform = "translateY(0)")}
          >
            {submitting ? "Registering..." : "Complete Registration"}
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
            animation: "fadeUp 0.4s ease"
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
