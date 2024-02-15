'use server'

import { signIn } from '@/auth'
import { redirect } from 'next/navigation'

export default async (prevState: any, formData: FormData) => {
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' }
  }
  if (
    !formData.get('nickname') ||
    !(formData.get('nickname') as string)?.trim()
  ) {
    return { message: 'no_nickname' }
  }
  if (
    !formData.get('password') ||
    !(formData.get('password') as string)?.trim()
  ) {
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

    if (response.status === 403) {
      return { message: 'user_exists' }
    }

    shouldRedirect = true

    // 회원 가입 성공 후 로그인까지 바로 되게 한다.
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
