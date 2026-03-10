import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";
import { PROJECT_CATEGORY_LABELS } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/realisations/${project.slug}`}
      className="group relative block overflow-hidden rounded-xl aspect-[4/3]"
    >
      <Image
        src={project.featuredImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <Badge variant="accent" className="mb-2">
          {PROJECT_CATEGORY_LABELS[project.category]}
        </Badge>
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-200 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="mt-2 flex items-center gap-3 text-xs text-neutral-300">
          {project.surface && <span>{project.surface}</span>}
          <span>{project.location}</span>
        </div>
      </div>
    </Link>
  );
}
