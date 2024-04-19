'use server'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function forgotPassword (dataEmail) {
  const origin = headers().get('origin')
  const supabase = createClient()
  const email = dataEmail.email

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/reset-password`
  })
  if (error) {
    return redirect('/forgot-password?message=Could not authenticate user')
  }
  return redirect('/confirm?message=Password Reset link has been sent to your email address')
}
