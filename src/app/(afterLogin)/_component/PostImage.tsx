import { Post } from '@/model/Post'
import Image from 'next/image'

type Props = {
  post: Post
}

export default function PostImage({ post }: Props) {
  if (!post.Images) return null

  if (!post.Images.length) {
    // 나중에 return null로 바꾸기

    return (
      <>
        <h3>이미지 갯수 0인 경우의 컴포넌트이다.</h3>
      </>
    )
  }

  if (post.Images.length === 1) {
    return (
      <>
        <h3>이미지 갯수 1인 경우의 컴포넌트이다.</h3>
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[0].link ?? '/팽귄.png'}
        />
      </>
    )
  }

  if (post.Images.length === 2) {
    return (
      <>
        <h3>이미지 갯수 2인 경우의 컴포넌트이다.</h3>
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[0].link ?? '/팽귄.png'}
        />
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[1].link ?? '/팽귄.png'}
        />
      </>
    )
  }

  if (post.Images.length === 3) {
    return (
      <>
        <h3>이미지 갯수 3인 경우의 컴포넌트이다.</h3>
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[0].link ?? '/팽귄.png'}
        />
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[1].link ?? '/팽귄.png'}
        />
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[2].link ?? '/팽귄.png'}
        />
      </>
    )
  }

  if (post.Images.length === 4) {
    return (
      <>
        <h3>이미지 갯수 4인 경우의 컴포넌트이다.</h3>
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[0].link ?? '/팽귄.png'}
        />
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[1].link ?? '/팽귄.png'}
        />
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[2].link ?? '/팽귄.png'}
        />
        <Image
          width={200}
          height={200}
          alt='post image'
          src={post.Images[3].link ?? '/팽귄.png'}
        />
      </>
    )
  }

  return null
}
