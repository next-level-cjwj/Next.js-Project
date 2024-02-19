import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import Tab from './_component/Tab'
import TabProvider from './_component/TabProvider'
import TempPostList from './_component/TempPostList'
import { getPostRecommends } from './_lib/getPostRecommends'
import style from './home.module.css'

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
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
