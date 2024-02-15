## 📌 Auth.js

### Credentials Provider

Credentials Provider를 사용하면 사용자 이름 및 비밀번호, 도메인, 2단계 인증 또는 하드웨어 장치(예: YubiKey U2F/FIDO)와 같은 임의의 자격 증명을 사용하여 로그인을 처리할 수 있다.

이는 사용자를 인증해야 하는 기존 시스템이 있는 사용 사례를 지원하기 위한 것이다.

이 방식으로 인증된 사용자는 기본적으로 데이터베이스에 유지되지 않으며 결과적으로 세션에 대해 JSON 웹 토큰이 활성화된 경우에만 자격 증명 공급자를 사용할 수 있다는 제약이 따른다.

#### Options

Credentials Provider에는 다음과 같은 기본 옵션 세트가 제공된다.

- [Credentials Provider 옵션](https://authjs.dev/reference/core/providers/credentials)
  자신의 사용 사례에 맞게 옵션을 재정의할 수 있습니다.

#### Example - Username / Password

Credentials Provider는 HTTP POST를 통해 제출된 credentials(username 과 password 와 같은 정보)을 입력으로 받아들이고 user자격 증명이 유효함을 나타내는 객체를 반환하는 핸들러를 정의해야 한다는 점을 제외하면 다른 공급자와 마찬가지로 지정된다.

- 객체를 반환하면, JSON 웹 토큰에 유지되고 사용자는 로그인된다. ( 나중에 이를 거부하는 사용자 정의 <code>signIn()</code> 콜백이 구성되지 않는 한 )

  - null을 반환하면, 사용자에게 세부 정보를 확인하라는 오류가 표시된다.

  - Error를 던지게 되면, 사용자는 오류 메시지가 쿼리 매개변수로 포함된 오류 페이지로 보내지게 된다.

Credentials Provider의 authorize( ) 메서드는 <code>the request object</code>를 두 번째 매개 변수로도 제공한다. 다음은 이러한 문제를 처리하는 예이다.

```
import CredentialsProvider from "next-auth/providers/credentials";
...
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })
]
```

### Credentials Authentication

[Login Provider > Credentials Authentication Auth.js 공홈](https://authjs.dev/getting-started/providers/credentials-tutorial)

#### 🔥 Tadak Tadak 프로젝트에 적용

- pages 옵션 부분에 자체 로그인 (및 회원가입) 페이지 경로를 추가 함 으로써 로그인(및 회원가입)이 필요한 상황에 해당 페이지로 이동시켜 준다.

  - pages가 없다면 아래와 같은 UI를 제공한다.

    <img width="600" src="./image/Screenshot 2024-02-13 at 3.06.32 PM.png" />

```
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST }, // API route
  auth,
  signIn, // 로그인 하는 용
} = NextAuth({
  pages: {
    signIn: '/i/flow/login', // /api/auth/signin 인 경우 해당 페이지를 띄워준다.
    newUser: '/i/flow/signup', /api/auth/newUser 인 경우 해당 페이지를 띄워준다.
  },
  providers: [
    CredentialsProvider({
      // 로그인을 수행할 떄 아래의 부분이 호출된다.
      async authorize(credentials) {
        // credentials 안에 username이랑 password가 들어 있다.
        // 로그인을 수행할때 호출 되는 부분이다.
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Auth.js는 의 credentials가 username과 password로 고정되어 있다. => 우리가 필요한 건 id와 password이기 때문에 우리가 원하는 형식에 맞게 풀어써줘야 한다.
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        })

        // null을 반환하면 사용자에게 세부 정보를 확인하라고 알리는 오류가 표시된다.
        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return user
      },
    }),
  ],
})
```

### useSession( )

[useSession( )](https://next-auth.js.org/getting-started/example#frontend---add-react-hook)

- The <code>useSession()</code> React Hook in the NextAuth.js client is the easiest way to check if someone is signed in.

  - 클라이언트 컴포넌트인 경우 <code>useSession()</code> 훅을 이용해서 로그인 여부를 확인할 수 있습니다.

  ```
  import { useSession, signIn, signOut } from "next-auth/react"

  export default function Component() {
    const { data: session } = useSession()

    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
  ```

### auth( )

- 서버 컴포넌트인 경우 <code>auth()</code> 를 이용해서 로그인 여부를 확일 할 수 있습니다.
