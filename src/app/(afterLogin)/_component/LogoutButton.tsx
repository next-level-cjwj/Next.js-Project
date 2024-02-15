'use client'

import { Session } from '@auth/core/types'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {
  me: Session | null
}

export default function LogoutButton({ me }: Props) {
  const router = useRouter()
  // const { data: me } = useSession()

  // console.log('me data', me)

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
        <img src={me.user?.image!} alt={me.user?.email as string} />
      </div>
      <div>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}
