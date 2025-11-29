/**
 * Supabase Client Configuration
 * Client-side setup using @supabase/ssr for better cookie handling
 */

import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase URL and Anon Key are required. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file."
  );
}

/**
 * Creates a Supabase client for client-side usage with automatic cookie handling
 */
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

// Export a singleton instance for convenience
export const supabase = createClient();


