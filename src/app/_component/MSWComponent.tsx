'use client'

import { useEffect } from 'react'

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 클라이언트 환경(브라우져)을 말한다. 아래의 코드가 브라우저에서 돌아간다는 것을 한버 더 보장한다.
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        require('@/mocks/browser')
      }
    }
  }, [])

  return null
}
