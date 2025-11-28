"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import type { Event } from "@/lib/types";

// Mock data for featured events
const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "DECA District Competition",
    description:
      "Compete against regional chapters in various business categories. Prepare your pitch and showcase your skills!",
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
];

function formatDate(dateString: string | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
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

export function UpcomingEvents() {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t miss out on exciting opportunities to learn, compete, and
            connect with fellow members.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={event.date.toString()}>
                        {formatDate(event.date)}
                      </time>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border capitalize ${getCategoryColor(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 line-clamp-3 flex-grow">
                    {event.description}
                  </CardDescription>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="line-clamp-2">{event.location}</span>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group"
                  >
                    <Link href={`/events`}>
                      Learn More
                      <ArrowRight
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary-brown hover:bg-primary-brown hover:text-white"
          >
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

