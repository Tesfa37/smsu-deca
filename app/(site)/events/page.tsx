import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import type { Event } from "@/lib/types";

// Mock data for events - same as UpcomingEvents component plus more
const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "DECA District Competition",
    description:
      "Compete against regional chapters in various business categories. Prepare your pitch and showcase your skills! This is your chance to advance to state competition.",
    date: "2025-02-15",
    location: "Minneapolis Convention Center",
    category: "competition",
  },
  {
    id: "2",
    title: "Professional Development Workshop",
    description:
      "Learn essential business skills from industry professionals. Topics include networking, resume building, and interview techniques.",
    date: "2025-01-20",
    location: "SMSU Business Building, Room 204",
    category: "workshop",
  },
  {
    id: "3",
    title: "Networking Mixer with Alumni",
    description:
      "Connect with successful DECA alumni working in various industries. Great opportunity for mentorship and career advice.",
    date: "2025-01-10",
    location: "SMSU Student Center",
    category: "social",
  },
  {
    id: "4",
    title: "Monthly Chapter Meeting",
    description:
      "Join us for our regular chapter meeting. We'll discuss upcoming events, competition preparation, and chapter initiatives.",
    date: "2025-01-07",
    location: "SMSU Business Building, Room 101",
    category: "meeting",
  },
  {
    id: "5",
    title: "Competition Prep Session",
    description:
      "Practice your role-plays and get feedback from experienced members and advisors. Bring your materials and be ready to practice!",
    date: "2025-01-15",
    location: "SMSU Business Building, Room 204",
    category: "workshop",
  },
];

const pastEvents: Event[] = [
  {
    id: "p1",
    title: "Fall Kickoff Meeting",
    description: "Welcome back event for all members",
    date: "2024-09-15",
    location: "SMSU Student Center",
    category: "meeting",
  },
  {
    id: "p2",
    title: "State Competition",
    description: "SMSU DECA members competed at state level",
    date: "2024-03-10",
    location: "St. Paul, MN",
    category: "competition",
  },
  {
    id: "p3",
    title: "Industry Speaker Series",
    description: "Local business leaders shared insights",
    date: "2024-10-20",
    location: "SMSU Campus",
    category: "workshop",
  },
];

function formatDate(dateString: string | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getCategoryColor(category: Event["category"]): string {
  const colors = {
    competition: "bg-error/10 text-error border-error/20",
    workshop: "bg-info/10 text-info border-info/20",
    meeting: "bg-primary-gold/10 text-primary-brown border-primary-gold/20",
    social: "bg-success/10 text-success border-success/20",
    other: "bg-muted text-muted-foreground border-border",
  };
  return colors[category] || colors.other;
}

export default function EventsPage() {
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

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full border capitalize ${getCategoryColor(
                              event.category
                            )}`}
                          >
                            {event.category}
                          </span>
                        </div>
                        <CardTitle className="text-2xl mb-2">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {event.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {formatDate(event.date)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {/* Placeholder time - would come from actual event data */}
                            6:00 PM - 8:00 PM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-primary-gold hover:bg-primary-gold/90 text-white"
                        disabled
                      >
                        Add to Calendar (Coming Soon)
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={`mailto:smsudeca@smsu.edu?subject=Question about ${event.title}`}>
                          Ask a Question
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
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
                <Card
                  key={event.id}
                  className="border-2 hover:border-primary-gold/50 transition-colors"
                >
                  <CardHeader>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border capitalize inline-block w-fit mb-3 ${getCategoryColor(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {formatDate(event.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

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

