"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import type { Event } from "@/lib/types";

const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  date: z.string().min(1, "Date is required"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  category: z.enum(["meeting", "competition", "workshop", "social", "other"]),
  image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  registration_url: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  is_featured: z.boolean().optional().default(false),
});

type EventFormData = z.infer<typeof eventFormSchema>;

interface EventFormProps {
  event?: Event;
  onSuccess: () => void;
  onCancel: () => void;
}

export function EventForm({ event, onSuccess, onCancel }: EventFormProps) {
  const isEditing = !!event;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: event
      ? {
          title: event.title,
          description: event.description,
          date: event.date
            ? new Date(event.date).toISOString().slice(0, 16)
            : "",
          location: event.location,
          category: event.category,
          image_url: event.image_url || "",
          registration_url: event.registration_url || "",
          is_featured: event.is_featured || false,
        }
      : {
          category: "meeting",
          is_featured: false,
        },
  });

  const onSubmit = async (data: EventFormData) => {
    try {
      // Convert empty strings to null for optional URL fields
      const eventData = {
        ...data,
        image_url: data.image_url || null,
        registration_url: data.registration_url || null,
        date: new Date(data.date).toISOString(),
      };

      const url = isEditing ? `/api/events/${event.id}` : "/api/events";
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.details && Array.isArray(result.details)) {
          // Handle validation errors
          result.details.forEach(
            (err: { field: string; message: string }) => {
              setError(err.field as keyof EventFormData, {
                type: "server",
                message: err.message,
              });
            }
          );
        } else {
          throw new Error(result.error || "Failed to save event");
        }
        return;
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving event:", error);
      setError("root", {
        type: "server",
        message:
          error instanceof Error ? error.message : "An unexpected error occurred",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Root Error Alert */}
      {errors.root && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errors.root.message}</AlertDescription>
        </Alert>
      )}

      {/* Title Field */}
      <div className="space-y-2">
        <Label htmlFor="title">
          Title <span className="text-red-500">*</span>
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="e.g., Monthly Chapter Meeting"
          {...register("title")}
          disabled={isSubmitting}
          className={errors.title ? "border-red-500" : ""}
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Date Field */}
      <div className="space-y-2">
        <Label htmlFor="date">
          Date & Time <span className="text-red-500">*</span>
        </Label>
        <Input
          id="date"
          type="datetime-local"
          {...register("date")}
          disabled={isSubmitting}
          className={errors.date ? "border-red-500" : ""}
        />
        {errors.date && (
          <p className="text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      {/* Location Field */}
      <div className="space-y-2">
        <Label htmlFor="location">
          Location <span className="text-red-500">*</span>
        </Label>
        <Input
          id="location"
          type="text"
          placeholder="e.g., SMSU Business Building, Room 101"
          {...register("location")}
          disabled={isSubmitting}
          className={errors.location ? "border-red-500" : ""}
        />
        {errors.location && (
          <p className="text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      {/* Category Field */}
      <div className="space-y-2">
        <Label htmlFor="category">
          Category <span className="text-red-500">*</span>
        </Label>
        <select
          id="category"
          {...register("category")}
          disabled={isSubmitting}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            errors.category ? "border-red-500" : ""
          }`}
        >
          <option value="meeting">Meeting</option>
          <option value="competition">Competition</option>
          <option value="workshop">Workshop</option>
          <option value="social">Social</option>
          <option value="other">Other</option>
        </select>
        {errors.category && (
          <p className="text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Description Field */}
      <div className="space-y-2">
        <Label htmlFor="description">
          Description <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="description"
          placeholder="Provide details about the event..."
          rows={4}
          {...register("description")}
          disabled={isSubmitting}
          className={errors.description ? "border-red-500" : ""}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Image URL Field (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="image_url">Image URL (Optional)</Label>
        <Input
          id="image_url"
          type="url"
          placeholder="https://example.com/image.jpg"
          {...register("image_url")}
          disabled={isSubmitting}
          className={errors.image_url ? "border-red-500" : ""}
        />
        {errors.image_url && (
          <p className="text-sm text-red-500">{errors.image_url.message}</p>
        )}
      </div>

      {/* Registration URL Field (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="registration_url">Registration URL (Optional)</Label>
        <Input
          id="registration_url"
          type="url"
          placeholder="https://forms.gle/..."
          {...register("registration_url")}
          disabled={isSubmitting}
          className={errors.registration_url ? "border-red-500" : ""}
        />
        {errors.registration_url && (
          <p className="text-sm text-red-500">
            {errors.registration_url.message}
          </p>
        )}
      </div>

      {/* Featured Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          id="is_featured"
          type="checkbox"
          {...register("is_featured")}
          disabled={isSubmitting}
          className="h-4 w-4 rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
        />
        <Label htmlFor="is_featured" className="font-normal cursor-pointer">
          Feature this event on the homepage
        </Label>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-end pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-primary-gold hover:bg-primary-gold/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {isEditing ? "Updating..." : "Creating..."}
            </>
          ) : isEditing ? (
            "Update Event"
          ) : (
            "Create Event"
          )}
        </Button>
      </div>
    </form>
  );
}

