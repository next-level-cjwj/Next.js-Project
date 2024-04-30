import { useEffect } from 'react'

export const useWindowScrollEvent = (listener: () => void): void => {
  useEffect(() => {
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
}
