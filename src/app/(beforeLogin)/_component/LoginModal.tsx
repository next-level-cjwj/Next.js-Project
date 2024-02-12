'use client'

import { useFormState, useFormStatus } from 'react-dom'
import onSubmit from '../_lib/signup'
import BackButtons from './BackButtons'
import style from './login.module.css'

export default function LoginModal() {
  const submit = onSubmit

  const [state, formAction] = useFormState(onSubmit, { message: null })
  const { pending } = useFormStatus()

  const showMessage = (message: string | undefined | null) => {
    if (message === 'no_id') {
      return '아이디를 다시 입력해주세요!'
    }
    if (message === 'no_password') {
      return '비밀번호를 다시 입력해주세요!'
    }
    return ''
  }

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div>🔥Tadak Tadak🔥 계정을 생성해 보세요.</div>
          <BackButtons />
        </div>

        <form
          action={formAction}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <div>
            <label className={style.inputLabel} htmlFor='id'>
              아이디
            </label>
            <input
              id='id'
              name='id'
              type='text'
              placeholder='아이디를 입력해 주세요. 😎'
              required
            />
          </div>
          <div>
            <label className={style.inputLabel} htmlFor='password'>
              비밀번호
            </label>
            <input
              id='password'
              name='password'
              type='text'
              placeholder='비밀번호를 입력해 주세요. 🤩'
              required
            />
          </div>
          <div className={style.modalFooter}>
            <div style={{ color: 'red' }}>{showMessage(state?.message)}</div>
            <button type='submit' style={{ width: '120px' }}>
              🙌 로그인 하기 🙌
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
