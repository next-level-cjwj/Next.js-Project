import style from '@/app/(afterLogin)/layout.module.css'
import { auth } from '@/auth'
import Link from 'next/link'
import { ReactNode } from 'react'
import LogoutButton from './_component/LogoutButton'
import NavMenu from './_component/NavMenu'

type Props = {
  children: ReactNode
}

export default async function AfterLoginLayout({ children }: Props) {
  const session = await auth()

  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href='/home'>
              <div>🔥</div>
            </Link>

            {session?.user && (
              <>
                <nav>
                  <ul>
                    <NavMenu />
                  </ul>
                  <Link className={style.postButton} href='/compose/tadak'>
                    🔥 글 게시하기 🔥
                  </Link>
                </nav>
                <LogoutButton />
              </>
            )}
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <div>
              🔎 RightSearchZone: 검색 페이지 일때를 제외하고 세번째 파트에 있는
              검색부분
            </div>
            <div>
              ✨✨✨✨✨✨ <br />
              타닥타닥 기획에 맞게 꾸며 보자!
              {/* TrendSection은 검색하기 페이지 맨 오른쪽에 팔로우 추천 상단에만
              있어도 될 것 같다. 이 부분을 타닥타닥 기획에 맞게 꾸며 보자, 무다
              planet에 해당하는 부분처럼 해도 시선을 끌 것 같다. */}
            </div>
            <div className={style.followRecommend}>
              <h4>팔로우 추천</h4>
              <div>사람1</div>
              <div>사람2</div>
              <div>사람3</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
