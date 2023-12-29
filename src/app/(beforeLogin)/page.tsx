import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>🔥Tadak Tadak🔥</h1>
      <div>
        <Link href='/i/flow/signup'>회원 가입</Link>
        <Link href='/i/flow/login'>로그인</Link>
      </div>
    </>
  )
}
