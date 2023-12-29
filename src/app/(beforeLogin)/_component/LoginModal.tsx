import style from './login.module.css'

export default function LoginModal() {
  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div>로그인 모달</div>
        </div>
      </div>
    </div>
  )
}
