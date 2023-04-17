import React from 'react'
import Test2 from '~/components/Test2'
import TopBar from '~/components/Topbar'
import { Chivo_Mono } from 'next/font/google'

const inter = Chivo_Mono({ subsets: ['latin'] })

function ConTopBar() {
  return (
    <div className={inter.className}>
        <TopBar />
        <Test2 />
    </div>
  )
}

export default ConTopBar