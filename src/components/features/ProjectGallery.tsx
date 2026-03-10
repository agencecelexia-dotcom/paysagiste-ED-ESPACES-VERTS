"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import type { Project, ProjectCategory } from "@/types";
import { PROJECT_CATEGORY_LABELS } from "@/types";

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category))];
    return unique.map((cat) => ({
      value: cat,
      label: PROJECT_CATEGORY_LABELS[cat as ProjectCategory],
    }));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div>
      <FilterBar
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
