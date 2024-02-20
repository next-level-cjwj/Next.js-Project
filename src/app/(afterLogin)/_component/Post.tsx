import { Post } from '@/model/Post'
import Link from 'next/link'
import PostArticle from './PostArticle'
import style from './post.module.css'

type Props = {
  noImage: boolean
  post: Post
}

export default function Post({ noImage, post }: Props) {
  const target = post

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}></Link>
          </div>
        </div>
      </div>
    </PostArticle>
  )
}
