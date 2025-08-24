import { API } from '@/app/api'
import PostOne from './components/PostOne'


type Props = {
    params: Promise<{ id: number }>
}

async function page({
    params
}: Props) {
    
    const { id } = await params
    const data = await API.get(`posts/${id}`).then(res => res.data)
    return (
        <PostOne>
            <div className='p-4 m-4 border-1 rounded-xl'>
                <h2 className='mb-3 font-bold'>
                    {data.title}
                </h2>
                <p className='text-gray-700'>
                    {data?.content}
                </p>
            </div>
            <div className='border-1 rounded-xl p-4 m-4'>
                <div className='mt-4'>
                    نظرات
                </div>
                <div>
                    {data?.comments?.map((item: any) => <div className='p-3 mt-4' key={item.id}>
                        <div className='font-semibold'>
                            {item?.username}
                        </div>
                        <p className='text-gray-700'>
                            {item.text}
                        </p>
                    </div>)}
                </div>
            </div>
        </PostOne>
    )
}

export default page