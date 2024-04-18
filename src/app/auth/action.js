'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

export async function login (formData) {
  const supabase = createClient()
  const email = formData.email
  const password = formData.password

  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    redirect(`/sign-in?message=${error.message}`)
  }
  return redirect('/')
}

export async function signup (formData) {
  const origin = headers().get('origin')
  const supabase = createClient()
  const email = formData.email
  const password = formData.password

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/confirm`
    }
  })
  console.log(error)

  if (error) {
    redirect('/sign-up?message=Could not authenticate user')
  }
  revalidatePath('/', 'layout')
  redirect(`/confirm?message=${formData.email}`)
}

export async function signInWithOauth () {
  const origin = headers().get('origin')
  const supabase = createClient()
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${origin}/auth/confirm`
    }
  })
  if (error) {
    redirect('/error')
  } else {
    redirect(data.url)
  }
}

export async function signOut () {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    redirect('/error')
  }
  redirect('/sign-in')
}
