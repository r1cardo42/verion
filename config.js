const supabaseUrl = https://bktbxspankyryhohgfyw.supabase.co/rest/v1/
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrdGJ4c3Bhbmt5cnlob2hnZnl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NTQ4MzcsImV4cCI6MjEwMjIzMDgzN30.W6v-BRgfJsBwPovnI3fzNBsOPv1XUQwmnrq1PBQPzv4

// Можно добавить console.log(supabaseAnonKey) временно, 
// чтобы убедиться, что ключ реально доходит до кода, а не выдает undefined.

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
