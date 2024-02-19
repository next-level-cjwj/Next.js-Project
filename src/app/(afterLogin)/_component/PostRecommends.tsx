'use client'

import { useQuery } from '@tanstack/react-query'
import { getPostRecommends } from '../home/_lib/getPostRecommends'

export default function PostRecommends() {
  const { data } = useQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  })

  console.log('추천 글 확인', data)
}
