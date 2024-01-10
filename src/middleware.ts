export { auth as middleware } from './auth'

// 로그인을 해야만 접근할 수 있는 루트들이다.
// auth 함수를 호출하면 로그인 했는지 안 했는지 알아낼 수 있다.
export const config = {
  matcher: ['/compose/tadak', '/home', '/search', '/messages'],
}
