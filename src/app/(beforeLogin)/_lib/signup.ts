'use server'

import { signIn } from '@/auth'
import { redirect } from 'next/navigation'

export default async (formData: FormData) => {
  if (!formData.get('id')) {
    return { message: 'no_id' }
  }
  if (!formData.get('nickname')) {
    return { message: 'no_nickname' }
  }
  if (!formData.get('password')) {
    return { message: 'no_password' }
  }
  if (!formData.get('image')) {
    return { message: 'no_image' }
  }

  let shouldRedirect = false

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'post',
        body: formData,
        credentials: 'include',
      }
    )

    console.log(response.status)

    if (response.status === 403) {
      return { message: 'user_exists' }
    }

    console.log(await response.json())

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
    redirect('/home') // try/catch문 안에서 X
  }
}
