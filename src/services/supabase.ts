import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  // process.env.NEXT_PUBLIC_SUPABASE_URL,
  // process.env.NEXT_PUBLIC_SUPABASE_KEY,
  "https://oepwqydpxuwxvvhgfbvv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTg4MDA4OSwiZXhwIjoxOTQxNDU2MDg5fQ.PD_iMlfXtHydfmW-vDrk0muO4LcYL4negDWYIWJ1LQU",
)