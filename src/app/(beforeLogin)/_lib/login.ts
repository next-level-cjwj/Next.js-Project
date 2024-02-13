'use server'

import { signIn } from '@/auth'
import { redirect } from 'next/navigation'

export default async (prevState: any, formData: FormData) => {
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' }
  }

  if (
    !formData.get('password') ||
    !(formData.get('password') as string)?.trim()
  ) {
    return { message: 'no_password' }
  }

  let shouldRedirect = false

  try {
    shouldRedirect = true

    await signIn('credentials', {
      username: formData.get('id'),
      password: formData.get('password'),
      redirect: false,
    })
  } catch (err) {
    console.error(err)
    return
  }

  if (shouldRedirect) {
    redirect('/home')
  }

  return { message: null }
}
