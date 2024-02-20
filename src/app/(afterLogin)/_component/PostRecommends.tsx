'use client'

import { useQuery } from '@tanstack/react-query'
import { getPostRecommends } from '../home/_lib/getPostRecommends'

export default function PostRecommends() {
  const { data } = useQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  })

  return data.map((post) => <Post post={post} />)
}
