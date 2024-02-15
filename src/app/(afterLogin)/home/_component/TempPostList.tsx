'use client'

import { useContext } from 'react'
import { TabContext } from './TabProvider'

export default function TempPostList() {
  const { tab } = useContext(TabContext)

  return (
    <>
      {tab === 'rec' && (
        <>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
          <li>추천 포스트</li>
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
