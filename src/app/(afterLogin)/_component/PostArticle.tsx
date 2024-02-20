'use client'

import { Post } from '@/model/Post'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  post: Post
}

export default function PostArticle({ children, post }: Props) {
  const router = useRouter()
  const onPostClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`)
  }

  return <article onClickCapture={onPostClick}>{children}</article>
}
