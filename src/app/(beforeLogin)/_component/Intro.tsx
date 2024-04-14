import Link from 'next/link'
import style from './Intro.module.css'

export default function Intro() {
  return (
    <>
      <nav className={style.navFixed}>
        <div className={style.navItemContainer}>
          <span className={style.navLogo}>
            <Link href='/home'>
              <img src='/images/파이홀로고.jpg' alt='파이홀로고' />
            </Link>
            <Link href='/home' className={style.navLogoTextStyle}>
              <h3>PIE HOLE</h3>
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
      <main className={style.main}>
        <section className={style.firstSection}>
          <div className={style.firstSectionBgImgContainer}>
            <img
              className={style.fullScreenImg}
              src='/images/햇살.jpeg'
              alt='bgImage'
            />
            <div className={style.firstSectionTextStyle}>PIE HOLE</div>
            <button className={style.downLogoButton}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 200 200'
                width='200'
                height='200'
                preserveAspectRatio='xMidYMid meet'
                className={style.downLogo}
              >
                <g clip-path='url(#__lottie_element_167)'>
                  <g
                    transform='matrix(0.2705936133861542,0,0,0.2705936133861542,23.286712646484375,58.59837341308594)'
                    opacity='0.2'
                  >
                    <path
                      fill='rgb(20,23,37)'
                      fill-opacity='1'
                      d=' M283.4639892578125,274.375 C273.343994140625,274.375 263.2250061035156,272.17498779296875 253.79800415039062,267.7760009765625 C253.79800415039062,267.7760009765625 16.750999450683594,157.16299438476562 16.750999450683594,157.16299438476562 C4.238999843597412,151.32400512695312 -1.1710000038146973,136.447998046875 4.668000221252441,123.93599700927734 C10.505999565124512,111.42400360107422 25.381999969482422,106.01499938964844 37.89400100708008,111.85399627685547 C37.89400100708008,111.85399627685547 274.9410095214844,222.46600341796875 274.9410095214844,222.46600341796875 C280.3580017089844,224.9929962158203 286.5710144042969,224.99200439453125 291.98699951171875,222.46600341796875 C291.98699951171875,222.46600341796875 529.0349731445312,111.85399627685547 529.0349731445312,111.85399627685547 C541.5469970703125,106.01399993896484 556.4219970703125,111.42400360107422 562.260986328125,123.93599700927734 C568.0989990234375,136.447998046875 562.6890258789062,151.32400512695312 550.177001953125,157.16299438476562 C550.177001953125,157.16299438476562 313.1300048828125,267.7760009765625 313.1300048828125,267.7760009765625 C303.7040100097656,272.17498779296875 293.5840148925781,274.375 283.4639892578125,274.375z'
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
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
