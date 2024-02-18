import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

function generateDate() {
  const lastWeek = new Date(Date.now())

  lastWeek.setDate(lastWeek.getDate() - 7)

  return faker.date.between({
    // 지난주 부터 오늘까지 중 임의의 날짜 하나를 골라준다.
    from: lastWeek,
    to: Date.now(),
  })
}

// 백엔드 server를 대체하는 부분이다.
export const handlers = [
  http.post('/api/login', () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickname: '타닥타닥_임시_닉네임',
        id: '타닥타닥_임시_아이디',
        image: '/public/vercel.svg',
      },
      {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      }
    )
  }),

  http.post('/api/logout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),

  http.post('/api/users', async () => {
    // msw 로 흉내를 낼 수 있다.

    // 동일한 id의 user가 회원가입 했을경우 403 에러를 보내준다.
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })

    // 회원가입 성공하는 경우
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),

  http.get('/api/postRecommends', async ({ request }) => {
    return HttpResponse.json([
      {
        postId: 1,
        User: 'ea',
        content: '컨텐츠다',
        Images: '이미지 파일 위치',
        createdAt: '2023.02.27',
      },
      {
        postId: 2,
        User: 'john',
        content: '두번째 컨텐츠다',
        Images: '이미지 파일 위치',
        createdAt: '2023.01.27',
      },
    ])
  }),
]
