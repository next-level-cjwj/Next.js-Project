import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link href='/search'>다른 페이지를 검색해보세요!</Link>
    </div>
  )
}
