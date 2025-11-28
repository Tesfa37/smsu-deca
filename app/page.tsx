import { Hero } from "@/components/home/Hero";
import { StatsGrid } from "@/components/home/StatsGrid";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { OfficerGrid } from "@/components/home/OfficerGrid";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsGrid />
      <UpcomingEvents />
      <OfficerGrid />
      <CTASection />
    </div>
  );
}
