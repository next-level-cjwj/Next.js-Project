## 📌 route.ts 파일

> route.ts 파일은 해당 Route의 API 역할을 한다. = 백엔드 API와 같은 역할을 한다.

</br>

프론트 서버도 서버이기 때문에 백엔드 서버 없이도 API의 역할을 할 수 있다.

- 작은 서비스의 경우에는 프론트 서버, 백엔드 서버 둘다 두는 것 보다 프론트 서버 하나에서 <code>route.ts</code> (Route API) 만들어서 처리할 수 있다.

- 하지만 서비스의 규모가 커지면 프론트 서버와 백엔드 서버를 분리하는 것이 좋다.
  - 분리할 경우, 백엔드 서버에 요청이 많아 지고 ⬆︎, 프론트 서버에 요청이 적게 오면 ⬇︎ 백엔드 서버만 여러대로 늘리면 되기 때문에 더욱 효율적이다. (프론트 서버에 요청이 많이 오고 ⬆︎, 백엔드 서버에서는 하는 일이 없다면 ⬇︎ 프론트 서버를 여러대로 늘리면 된다.)
- 하지만 프론트 기능과 백엔드 기능을 한 서버에 몰어 넣어 버리면 프론트의 요청이 많아지는 상황에서 서버를 늘릴때 프론트 뿐만 아니라 백엔드 서버까지 함께 늘려줘야 하기 때문에 비효율적이다.

=> 그래서 보통 프론트 서버 따로 백엔드 서버 따로 나눈다.

### 🔥 Tadak Tadak 프로젝트에 적용

[Auth.js Configuration](https://authjs.dev/guides/upgrade-to-v5)

```
// src/app/api/auth/[...nextauth]/routes.ts

export { GET, POST } from '@/auth'
```

<code>/api/auth/</code>로 들어오는 모든 GET, POST 요청은 <code>auth</code> (auth.ts) 에서 관리 해 준다.
