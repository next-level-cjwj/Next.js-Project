'use client'

import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const { data: me } = useSession()

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/')
    })
  }

  // 내 정보 없으면 로그아웃 버튼 안 보여주기
  if (!me?.user) {
    return null
  }

  return (
    <button onClick={onLogout}>
      <div>
        <div>🔙로그아웃🔙</div>
        <img src={me.user?.image!} alt={me.user?.id} />
      </div>
      <div>
        <div>{me.user?.name}</div>
        <div>@{me.user?.id}</div>
      </div>
    </button>
  )
}
