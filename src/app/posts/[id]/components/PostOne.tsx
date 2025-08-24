'use client'

import { AppContext } from '@/app/context/AppContext'
import React, { Fragment, ReactNode, use, useEffect } from 'react'

type Props = {
    children: ReactNode;
}

function PostOne({ children }: Props) {
    const { headerType, setHeaderType } = use(AppContext)
    
    useEffect(() => {
        setHeaderType('back')
    }, [])

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default PostOne