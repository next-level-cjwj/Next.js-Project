'use client'

import { useSession } from 'next-auth/react'
import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'
import style from './PostForm.module.css'

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null)
  const [content, setContent] = useState('')
  const { data: me } = useSession()

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    console.log('change 값', e.target.value)

    setContent(e.target.value)
  }

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault()
  }

  const onClickUploadButton = () => {
    imageRef.current?.click()
  }

  return (
    <>
      <form
        className={style.postForm}
        style={{ marginTop: '120px', marginBottom: '30px' }}
        onSubmit={onSubmit}
      >
        <h3>게시글 입력폼</h3>
        <div
          className={style.postUserSection}
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div className={style.postUserImage}>
            <img
              src={me?.user?.image as string}
              alt={me?.user?.email as string}
              style={{ width: 50 }}
            />
          </div>
          <div className={style.postInputSection}>
            <textarea
              value={content}
              onChange={onChange}
              placeholder='게시물 폼 플레이스 홀더 아직 미정'
              style={{ width: '500px', height: '100px' }}
            />
            <div className={style.postButtonSection}>
              <div
                className={style.footerButton}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div className={style.footerButtonLeft}>
                  <input
                    type='file'
                    name='imageFiles'
                    multiple
                    hidden
                    ref={imageRef}
                  />
                  <button
                    className={style.uploadButton}
                    onClick={onClickUploadButton}
                  >
                    <svg width={24} viewBox='0 0 24 24' aria-hidden='true'>
                      <g>
                        <path d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z'></path>
                      </g>
                    </svg>
                  </button>
                </div>
                <button
                  className={style.actionButton}
                  type='submit'
                  disabled={!content}
                >
                  게시하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
