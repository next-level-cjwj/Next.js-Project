import { redirect } from 'next/navigation'
import BackButtons from './BackButtons'
import style from './signup.module.css'

export default function SignupModal() {
  const formAction = async (formData: FormData) => {
    'use server'

    // form data에 대한 검증
    if (!formData.get('nickname')) {
      return { message: 'no_nickname' }
    }
    if (!formData.get('id')) {
      return { message: 'no_id' }
    }
    if (!formData.get('password')) {
      return { message: 'no_id' }
    }
    if (!formData.get('image')) {
      return { message: 'no_image' }
    }

    let shouldRedirect = false

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
        {
          method: 'post',
          body: formData,
          credentials: 'include', // 쿠키가 전달 되게 해준다. ex) 사용자가 이미 회원가입한 경우에 재 회원가입 시도한 경우를 처리 할 수 있다.
        }
      )

      console.log('res status 확인', response.status)

      if (response.status === 403) {
        return { message: 'user_exists' }
      }

      shouldRedirect = true
    } catch (error) {
      console.log(error)
      return
    }

    if (shouldRedirect) {
      redirect('/home') // redirect는 try/catch문 안에서 쓰면 안된다.
    }
  }

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div>🔥Tadak Tadak🔥 계정을 생성해 보세요.</div>
          <BackButtons />
        </div>
        <form action={formAction}>
          <div>
            <label className={style.inputLabel} htmlFor='nickname'>
              닉네임
            </label>
            <input
              id='nickname'
              name='nickname'
              type='text'
              placeholder='타닥타닥에서 활동할 닉네임을 입력해 주세요. 😆'
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
          <button type='submit'>🙌 회원가입 하기 🙌</button>
        </form>
      </div>
    </div>
  )
}
