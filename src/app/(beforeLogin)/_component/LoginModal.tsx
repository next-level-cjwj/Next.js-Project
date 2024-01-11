'use client'

import { handleSubmit } from './actions'
import style from './login.module.css'

export default function LoginModal() {
  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div>로그인 모달</div>

          <form action={handleSubmit}>
            <div>
              <label className={style.inputLabel} htmlFor='id'>
                아이디
              </label>
              <input name='id' />
            </div>
            <div>
              <label className={style.inputLabel} htmlFor='password'>
                비밀번호
              </label>
              <input name='password' />
            </div>
            <button type='submit'>로그인 하기</button>
          </form>
        </div>
      </div>
    </div>
  )
}
