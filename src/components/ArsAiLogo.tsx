import React from 'react';

interface ArsAiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  subtitle?: string;
  className?: string;
}

/**
 * Official ArsAI Brand Assets (Source of Truth provided media)
 * - Website Header Logo: Exact ArsAI wordmark + Priest-King emblem lockup (/arsai-header-logo.png)
 * - App Icon / Mark: Exact Priest-King sculpture image with dark-green background (/arsai-app-icon.png)
 */
export function PriestKingMark({
  className = 'w-10 h-10',
  alt = 'ArsAI Priest-King Brand Mark',
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src="/arsai-app-icon.png"
      alt={alt}
      width={40}
      height={40}
      className={`block object-cover rounded-xl shadow-sm shrink-0 ${className}`}
    />
  );
}

export default function ArsAiLogo({
  size = 'md',
  showWordmark = true,
  subtitle,
  className = '',
}: ArsAiLogoProps) {
  // Sizing map for header logo image
  const logoHeightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  const markSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // If icon-only is requested
  if (!showWordmark) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <PriestKingMark className={markSizeMap[size]} />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Exact official ArsAI header logo / wordmark image */}
      <img
        src="/arsai-header-logo.png"
        alt="ArsAI INDIA — Craft x AI x Market"
        className={`${logoHeightMap[size]} w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.02]`}
      />

      {/* Optional localized subtitle / tagline */}
      {subtitle && (
        <div className="hidden lg:flex flex-col border-l border-stone-300 pl-3">
          <p className="text-[11px] text-stone-600 font-medium tracking-wide max-w-[220px] leading-tight">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
