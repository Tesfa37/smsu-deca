/**
 * Supabase Authentication Utilities
 * Client-side auth functions for sign in, sign out, and user management
 */

import { createClient } from "./client";
import type { User } from "@supabase/supabase-js";

export interface AuthResponse {
  success: boolean;
  error?: string;
  user?: User;
}

/**
 * Get the currently authenticated user
 * @returns The current user or null if not authenticated
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const supabase = createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Error getting current user:", error.message);
      return null;
    }

    return user;
  } catch (error) {
    console.error("Unexpected error getting current user:", error);
    return null;
  }
}

/**
 * Sign in with email and password
 * @param email - User's email address
 * @param password - User's password
 * @returns AuthResponse with user data or error
 */
export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    if (!data.user) {
      return {
        success: false,
        error: "No user returned from sign in",
      };
    }

    return {
      success: true,
      user: data.user,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

/**
 * Sign out the current user
 * @returns AuthResponse indicating success or failure
 */
export async function signOut(): Promise<AuthResponse> {
  try {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

/**
 * Sign up a new user with email and password
 * @param email - User's email address
 * @param password - User's password
 * @param metadata - Optional user metadata (name, etc.)
 * @returns AuthResponse with user data or error
 */
export async function signUp(
  email: string,
  password: string,
  metadata?: {
    full_name?: string;
    role?: string;
  }
): Promise<AuthResponse> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    if (!data.user) {
      return {
        success: false,
        error: "No user returned from sign up",
      };
    }

    return {
      success: true,
      user: data.user,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

/**
 * Check if a user is authenticated
 * @returns boolean indicating if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}

/**
 * Get the current session
 */
export async function getSession() {
  try {
    const supabase = createClient();
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error("Error getting session:", error.message);
      return null;
    }

    return session;
  } catch (error) {
    console.error("Unexpected error getting session:", error);
    return null;
  }
}



