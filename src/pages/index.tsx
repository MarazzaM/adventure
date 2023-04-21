import React from 'react'
import Test3 from '~/components/Test3'
import TopBar from '~/components/Topbar'
import { Chivo_Mono } from 'next/font/google'

const inter = Chivo_Mono({ subsets: ['latin'] })

function ConTopBar() {
  return (
    <div className={inter.className}  style={{ height: '100vh', width:'100vw'}}>
        <TopBar />
        <Test3 />
    </div>
  )
}

export default ConTopBar