import Tab from './_component/Tab'
import TabProvider from './_component/TabProvider'
import TempPostList from './_component/TempPostList'
import style from './home.module.css'

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <div style={{ marginTop: '110px' }}>게시글 입력 폼</div>
        <TempPostList />
      </TabProvider>
    </main>
  )
}
