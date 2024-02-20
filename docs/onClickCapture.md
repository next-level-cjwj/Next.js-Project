### onClick( ) vs onClickCapture( )

- **onClick( )** 과 **onClickCapture( )** 의 주요 차이점은 이벤트 핸들러가 실행되는 시점이다.

  - onClick( )
    onClick은 이벤트 버블링 단계에서 이벤트가 해당 요소에서 발생했을 때 실행된다. 즉, 이벤트가 하위 요소에서 상위 요소로 전파되는 동안 발생한다.

  - onClickCapture( )
    반면에 onClickCapture는 이벤트 캡처링 단계에서 이벤트가 해당 요소에서 발생하기 전에 실행된다. 즉, 이벤트가 상위 요소에서 하위 요소로 전파되는 동안 발생한다.

<br/>

> 간단히 말해서, onClick은 이벤트 버블링 중에 실행되고, onClickCapture는 이벤트 캡처링 중에 실행됩니다.

<br/>

```
import React from 'react';

export default function Event() {
  const handleButtonClick = () => {
    console.log('handleButtonClick');
  };

  const handleClickCapture = () => {
    console.log('handleClickCapture');
  };

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2');
  };

  const handleClickBubble = () => {
    console.log('handleClickBubble');
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
}
```

> 결과:

    handleClickCapture
    handleClickCapture2
    handleButtonClick
    handleClickBubble

<br/>

### onClickCapture( )를 언제 사용하면 좋을까?

#### 🔥 Tadak Tadak 프로젝트에 적용

```
// PostArticle.tsx
"use client";

export default function PostArticle({ children, post}: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  }

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
```
