"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";
import type React from "react";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "circle";
  color?: string;
  padding?: number; // New prop to control padding
}

export default function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc", // Default pink color
  padding = 4,
}: HighlighterProps) {
  // Destructure the new padding prop, no default needed here as we'll handle it below
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      const annotation = annotate(elementRef.current, {
        type: action === "circle" ? "circle" : "highlight",
        color: color,
        
        multiline: true,
        // Use the provided padding prop, or fallback to default based on action
        padding:
          padding !== undefined
            ? padding
            : action === "circle"
            ? 8
            : 4,
        iterations: 4, // More iterations for a natural effect
        animationDuration: 800,
      });

      annotationRef.current = annotation;
      annotation.show();
    }

    return () => {
      annotationRef.current?.remove();
    };
  }, [action, color, padding, elementRef.current]); // Add padding to dependency array

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
