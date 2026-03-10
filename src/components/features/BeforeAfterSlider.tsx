"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après",
}: BeforeAfterSliderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={beforeImage}
            alt={beforeLabel}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterImage}
            alt={afterLabel}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        }
        handle={
          <div className="flex h-full items-center">
            <div className="h-full w-0.5 bg-accent-500" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 shadow-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-white"
              >
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4" />
              </svg>
            </div>
          </div>
        }
        style={{ height: "100%", aspectRatio: "4/3" }}
      />
      {/* Labels */}
      <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
        {afterLabel}
      </div>
    </div>
  );
}
