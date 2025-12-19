import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mopjzdwkneygkgavuejq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcGp6ZHdrbmV5Z2tnYXZ1ZWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMzI0NjAsImV4cCI6MjA4MTcwODQ2MH0.dHJZPpNfPpotvmv21-yIGbrMEl6IG9_G9JfgqP-FwN8"
);
