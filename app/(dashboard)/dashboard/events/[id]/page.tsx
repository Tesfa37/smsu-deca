"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventForm } from "@/components/forms/EventForm";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/types";

export default function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/events/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }

        const data = await response.json();
        setEvent(data.event);
      } catch (error) {
        console.error("Error fetching event:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load event. Please try again.",
        });
        router.push("/dashboard/events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id, router, toast]);

  const handleSuccess = () => {
    toast({
      title: "Success",
      description: "Event updated successfully",
    });
    router.push("/dashboard/events");
  };

  const handleCancel = () => {
    router.push("/dashboard/events");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-gold mx-auto mb-4" />
          <p className="text-muted-foreground">Loading event...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2">Event not found</h3>
        <p className="text-muted-foreground mb-4">
          The event you&apos;re looking for doesn&apos;t exist or has been deleted.
        </p>
        <Button onClick={() => router.push("/dashboard/events")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/dashboard/events")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-primary-brown">Edit Event</h1>
          <p className="text-muted-foreground mt-1">
            Update the details for this event
          </p>
        </div>
      </div>

      {/* Edit Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm
            event={event}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        </CardContent>
      </Card>
    </div>
  );
}

