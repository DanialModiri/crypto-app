'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

type Props = {
    totalCount: number
}

function Pagination({
    totalCount
}: Props) {
    const serachParams = useSearchParams()
    const pathname = usePathname();
    const router = useRouter()
    const [page, setPage] = useState(Number(serachParams.get('page') ?? 0))

    const handlePageClick = (event: { selected: number }) => {
        const params = new URLSearchParams(serachParams)
        params.set('page', String(event.selected))
        setPage(event.selected)
        router.replace(`${pathname}?${params.toString()}`);
    };

    const pageCount = Math.ceil(totalCount / 7);

    return (
        <div className='flex justify-center my-10'>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                className='flex '
                forcePage={page}
                activeLinkClassName='bg-blue-400 text-white border-none px-4'
                pageLinkClassName='p-2 mx-1 border-gray-400 border-1 rounded-xl cursor-pointer px-4'
                previousLinkClassName='p-2 mx-1 border-gray-400 border-1 rounded-xl cursor-pointer px-4'
                nextLinkClassName='p-2 mx-1 border-gray-400 border-1 rounded-xl cursor-pointer px-4'
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination