"use client";

import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: { value: string; label: string }[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      <button
        onClick={() => onFilterChange("all")}
        className={cn(
          "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
          activeFilter === "all"
            ? "bg-primary-700 text-white shadow-md"
            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
        )}
      >
        Tous
      </button>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onFilterChange(cat.value)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
            activeFilter === cat.value
              ? "bg-primary-700 text-white shadow-md"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
