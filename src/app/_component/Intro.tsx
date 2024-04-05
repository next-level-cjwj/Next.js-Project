import style from './intro.module.css'

export default function Intro() {
  return (
    <>
      <nav className={style.navFixed}>
        <div className={style.navItemContainer}>
          <div className={style.navLogo}>🍰로고🍰</div>
          <div className={style.navMenu}>
            <ul>
              <li>로그인</li>
              <li>회원가입</li>
              <li>🎂💕</li>
            </ul>
          </div>
        </div>
      </nav>
      <main className={style.main}>
        <section className={style.section}>
          <div>
            <img src='/bgImage.png' alt='bgImage' />
          </div>
        </section>
        <section className={style.introSecondSection}></section>
        <section className={style.introThirdSection}>
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
