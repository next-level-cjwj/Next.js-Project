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

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'tadak', nickname: '타닥', image: '/5Udwvqim.jpg' },
  { id: 'reo', nickname: '레오', image: faker.image.avatar() },
]

const Posts = []

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
    const url = new URL(request.url)
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0 // 이거 뭐냐...?

    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: '컨텐츠다',
        Images: '이미지 파일 위치',
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: '두번째 컨텐츠다',
        Images: '이미지 파일 위치',
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: '컨텐츠다다',
        Images: '이미지 파일 위치',
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: '네번째 컨텐츠다',
        Images: '이미지 파일 위치',
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 6,
        User: User[0],
        content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ])
  }),
]
