## 📌 Middleware + Auth.js

[Next.js 공식 홈페이지 middleware]("https://nextjs.org/docs/app/building-your-application/routing/middleware")

미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행시킬 수 있습니다.

들어오는 요청에 따라, response(응답)을 변경(modifying)할 수 있는데 그 방법에는 rewriting, redirecting, 요청이나 response headers를 modifying 하거나 직접 응답하는 방법이 있습니다.

Middleware는 캐시된 content와 경로가 일치하기 전에 실행됩니다.

- **예시 코드**

  ```
  import { NextResponse } from 'next/server'
  import type { NextRequest } from 'next/server'

  // macher에 해당하는 라우트의 경우에는 아래의 함수가 페이지 렌더링 되기 전에 실행된다.
  // 예를 들어, 로그인 하지 않았을 경우 /login 페이지로 redirect 시킨다.
  // This function can be marked `async` if using `await` inside
  export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // See "Matching Paths" below to learn more
  export const config = {
    matcher: '/about/:path*',
  }
  ```

- **사용 예시**

  ```
  // auth.ts
  import NextAuth from "next-auth"

  export const {
    handlers: {GET, POST} // API route
    auth, // 로그인 했는지 안 했는지 알아내는 용
    signIn // 로그인하는 용
  } = NextAuth({
    ...
  })

  // middleware.ts

  // 미들웨어 역할을 한다.
  // auth 함수를 호출하면 로그인했는지 안 했는지 알 수 있다.
  export { auth as middleware } from './auth' // export function middleware 역할을 한다.

  // auth를 통해서 로그인 여부를 파악하고, 아래의 route들을 로그인을 해야 만 접근할 수 있는 루트들이다.

  export const config = {
    // middleware를 적용한 루트들
    matcher: ['/compose/tadak', '/home', '/search', '/messages'],
  }
  ```
