## 📌 Tanstack Query

#### 🔗 참고 자료

[react-query-tutorial](https://github.com/ssi02014/react-query-tutorial)

### React Query 기본 설정

- React-Query를 사용하기 위해서는 **QueryClientProvider**를 **최상단**에서 감싸주고 QueryClient 인스턴스를 client props로 넣어 애플리케이션에 연결시켜야 한다.
  - <code>QueryClient( )</code>
    - <code>QueryClient( )</code>를 사용하면 **캐시**와 상호 작용할 수 있다.
  - Query Client Provider(<code>RQProvider</code>)를 생성하고, client props에 queryClient를 연결함으로써, 이 context는 앱에서 비동기 요청을 알아서 처리하는 <code>background</code> 계층이 된다.

### RQProvider 생성

#### 🔥 Tadak Tadak 프로젝트에 적용

```
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
}

function RQProvider({ children }: Props) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false, //
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children} // children에서는 서로 react query 데이터를 공유 할 수 있다.
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
      />
    </QueryClientProvider>
  )
}

export default RQProvider
```

> - **initialIsOpen** (Boolean)
>   - **true** 이면 개발 도구가 기본적으로 열려 있도록 설정할 수 있다.
> - **refetchOnWindowFocus** (Boolean)
>   - 이 옵션은 <u>브라우저 창이 다시 포커싱될 때 데이터를 자동으로 다시 불러올지 여부</u>를 결정한다. 기본적으로 React Query는 브라우저 창이 포커싱될 때마다 데이터를 자동으로 다시 불러온다. 그러나 이 옵션을 **false**로 설정하면 브라우저 창 포커스에 따른 자동 재로드를 비활성화한다.
> - **retryOnMount** (Boolean)
>   - 이 옵션은 <u>컴포넌트가 마운트될 때 자동으로 재시도할지 여부</u>를 결정한다. 예를 들어, 데이터 로드 중에 문제가 발생하면 React Query는 자동으로 요청을 다시 시도한다. 이 옵션을 **true**로 설정하면 컴포넌트가 마운트될 때마다 자동으로 재시도된다.
> - **refetchOnReconnect** (Boolean)
>   - 이 옵션은 <u>브라우저가 다시 연결될 때 자동으로 데이터를 다시 불러올지 여부</u>를 결정한다. 기본적으로 React Query는 브라우저가 다시 연결될 때마다 자동으로 데이터를 다시 불러온다. 그러나 이 옵션을 **false**로 설정하면 브라우저 재연결에 따른 자동 데이터 재로드를 비활성화한다.
> - **retry** (Boolean)
>   - 이 옵션은 <u>데이터 요청이 실패했을 때 자동으로 재시도할지 여부</u>를 결정한다. 일반적으로 React Query는 요청이 실패하면 일정 횟수의 재시도를 시도한다. 그러나 이 옵션을 **false**로 설정하면 자동 재시도가 비활성화된다.

### React Query 이용 방법

서버에서 불러온 **data**를 ➡︎ 클라이언트의 React Query가 물려 받아(<code>hydrate</code>) 사용한다.

#### Prefetching

[prefetching 공식문서](https://tanstack.com/query/v5/docs/framework/react/guides/prefetching)

- prefetch는 말 그대로 미리 fetch해오겠다는 의미이다.
- 비동기 요청은 데이터 양이 클수록 받아오는 속도가 느리고, 시간이 오래 걸린다. 사용자 경험을 위해 데이터를 **미리 받아와서 캐싱**해놓으면 새로운 데이터를 받기 전에 사용자가 캐싱 된 데이터를 볼 수 있어 UX에 좋은 영향을 줄 수 있다.
  - 예를 들어 페이지네이션을 구현했다고 가정하면, 페이지1에서 페이지2로 이동했을 때 페이지3의 데이터를 미리 받아놓는 것이다.
- react query에서는 <code>queryClient.prefetchQuery</code>을 통해서 prefetch 기능을 제공한다.

  > 👏 <code>참고로 prefetchQuery를 통해 가져오는 쿼리에 대한 데이터가 이미 캐싱되어 있으면 데이터를 가져오지 않는다.</code>

</br>

#### 🖇️ Tanstack Query 에서 제공되는 Hook에 적용되는 내용 <code>useQuery</code>, <code>queryClient.prefetchQuery</code> ...

<br/>

> ⭐️ 해당 **queryKey** 를 가지고 있는 경우에 **queryFn**이 실행된다.
>
> - **queryKey**
>   - 배열( [ ] )로 지정해줘야 한다. 이는 단일 문자열만 포함된 배열이 될 수도 있고, 여러 문자열과 중첩된 객체로 구성된 복잡한 형태일 수도 있다.
>     - 만약, 쿼리가 특정 변수에 의존한다면 배열에다 이어서 줘야한다.
>       ex: ["super-hero", heroId, ...] > <code>❗️ queryKey가 여러 문자열로 이루어진 쌍인데 하나만 넣어준다면 원하는 **queryFn** 을 실행시킬 수 없다.</code>

```
const prefetchNextPosts = async (nextPage: number) => {
const queryClient = useQueryClient();

// 해당 쿼리의 결과는 일반 쿼리들처럼 캐싱 된다.
await queryClient.prefetchQuery({
  queryKey: ["posts", "nextPage"], // posts 와 nextPage는
  queryFn: () => fetchPosts(nextPage),
  // ...options
});
};

// 단순 예
useEffect(() => {
const nextPage = currentPage + 1;

if (nextPage < maxPage) {
  prefetchNextPosts(nextPage);
}
}, [currentPage]);
```

</br>

#### 🔥 Tadak Tadak 프로젝트에 적용

```
async function getPostRecommend() {
  ...
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
```

- #### useQuery vs prefetchQuery
  - 어떤 상황에서 prefetchQuery를 useQuery 대신 사용해야 할까?

### 캐싱 Caching

- #### tags
  tags 에 해당하는 요청만 새로고침 한다.
  ```
  next: {
    tags: ['posts', 'recommends']
  }
  ```
- #### revalidatePath( )
  해당 페이지와 관련된 모든 요청을 서버에서 새로고침 한다.
  ```
  revalidatePath('/home')
  ```
