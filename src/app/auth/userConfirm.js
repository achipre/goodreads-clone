'use server'
import { createClient } from '@/utils/supabase/server'

export async function userConfirm () {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const infoPar = () => {
  const suyo = 1234
  const absolute = suyo + 12
  return absolute
}
