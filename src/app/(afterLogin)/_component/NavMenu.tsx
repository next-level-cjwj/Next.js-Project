import Link from 'next/link'

export default function NavMenu() {
  const me = {
    id: 'ea',
  }

  return (
    <>
      <li>
        <Link href='/home'>홈</Link>
      </li>
      <li>
        <Link href='/search'>검색하기</Link>
      </li>
      <li>
        <Link href='/messages'>쪽지</Link>
      </li>
      {me?.id && (
        <li>
          <Link href={`/${me?.id}`}>프로필</Link>
        </li>
      )}
    </>
  )
}
