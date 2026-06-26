"use client";

import { useEffect } from "react";

export function SuppressWarning() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const originalError = console.error;
      console.error = (...args) => {
        if (
          typeof args[0] === "string" &&
          args[0].includes("Encountered a script tag while rendering React component")
        ) {
          // Suppress next-themes script tag warning in React 19
          return;
        }
        originalError.apply(console, args);
      };
    }
  }, []);

  return null;
}
