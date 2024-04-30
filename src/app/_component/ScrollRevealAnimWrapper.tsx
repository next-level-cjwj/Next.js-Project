import React, { useRef, useState } from 'react'
import { checkIsInViewport } from '../_hooks/checkIsInViewport'
import { useWindowScrollEvent } from '../_hooks/useWindowScrollEvent'
import style from './ScrollRevealAnimWrapper.module.css'

type props = {
  children: React.ReactNode
  animationDirection: 'top' | 'bottom' | 'right' | 'left'
}

const ScrollRevealAnimationWrapper: React.FC<props> = ({
  animationDirection,
  children,
}) => {
  const [animation, setAnimation] = useState(true)
  const areaRef = useRef<HTMLDivElement>(null)

  const handleScrollAnimation = () => {
    const element = areaRef.current?.getBoundingClientRect()

    if (element) {
      console.log(checkIsInViewport(element))

      setAnimation(checkIsInViewport(element))
    }
  }

  useWindowScrollEvent(handleScrollAnimation)

  return (
    <div
      className={`${style.container} ${
        animation && style[animationDirection + 'Animation']
      }`}
    >
      <div ref={areaRef}>{children}</div>
    </div>
  )
}

export default ScrollRevealAnimationWrapper
