// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={16}
        innerStyle={{
          backgroundColor: '#0e1a25'
        }}
        outerStyle={{
          border: '3px solid #0e1a25'
        }}
      />
      {children}
    </NextUIProvider>
  )
}