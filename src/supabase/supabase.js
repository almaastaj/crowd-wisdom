import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zqguyhhuinzqxktfyquq.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZ3V5aGh1aW56cXhrdGZ5cXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MDIzMzEsImV4cCI6MTk5NDE3ODMzMX0.xSXgAiVpI64tJzgUVGOlLbYZRnmckjG7zEsjESz6d1I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
