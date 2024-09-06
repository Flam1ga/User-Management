import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zyjkhujhzvioknwocdpl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5amtodWpoenZpb2tud29jZHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MjgwMzUsImV4cCI6MjA0MDUwNDAzNX0.nH14dF7zly7ulBuHqTfCg8ggZyCjL1Q8sWmp9tTXXdU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
