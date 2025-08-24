import axios from 'axios'
import Link from 'next/link'
import { API } from '../api'
import Pagination from './Pagination'

type Props = {
    query?: { search?: string, page?: string }
    posts?: any[]
}

async function PostsList({
    query,
}: Props) {
    const response = await API.get<any[]>(`/posts?title_like=${query?.search}`, { params: { title_like: query?.search ?? '', _page: (query?.page || 0), _per_page: 10 } })
    const posts = response.data
    const totalCount = Number(response?.headers['x-total-count']);
    console.log(totalCount)
    return (
        <div>
            {posts?.map(item => <div key={item.id} className="border-1 rounded-xl p-4 m-4" >
                <h3>
                    {item.title}
                </h3>
                <p className="text-gray-500 mt-2">
                    {item.content}
                </p>
                <Link href={'/posts/' + item.id} className="rounded-lg text-blue-400 cursor-pointer">
                    مشاهده
                </Link>
            </div>)}

            <Pagination totalCount={totalCount} />
        </div>
    )
}

export default PostsList