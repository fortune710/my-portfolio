import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_API_URL || "https://ccandudlcbkuiuaqjkdd.supabase.co",
    process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjYW5kdWRsY2JrdWl1YXFqa2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDUxMDIsImV4cCI6MjAxNzI4MTEwMn0.O-cBqxYFe-duyHJybkfW0GjmlPIYuV6D9Y6brUIMb8k"
)

export default supabase;