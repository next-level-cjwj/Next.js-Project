import { Post } from '@/model/Post'
import Image from 'next/image'

type Props = {
  post: Post
}

export default function PostImage({ post }: Props) {
  if (!post.Images) return null
  if (!post.Images.length) return null

  return (
    <>
      <Image
        width={200}
        height={200}
        alt='post image'
        src={post.Images[0].link ?? '/팽귄.png'}
      />
    </>
  )
}
