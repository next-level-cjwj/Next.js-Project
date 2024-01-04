'use client'

import { useContext } from 'react'
import { TabContext } from './TabProvider'
import style from './tab.module.css'

export default function Tab() {
  const { tab, setTab } = useContext(TabContext)

  const onClickRec = () => {
    setTab('rec')
  }

  const onClickFol = () => {
    setTab('fol')
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === 'fol'} />
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === 'rec'} />
        </div>
      </div>
    </div>
  )
}
