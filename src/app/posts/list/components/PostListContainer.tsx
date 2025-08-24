'use client'

import { AppContext } from '@/app/context/AppContext'
import React, { ReactNode, use, useEffect } from 'react'

type Props = {
    children: ReactNode
}

function PostListContainer({
    children
}: Props) {
    const { setHeaderType } = use(AppContext)
    useEffect(() => {
        setHeaderType('none')
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default PostListContainer