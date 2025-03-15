"use client";

import React, { useEffect } from "react";
import "./globals.css"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const createComet = () => {
      const comet = document.createElement("span");
      comet.className = "comet";
      comet.style.left = `${Math.random() * window.innerWidth}px`;
      comet.style.animationDuration = `${Math.random() * 2 + 2}s`;
      document.body.appendChild(comet);

      setTimeout(() => {
        comet.remove();
      }, 4000);
    };

    const interval = setInterval(() => {
      if (document.querySelectorAll(".comet").length < 5) {
        createComet();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="es">
      <body>
        <nav className="fixed top-0 right-0 h-full w-20 bg-opacity-50 backdrop-blur-sm flex flex-col items-center py-6">
          <ul className="space-y-8">
          </ul>
        </nav>
        <main className="min-h-screen bg-gradient-to-b from-[var(--background)] to-[#141B2D] flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
