'use client'

import { Session } from '@auth/core/types'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import style from './logoutButton.module.css'

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
    <button className={style.logoutButton} onClick={onLogout}>
      <div>
        <div>🌊로그아웃🌊</div>
        <Image
          width={40}
          height={40}
          src='/팽귄.png' // 나중에 사용자 이미지 연결해봐
          alt={me.user?.email as string}
        />
      </div>
      <div>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}
