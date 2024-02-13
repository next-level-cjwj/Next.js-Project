import { http, HttpResponse } from 'msw'

// 백엔드 server를 대체하는 부분이다.
export const handlers = [
  http.post('/api/login', () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickname: '타닥타닥_닉네임',
        id: 'ea',
        image: '/5Udwvqim.jpg',
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
    console.log('회원가입')
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
]
