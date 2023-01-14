import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../types/types";

const supabaseUrl =
  import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL ?? "http://localhost:3000";
const supabaseKey = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
