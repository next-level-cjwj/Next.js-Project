import style from './signup.module.css'

export default function SignupModal() {
  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div>회원가입 모달</div>
        </div>
      </div>
    </div>
  )
}
