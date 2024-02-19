'use client'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  post: {
    postId: number
    User: { id: string; nickname: string; image: string }
    content: string
    Images: any[]
    createdAt: Date
  }
}

export default function PostArticle({ children, post }: Props) {
  return <article></article>
}
