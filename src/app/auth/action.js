'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

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
  console.log(provider)
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithOAuth({
    provider
  })

  if (error) {
    redirect('/error')
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
