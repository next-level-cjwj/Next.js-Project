// SignupModal.tsx
import onSubmit from '../_lib/signup'
import BackButtons from './BackButtons'
import style from './signup.module.css'

export default function SignupModal() {
  const submit = onSubmit

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div>🔥Tadak Tadak🔥 계정을 생성해 보세요.</div>
          <BackButtons />
        </div>
        <form
          action={submit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <div>
            <label className={style.inputLabel} htmlFor='nickname'>
              닉네임
            </label>
            <input
              id='nickname'
              name='nickname'
              type='text'
              placeholder='닉네임을 입력해 주세요. 😆'
              required
            />
          </div>
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
          <div>
            <label className={style.inputLabel} htmlFor='image'>
              프로필 이미지
            </label>
            <input
              id='image'
              name='image'
              type='file'
              accept='image/*'
              required
            />
          </div>
          <button type='submit' style={{ width: '120px' }}>
            🙌 회원가입 하기 🙌
          </button>
        </form>
      </div>
    </div>
  )
}
