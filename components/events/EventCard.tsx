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

interface EventCardProps {
  event: Event;
  variant?: "default" | "compact";
}

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

export function EventCard({ event, variant = "default" }: EventCardProps) {
  if (variant === "compact") {
    return (
      <Card className="border-2 hover:border-primary-gold/50 transition-colors h-full">
        <CardHeader>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border capitalize inline-block w-fit mb-3 ${getCategoryColor(
              event.category
            )}`}
          >
            {event.category}
          </span>
          <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {event.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <time dateTime={event.date.toString()}>
                {formatDate(event.date)}
              </time>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-3">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full border capitalize ${getCategoryColor(
              event.category
            )}`}
          >
            {event.category}
          </span>
        </div>
        <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
        <CardDescription className="text-base line-clamp-3">
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3">
            <Calendar
              className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                <time dateTime={event.date.toString()}>
                  {formatDate(event.date)}
                </time>
              </p>
              <p className="text-sm text-muted-foreground">
                {/* Default time if not specified */}
                6:00 PM - 8:00 PM
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin
              className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                {event.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {event.registrationUrl ? (
            <Button
              asChild
              className="bg-primary-gold hover:bg-primary-gold/90 text-white"
            >
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          ) : (
            <Button
              className="bg-primary-gold hover:bg-primary-gold/90 text-white"
              disabled
            >
              Registration Coming Soon
            </Button>
          )}
          <Button variant="outline" asChild>
            <a
              href={`mailto:smsudeca@smsu.edu?subject=Question about ${event.title}`}
            >
              Ask a Question
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

