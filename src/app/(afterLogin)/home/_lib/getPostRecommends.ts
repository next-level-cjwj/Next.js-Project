// 서버 컴포넌트이므로 getPostRecommend() 함수는 서버에서 실행된다.
// 받아온 data를 기본적으로 저장한다.(캐싱) (저장 하고 싶지 않은 경우에는 cache: 'no-store' 옵션을 넣어줘야 한다.)
export async function getPostRecommends() {
  const res = await fetch(`http://localhost:9090/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'], // 서버쪽 캐싱 담당
    },
  })

  if (!res.ok) {
    throw new Error('Fail to fetch data')
  }

  return res.json()
}
