import {getById} from "@/src/services/api.services";
import {IPost} from "@/src/models/IPost";
import {users} from "@/src/helpers/fetchDataHelpers";
import Link from "next/link";

type Props = {
    params: Promise<{ id: string}>
}

export const PostComponent = async ({params}: Props) => {
    const {id} = await params;
    const post = await getById<IPost>('/posts/', id);
    const author = users.find(user => user.id === post.userId);
    return (
        <article className='flex flex-col gap-5 w-[65%] px-20 py-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h1>
                <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
            </div>
            <div className='italic'>
                {
                    author && <span>Author: <Link href={'/users/' + author.id.toString()} className='underline'>{author.name}</Link></span>
                }
            </div>
        </article>
    );
};