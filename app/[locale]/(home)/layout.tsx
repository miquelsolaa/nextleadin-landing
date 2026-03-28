import type { ReactNode } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation'
import { VideoModalProvider } from '@/components/mwc/VideoModalContext'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <VideoModalProvider>
      {children}
      <ScrollAnimation />
    </VideoModalProvider>
  )
}

