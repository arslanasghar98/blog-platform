import { createClient } from "@supabase/supabase-js";

// Use a custom domain as the supabase URL
console.log(import.meta.env.VITE_SUPABASE_URL);
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default supabase;
