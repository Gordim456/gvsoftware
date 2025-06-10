
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjawenqlewhvpixelutg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qYXdlbnFsZXdodnBpeGVsdXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwOTI5NzQsImV4cCI6MjA2NDY2ODk3NH0.a5YOtXGw7aPbyEdvAuksfaBzqtlmlF0gJm9owDYE79M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
