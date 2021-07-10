import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  // process.env.NEXT_PUBLIC_SUPABASE_URL,
  // process.env.NEXT_PUBLIC_SUPABASE_KEY,
  "https://kmftqtuudtdencfhoyqk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTg2NTk3MiwiZXhwIjoxOTQxNDQxOTcyfQ.P-CraR1qgrQ-teHKPiYUyxHSO_x4dttslMaBs-KfDcI",
)