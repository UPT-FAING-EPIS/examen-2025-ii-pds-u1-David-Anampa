import { createClient } from '@supabase/supabase-js'

// Tu API_URL
const supabaseUrl = "https://tjdjgiovxfquisozzsax.supabase.co"

// Tu API_KEY (usa la anon public que te dieron)
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZGpnaW92eGZxdWlzb3p6c2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0MjI1NjUsImV4cCI6MjA3Mzk5ODU2NX0.7WCAgHsPVLiImf-6DCaJr2H-Ax_o1rJkB0vEbmRxyWk"

export const supabase = createClient(supabaseUrl, supabaseKey)
