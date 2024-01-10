import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST }, // API route
  auth,
  signIn, // 로그인 하는 용
} = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // credentials 안에 username이랑 password 가 들어있다.
        // 로그인을 수행할때 호출 되는 부분
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return user
      },
    }),
  ],
})
