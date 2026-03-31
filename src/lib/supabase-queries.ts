import { createClient } from "./supabase";
import { projectFromRow, serviceFromRow, testimonialFromRow } from "./supabase-helpers";
import type { Project, Service, Testimonial } from "@/types";
import { projects as fallbackProjects } from "@/data/projects";
import { services as fallbackServices } from "@/data/services";
import { testimonials as fallbackTestimonials } from "@/data/testimonials";

const supabase = createClient();

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("year", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(projectFromRow);
  } catch {
    return fallbackProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return projectFromRow(data);
  } catch {
    return fallbackProjects.find((p) => p.slug === slug) ?? null;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("featured", true)
      .order("year", { ascending: false })
      .limit(3);
    if (error) throw error;
    return (data ?? []).map(projectFromRow);
  } catch {
    return fallbackProjects.filter((p) => p.featured).slice(0, 3);
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("order", { ascending: true });
    if (error) throw error;
    return (data ?? []).map(serviceFromRow);
  } catch {
    return fallbackServices;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return serviceFromRow(data);
  } catch {
    return fallbackServices.find((s) => s.slug === slug) ?? null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(testimonialFromRow);
  } catch {
    return fallbackTestimonials;
  }
}
