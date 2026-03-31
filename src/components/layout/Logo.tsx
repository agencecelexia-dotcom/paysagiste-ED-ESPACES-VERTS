import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <Image
        src="/images/logo.png"
        alt="ED Espaces Verts"
        width={202}
        height={90}
        className={cn(
          "h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105",
          light && "brightness-0 invert"
        )}
        priority
      />
    </Link>
  );
}
