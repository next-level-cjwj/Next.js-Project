import style from './signup.module.css'

export default function SignupModal() {
  async function handleSubmit(formData) {
    'use server'

    console.log(formData.get('nickname'))
  }

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div>회원가입 모달</div>

          <form action={handleSubmit}>
            <div>
              <label htmlFor='name'>닉네임</label>
              <input name='nickname' />
            </div>
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
            <button type='submit'>회원가입 폼 제출하기</button>
          </form>
        </div>
      </div>
    </div>
  )
}
