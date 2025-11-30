"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function OfficersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary-brown">Officers</h1>
        <p className="text-muted-foreground mt-1">
          Manage your DECA chapter officer team
        </p>
      </div>

      {/* Placeholder Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary-gold" />
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Users className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Officer Management</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              This feature is currently under development. You&apos;ll soon be able to add,
              edit, and manage your chapter&apos;s officer profiles and positions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

