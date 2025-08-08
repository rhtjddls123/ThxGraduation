import { FlowerIcon, LeafIcon } from "lucide-react";
import type { CSSProperties } from "react";

interface LeafFlowerIconProps {
  leafColor: string;
  animationDelay: string;
  animationDuration: string;
  className?: string;
  style?: CSSProperties;
}

export default function LeafFlowerIcon({
  leafColor,
  animationDelay,
  animationDuration,
  className = "",
  style
}: LeafFlowerIconProps) {
  return (
    <div
      className={`absolute animate-bounce ${className}`}
      style={{ animationDelay, animationDuration, ...style }}
    >
      <div className="relative">
        <div
          className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-pink-200`}
        >
          <div
            className={`w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-${leafColor} text-sm sm:text-base`}
          >
            <LeafIcon className="ri-leaf-fill" />
          </div>
        </div>
        <div className="absolute -top-1 -right-1">
          <div className="w-2 h-2 sm:w-3 sm:h-3 flex items-center justify-center">
            <FlowerIcon className="ri-flower-fill text-pink-300 text-xs" />
          </div>
        </div>
        <div className="absolute -bottom-1 -left-1">
          <div className="w-2 h-2 sm:w-3 sm:h-3 flex items-center justify-center">
            <FlowerIcon className="ri-flower-fill text-purple-300 text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
