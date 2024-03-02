import { Post } from '@/model/Post'
import Link from 'next/link'
import PostArticle from './PostArticle'
import PostImage from './PostImage'
import style from './post.module.css'

type Props = {
  noImage?: boolean
  post: Post
}

export default function Post({ noImage, post }: Props) {
  const target = post

  // if (!post.Images) {
  //   return null
  // }

  // if(!post.Images.length) {
  //   return null
  // }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img
              src={target.User.image}
              alt={target.User.nickname}
              width={40}
              height={40}
            />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.nickname}`}>
              <span>{target.User.nickname}</span>
              &nbsp;
              <span>{target.User.id}</span>
              &nbsp;
              <span>·</span>
              &nbsp;
              <span>10 mins</span>
            </Link>
          </div>
          <div>{target.content}</div>
          {!noImage && (
            <div>
              <PostImage post={target} />
            </div>
          )}
        </div>
      </div>
    </PostArticle>
  )
}
