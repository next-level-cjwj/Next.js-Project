'use client'

import LoginModal from '@/app/(beforeLogin)/_component/LoginModal'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const { data: session } = useSession()

  if (session?.user) {
    router.replace('/home')

    return null
  }

  return <LoginModal />
}
