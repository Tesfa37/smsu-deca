"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, LogOut, User } from "lucide-react";
import { signOut } from "@/lib/supabase/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  onMenuClick: () => void;
  userEmail?: string;
  userName?: string;
}

export function DashboardHeader({
  onMenuClick,
  userEmail,
  userName,
}: DashboardHeaderProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    const result = await signOut();

    if (result.success) {
      router.push("/login");
      router.refresh();
    } else {
      console.error("Sign out error:", result.error);
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-primary-gold/20 flex items-center justify-center">
              <User className="h-4 w-4 text-primary-brown" />
            </div>
            <span className="hidden sm:inline-block text-sm font-medium">
              {userName || userEmail || "User"}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {userName || "Officer"}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {userEmail}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button
              onClick={handleSignOut}
              disabled={isLoggingOut}
              className="w-full flex items-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>{isLoggingOut ? "Signing out..." : "Sign out"}</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

