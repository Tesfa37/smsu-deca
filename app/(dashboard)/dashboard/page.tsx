import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Calendar, Mail, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch stats
  const [eventsResult, submissionsResult, officersResult] = await Promise.all([
    supabase
      .from("events")
      .select("id", { count: "exact" })
      .gte("date", new Date().toISOString()),
    supabase
      .from("contact_submissions")
      .select("id", { count: "exact" })
      .eq("status", "pending"),
    supabase
      .from("officers")
      .select("id", { count: "exact" })
      .eq("is_active", true),
  ]);

  const upcomingEventsCount = eventsResult.count || 0;
  const unreadSubmissionsCount = submissionsResult.count || 0;
  const activeOfficersCount = officersResult.count || 0;

  const userName = user.user_metadata?.full_name || user.email?.split("@")[0];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-primary-brown">
          Welcome back, {userName}!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Here&apos;s what&apos;s happening with SMSU DECA today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-primary-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEventsCount}</div>
            <p className="text-xs text-muted-foreground">
              Events scheduled this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unread Submissions
            </CardTitle>
            <Mail className="h-4 w-4 text-primary-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadSubmissionsCount}</div>
            <p className="text-xs text-muted-foreground">
              Pending contact forms
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Officers
            </CardTitle>
            <Users className="h-4 w-4 text-primary-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeOfficersCount}</div>
            <p className="text-xs text-muted-foreground">
              Current leadership team
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:border-primary-gold/50 transition-colors cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg">Manage Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Create, edit, and manage upcoming DECA events and meetings.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-primary-gold/50 transition-colors cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg">Review Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View and respond to contact form submissions from members.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-primary-gold/50 transition-colors cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg">Update Officers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Manage officer profiles and leadership team information.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary-gold" />
              <div className="flex-1">
                <p className="text-sm font-medium">
                  New event created: District Competition
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary-gold" />
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Contact form submission received
                </p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-gray-300" />
              <div className="flex-1">
                <p className="text-sm font-medium">Officer profile updated</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

