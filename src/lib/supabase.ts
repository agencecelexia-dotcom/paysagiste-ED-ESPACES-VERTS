import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Public client — respects RLS (read-only for content, insert for contact) */
export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

/** Admin client — bypasses RLS. Server-side only. */
export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createSupabaseClient(supabaseUrl, serviceKey);
}
