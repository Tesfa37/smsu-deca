import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { EventCard } from "@/components/events/EventCard";
import { supabase } from "@/lib/supabase/client";
import type { Event } from "@/lib/types";

// Enable ISR - revalidate every hour
export const revalidate = 3600;

async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .gte("date", new Date().toISOString())
      .order("date", { ascending: true })
      .limit(10);

    if (error) {
      console.error("Error fetching upcoming events:", error);
      return [];
    }

    return (data || []).map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      imageUrl: event.image_url,
      category: event.category as Event["category"],
      registrationUrl: event.registration_url,
    }));
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
}

async function getPastEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .lt("date", new Date().toISOString())
      .order("date", { ascending: false })
      .limit(6);

    if (error) {
      console.error("Error fetching past events:", error);
      return [];
    }

    return (data || []).map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      imageUrl: event.image_url,
      category: event.category as Event["category"],
      registrationUrl: event.registration_url,
    }));
  } catch (error) {
    console.error("Failed to fetch past events:", error);
    return [];
  }
}

export default async function EventsPage() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-brown to-primary-gold/20 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6 text-primary-gold" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Stay connected with SMSU DECA through our meetings, workshops,
              competitions, and social events
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4 text-center">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Mark your calendar and join us at these exciting events
            </p>

            {upcomingEvents.length > 0 ? (
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No upcoming events scheduled at this time.
                </p>
                <p className="text-sm text-muted-foreground">
                  Check back soon or follow us on social media for updates!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4 text-center">
                Past Events
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                See what we&apos;ve been up to
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} variant="compact" />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-brown text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Don&apos;t miss out on any events! Join our mailing list or follow us
              on social media to get updates about upcoming meetings,
              competitions, and social gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-gold hover:bg-primary-gold/90 text-white"
              >
                <a href="mailto:smsudeca@smsu.edu?subject=Add me to the mailing list">
                  Join Mailing List
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <a href="/join">Become a Member</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
