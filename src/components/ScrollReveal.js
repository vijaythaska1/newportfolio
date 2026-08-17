import React, { useEffect, useRef, useState } from "react";

/**
 * Modular ScrollReveal Component
 * Uses IntersectionObserver to trigger smooth GPU-accelerated scroll animations on any element.
 * 
 * Props:
 * - animation: "fade-up" | "fade-left" | "fade-right" | "zoom-in" (default: "fade-up")
 * - delay: delay in milliseconds (default: 0)
 * - className: additional CSS classes
 */
function ScrollReveal({ children, animation = "fade-up", delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${animation} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
