"use client";
import { createContext, useContext, useRef, useEffect, useState } from "react";
import gsap from "gsap";

const CustomCursorContext = createContext();

export function CustomCursorProvider({ children }) {
  const cursorRef = useRef(null);
  const [cursorStyle, setCursorStyle] = useState({ color: "#ffffff", scale: 1 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl || typeof window === "undefined") return;

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setShowCursor(false);
      return;
    }

    setShowCursor(true);

    gsap.set(cursorEl, { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const xSet = gsap.quickSetter(cursorEl, "x", "px");
    const ySet = gsap.quickSetter(cursorEl, "y", "px");

    let x = 0,
      y = 0;
    let mouseX = 0,
      mouseY = 0;

    const move = () => {
      x += (mouseX - x) * 0.15;
      y += (mouseY - y) * 0.15;
      xSet(x);
      ySet(y);
      requestAnimationFrame(move);
    };
    move();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const show = () => gsap.to(cursorEl, { autoAlpha: 1, duration: 0.2 });
    const hide = () => gsap.to(cursorEl, { autoAlpha: 0, duration: 0.2 });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.to(cursorRef.current, {
        backgroundColor: cursorStyle.color,
        scale: cursorStyle.scale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [cursorStyle, showCursor]);

  return (
    <CustomCursorContext.Provider value={{ setCursorStyle }}>
      {children}
      {showCursor && (
        <div
          ref={cursorRef}
          className="w-10 h-10 rounded-full fixed top-0 left-0 pointer-events-none mix-blend-difference z-[9999]"
        />
      )}
    </CustomCursorContext.Provider>
  );
}

export const useCustomCursor = () => useContext(CustomCursorContext);
