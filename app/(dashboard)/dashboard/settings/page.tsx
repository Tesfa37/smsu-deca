"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary-brown">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure your dashboard and account preferences
        </p>
      </div>

      {/* Placeholder Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary-gold" />
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Settings className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Dashboard Settings</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              This feature is currently under development. You&apos;ll soon be able to
              customize your dashboard preferences, manage your account, and configure
              chapter settings.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

