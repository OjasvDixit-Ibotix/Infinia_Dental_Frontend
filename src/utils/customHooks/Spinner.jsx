import React from "react";

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-10 w-10",
};

export default function Spinner({ size = "lg", className = "" }) {
  return (
    <span
      role="status"
      aria-label="loading"
      className={`text-[#F0D48E] inline-block ${sizeMap[size]} animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    />
  );
}
