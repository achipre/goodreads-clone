'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

export async function login (formData) {
  const supabase = createClient()
  const data = {
    email: formData.email,
    password: formData.passwordSignIn
  }
  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup (formData) {
  const supabase = createClient()
  const data = {
    email: formData.email,
    password: formData.password
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signInWithOauth (provider) {
  const origin = headers().get('origin')
  const supabase = createClient()
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider,
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
