"use client"
import React, { useEffect, useRef } from 'react';

const CursorChaser = () => {
  const chaserRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const speed = 0.1; 
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (chaserRef.current) {
        chaserRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={chaserRef}
      className="absolute w-8 h-8 bg-blue-500 rounded-full pointer-events-none transform transition-all duration-200 ease-in-out"
    />
  );
};

export default CursorChaser;
