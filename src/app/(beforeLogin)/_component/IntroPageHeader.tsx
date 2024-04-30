import Link from 'next/link'
import style from './IntroPageHeader.module.css'

export default function IntroPageHeader() {
  return (
    <nav className={style.navFixed}>
      <div className={style.navItemContainer}>
        <span className={style.navLogo}>
          <Link href='/home'>
            <img src='/images/파이홀로고.jpg' alt='파이홀로고' />
          </Link>
          <Link href='/home' className={style.navLogoTextStyle}>
            <h3>THE PIE HOLE</h3>
          </Link>
        </span>
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
  )
}
