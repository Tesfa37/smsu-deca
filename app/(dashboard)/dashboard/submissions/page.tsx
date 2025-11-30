"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary-brown">Contact Submissions</h1>
        <p className="text-muted-foreground mt-1">
          View and respond to contact form submissions
        </p>
      </div>

      {/* Placeholder Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary-gold" />
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Mail className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Submissions Management</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              This feature is currently under development. You'll soon be able to view,
              respond to, and manage contact form submissions from your website.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

