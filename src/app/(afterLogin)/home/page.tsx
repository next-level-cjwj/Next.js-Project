import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import Tab from './_component/Tab'
import TabProvider from './_component/TabProvider'
import TempPostList from './_component/TempPostList'
import style from './home.module.css'

// 서버 컴포넌트 이므로 getPostRecommend() 함수는 서버에서 실행된다.
// 받아온 data를 기본적으로 저장한다.(캐싱) (저장 하고 싶지 않은 경우에는 cache: 'no-store' 옵션을 넣어줘야 한다.)
async function getPostRecommend() {
  const res = await fetch(`http://localhost:9090/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'],
    },
  })

  if (!res.ok) {
    throw new Error('Fail to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommend,
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <div style={{ marginTop: '110px' }}>게시글 입력 폼</div>
          <TempPostList />
        </TabProvider>
      </HydrationBoundary>
    </main>
  )
}
