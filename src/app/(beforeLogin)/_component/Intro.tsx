import Link from 'next/link'
import style from './Intro.module.css'

export default function Intro() {
  return (
    <>
      <nav className={style.navFixed}>
        <div className={style.navItemContainer}>
          <div className={style.navLogo}>
            <Link href='/home'>
              <img src='/images/파이홀로고.jpg' alt='파이홀로고' />
            </Link>
          </div>
          <div className={style.navMenu}>
            <ul>
              <li>
                <Link href='/i/flow/login' className='navTextStyle'>
                  로그인
                </Link>
              </li>
              <li>
                <Link href='/i/flow/signup' className='navTextStyle'>
                  회원 가입
                </Link>
              </li>
              <li>🎂💕</li>
            </ul>
          </div>
        </div>
      </nav>
      <main className={style.main}>
        <section className={style.firstSection}>
          <div className={style.firstSectionBgImgContainer}>
            <img
              className={style.fullScreenImg}
              src='/images/햇살.jpeg'
              alt='bgImage'
            />
            <div className={style.firstSectionTextStyle}>PIE HOLE</div>
          </div>
        </section>
        <section className={style.secondSection}></section>
        <section className={style.thirdSection}>
          <h1>🍰Pie Hole🍰</h1>
        </section>
      </main>
      <footer></footer>
    </>
  )
}
