import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

function generateDate() {
  const lastWeek = new Date(Date.now())

  lastWeek.setDate(lastWeek.getDate() - 7)

  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  })
}

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: faker.image.avatar() },
  { id: 'tadak', nickname: '타닥', image: faker.image.avatar() },
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
        image: '/팽귄.png',
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
        content: '첫번째 컨텐츠다 이미지 하나 있다.',
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[1],
        content: '두번째 컨텐츠다 이미지는 하나임.',
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[2],
        content: '나는 세번째 컨텐츠다다. 이미지는 두개임.',
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: '나는야 네번째 컨텐츠다. 이미지는 세개임.',
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[1],
        content: '다섯번째 컨텐츠다. 이미지는 4개다.',
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
        User: User[2],
        content: '여섯 66666 이다. 이미지가 하나인 컨텐츠다.',
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 1,
        User: User[2],
        content: '일곱번째 컨텐츠다. 이미지가 하나도 없다.',
        Images: [],
        createdAt: generateDate(),
      },
    ])
  }),
]
