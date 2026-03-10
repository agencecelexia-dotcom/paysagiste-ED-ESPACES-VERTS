import Link from "next/link";
import { cn } from "@/lib/utils";
import { clientConfig } from "@/config/client.config";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className }: LogoProps) {
  const [firstWord, ...rest] = clientConfig.NOM_ENTREPRISE.split(" ");
  const restOfName = rest.join(" ");

  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <path
          d="M18 2C18 2 8 8 8 18C8 23.5 12.5 28 18 28C23.5 28 28 23.5 28 18C28 8 18 2 18 2Z"
          className={light ? "fill-accent-400" : "fill-primary-600"}
        />
        <path
          d="M18 8C18 8 13 12 13 18C13 21 15.5 24 18 24C20.5 24 23 21 23 18C23 12 18 8 18 8Z"
          className={light ? "fill-accent-200" : "fill-primary-400"}
        />
        <path
          d="M18 28V34"
          strokeWidth="2"
          strokeLinecap="round"
          className={light ? "stroke-accent-400" : "stroke-primary-600"}
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-heading text-xl font-bold tracking-tight",
            light ? "text-white" : "text-neutral-900"
          )}
        >
          {firstWord}
        </span>
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-accent-300" : "text-accent-600"
          )}
        >
          {restOfName}
        </span>
      </div>
    </Link>
  );
}
