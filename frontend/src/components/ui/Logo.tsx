import React from "react";

export default function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Indigo gradient squircle background */}
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#logoGrad)" />
      <rect x="0.5" y="0.5" width="35" height="35" rx="8.5" stroke="#6366f1" strokeOpacity="0.4" strokeWidth="1" />

      {/* Shield outline — top arc + sides + bottom point */}
      <path
        d="M18 7L9 11V19C9 23.4 13 27.4 18 29C23 27.4 27 23.4 27 19V11L18 7Z"
        fill="white"
        fillOpacity="0.15"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Bold checkmark inside shield */}
      <path
        d="M13.5 18.5L16.5 21.5L22.5 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
