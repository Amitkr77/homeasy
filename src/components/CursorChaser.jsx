"use client"
// CursorChaser.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorChaser() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (window.innerWidth < 768) {
      cursor.style.display = "none"; 
      return;
    }

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleHover = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#3b82f6", // blue-500
        opacity: 0.6,
        duration: 0.3,
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#3b82f6",
        opacity: 0.3,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 opacity-30 z-[9999] pointer-events-none"
      style={{
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference", 
      }}
    />
  );
}
