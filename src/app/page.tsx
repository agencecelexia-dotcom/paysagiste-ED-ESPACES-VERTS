import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: clientConfig.META_TITLE,
  description: clientConfig.META_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
