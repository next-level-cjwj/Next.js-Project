'use client'

import { Session } from '@auth/core/types'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {
  me: Session | null
}

export default function LogoutButton({ me }: Props) {
  const router = useRouter()

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/')
    })
  }

  if (!me?.user) {
    return null
  }

  return (
    <button onClick={onLogout}>
      <div>
        <div>🔙로그아웃🔙</div>
        <img src={me.user?.image!} alt={me.user?.email as string} />
      </div>
      <div>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}
