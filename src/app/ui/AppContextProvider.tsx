'use client'

import React, { useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

function AppContextProvider({
  children
}: Props) {
  const [value, setValue] = useState<'back' | 'none'>('none')
  const { back } = useRouter()
  return (
    <AppContext.Provider value={{
      headerType: value,
      setHeaderType: setValue
    }}>
      <header className="p-4 shadow-sm mb-4 flex">
        <div className='flex-grow-1'>
          CryptoKar
        </div>
        {value === 'back' ? <button className='border-1 rounded-xl border-gray-700 p-1 px-4 text-sm' onClick={back}>
          برگشت
        </button> : null}
      </header>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider