// CursorChaser.jsx
import { useEffect, useRef } from "react";

export default function CursorChaser() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none w-8 h-8 rounded-full bg-blue-500 opacity-30 transition-transform duration-75 ease-out"
      style={{ transform: "translate3d(-50%, -50%, 0)" }}
    />
  );
}
