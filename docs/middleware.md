## 📌 Middleware

[Next.js 공식 홈페이지 middleware]("https://nextjs.org/docs/app/building-your-application/routing/middleware")

미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행시킬 수 있습니다.

들어오는 요청에 따라, response(응답)을 변경(modifying)할 수 있는데 그 방법에는 rewriting, redirecting, 요청이나 response headers를 modifying 하거나 직접 응답하는 방법이 있습니다.

Middleware는 캐시된 content와 경로가 일치하기 전에 실행됩니다.

- **예시 코드**

  ```
  import { NextResponse } from 'next/server'
  import type { NextRequest } from 'next/server'

  // This function can be marked `async` if using `await` inside
  export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // See "Matching Paths" below to learn more
  export const config = {
    matcher: '/about/:path*',
  }
  ```
