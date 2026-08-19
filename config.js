import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL // или import.meta.env для Vite
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Можно добавить console.log(supabaseAnonKey) временно, 
// чтобы убедиться, что ключ реально доходит до кода, а не выдает undefined.

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
