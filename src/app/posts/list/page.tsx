import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Props {

}

export default async function Posts() {
    const posts = await axios.get<any[]>('http://localhost:3000/posts').then(res => res.data)
    return (
        <div>
            {posts?.map(item => <div key={item.id} className="border-1 rounded-xl p-4 m-4">
                <h3>
                    {item.title}
                </h3>
                <p className="text-gray-500 mt-2">
                    {item.content}
                </p>
                <Link href={'/posts/' + item.id} className="rounded-lg">
                    مشاهده
                </Link>
            </div>)}
        </div>
    );
}
