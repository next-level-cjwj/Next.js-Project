'use client'

import { Post as IPost } from '@/model/Post'
import { useQuery } from '@tanstack/react-query'
import Post from '../_component/Post'
import { getPostRecommends } from '../home/_lib/getPostRecommends'

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  return data?.map((post: any) => <Post key={post.postId} post={post} />)
}
