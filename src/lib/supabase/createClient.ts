import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cgipmrkulfoedvlljwrx.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
