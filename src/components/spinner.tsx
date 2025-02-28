"use client";

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export function Spinner({ size = 24, color = "blue", className = "" }: SpinnerProps) {
  return (
    <div
      className={`border-4 border-${color}-500 border-t-transparent rounded-full animate-spin ${className}`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
