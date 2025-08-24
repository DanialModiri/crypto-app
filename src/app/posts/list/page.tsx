import PostsList from "@/app/ui/PostsList";
import Search from "@/app/ui/Search";
import { Suspense } from "react";
import PostListContainer from "./components/PostListContainer";

interface Props {
    searchParams?: {
        search?: string;
        page?: string;
    };
}

export default async function Posts({
    searchParams
}: Props) {
    const query = await searchParams
    return (
        <PostListContainer>
            <Search />
            <Suspense key={query?.search} fallback={<>Loading...</>}>
                <PostsList query={query} />
            </Suspense>

        </PostListContainer>
    );
}
