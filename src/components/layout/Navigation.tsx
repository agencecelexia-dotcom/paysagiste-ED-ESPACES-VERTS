"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";

interface NavigationProps {
  light?: boolean;
}

export default function Navigation({ light = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative text-sm font-medium tracking-wide transition-colors duration-300 py-2",
              light
                ? isActive
                  ? "text-accent-300"
                  : "text-white/90 hover:text-accent-300"
                : isActive
                  ? "text-primary-700"
                  : "text-neutral-600 hover:text-primary-700",
              "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent-500 after:transition-all after:duration-300",
              isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
