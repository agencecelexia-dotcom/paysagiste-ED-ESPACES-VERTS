import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import { clientConfig } from "@/config/client.config";
import { getServices, getFeaturedProjects, getTestimonials } from "@/lib/supabase-queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: clientConfig.META_TITLE,
  description: clientConfig.META_DESCRIPTION,
};

export default async function Home() {
  const [services, projects, testimonials] = await Promise.all([
    getServices(),
    getFeaturedProjects(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <ServicesOverview services={services} />
      <FeaturedProjects projects={projects} />
      <StatsSection />
      <TestimonialsSection testimonials={testimonials} />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
