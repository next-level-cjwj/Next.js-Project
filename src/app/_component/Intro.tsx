import Link from 'next/link'
import style from './intro.module.css'

export default function Intro() {
  return (
    <>
      <nav className={style.navFixed}>
        <div className={style.navItemContainer}>
          <div className={style.navLogo}>
            <Link href='/i/flow/login'>🍰로고🍰</Link>
          </div>
          <div className={style.navMenu}>
            <ul>
              <li>
                <Link href='/i/flow/login'>로그인</Link>
              </li>
              <li>
                <Link href='/i/flow/signup'>회원 가입</Link>
              </li>
              <li>🎂💕</li>
            </ul>
          </div>
        </div>
      </nav>
      <main className={style.main}>
        <section className={style.firstSection}>
          <div className={style.firstSectionImgContainer}>
            <img
              className={style.fullScreenImg}
              src='/images/햇살.jpeg'
              alt='bgImage'
            />
          </div>
        </section>
        <section className={style.secondSection}></section>
        <section className={style.thirdSection}>
          <h1>🔥Tadak Tadak🔥</h1>
          {/* <div>
            <Link href='/i/flow/signup'>회원 가입</Link>
            <Link href='/i/flow/login'>로그인</Link>
          </div> */}
        </section>
      </main>
      <footer></footer>
    </>
  )
}
