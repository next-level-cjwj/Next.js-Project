'use client'

import { useContext } from 'react'
import PostRecommends from '../../_component/PostRecommends'
import { TabContext } from './TabProvider'

export default function TempPostList() {
  const { tab } = useContext(TabContext)

  return (
    <>
      {tab === 'rec' && (
        <>
          <PostRecommends />
        </>
      )}
      {tab === 'fol' && (
        <>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
          <li>팔로우 포스트</li>
        </>
      )}
    </>
  )
}
