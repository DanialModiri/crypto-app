"use client";

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useCallback, useMemo } from 'react'
import { useTransition } from 'react'
import doubnceFn from 'debounce-fn'


type Props = {}

function Search({ }: Props) {
    const serachParams = useSearchParams()
    const pathname = usePathname();
    const router = useRouter()
    const handleChange = useMemo(() => {
        return doubnceFn((e: React.ChangeEvent<HTMLInputElement>) => {
            const params = new URLSearchParams(serachParams)
            params.set('search', e.target.value)
            router.replace(`${pathname}?${params.toString()}`);
            router.refresh()
        }, { wait: 400 })
    }, [router])

    return (
        <div className='mx-4 '>
            <input className='rounded-xl border-gray-500 block w-full border-1 h-10 px-4'
            placeholder='جستجو بر اساس عنوان...'
            onChange={handleChange} />
        </div>
    )
}

export default Search