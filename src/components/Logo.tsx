export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Building blocks arranged in a pyramid/AI pattern */}
      {/* Bottom layer - 3 blocks */}
      <rect
        x="2"
        y="20"
        width="8"
        height="8"
        rx="2"
        fill="url(#gradient1)"
      />
      <rect
        x="12"
        y="20"
        width="8"
        height="8"
        rx="2"
        fill="url(#gradient2)"
      />
      <rect
        x="22"
        y="20"
        width="8"
        height="8"
        rx="2"
        fill="url(#gradient3)"
      />

      {/* Middle layer - 2 blocks */}
      <rect
        x="7"
        y="10"
        width="8"
        height="8"
        rx="2"
        fill="url(#gradient4)"
      />
      <rect
        x="17"
        y="10"
        width="8"
        height="8"
        rx="2"
        fill="url(#gradient5)"
      />

      {/* Top layer - 1 block with sparkle */}
      <rect
        x="12"
        y="0"
        width="8"
        height="8"
        rx="2"
        fill="url(#gradient6)"
      />

      {/* AI sparkle effect */}
      <circle cx="20" cy="4" r="1.5" fill="#FFD700" opacity="0.9" />
      <circle cx="23" cy="6" r="1" fill="#FFD700" opacity="0.7" />
      <circle cx="22" cy="2" r="0.8" fill="#FFF" opacity="0.8" />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="2" y1="20" x2="10" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#667eea" />
          <stop offset="1" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="gradient2" x1="12" y1="20" x2="20" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#764ba2" />
          <stop offset="1" stopColor="#f093fb" />
        </linearGradient>
        <linearGradient id="gradient3" x1="22" y1="20" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f093fb" />
          <stop offset="1" stopColor="#f5576c" />
        </linearGradient>
        <linearGradient id="gradient4" x1="7" y1="10" x2="15" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#667eea" />
          <stop offset="1" stopColor="#f093fb" />
        </linearGradient>
        <linearGradient id="gradient5" x1="17" y1="10" x2="25" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#764ba2" />
          <stop offset="1" stopColor="#f5576c" />
        </linearGradient>
        <linearGradient id="gradient6" x1="12" y1="0" x2="20" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#667eea" />
          <stop offset="1" stopColor="#764ba2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
