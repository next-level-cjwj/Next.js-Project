import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Intro from './_component/Intro'

export default async function Main() {
  const session = await auth()

  if (session?.user) {
    redirect('/home')
  }

  return <Intro />
}
