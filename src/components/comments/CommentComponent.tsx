import {getById} from "@/src/services/api.services";
import {posts} from "@/src/helpers/fetchDataHelpers";
import {IComment} from "@/src/models/IComment";
import Link from "next/link";

type Props = {
    params: Promise<{ id: string, name: string }>
}

export const CommentComponent = async ({params}: Props) => {
   const {id} = await params;
   const comment = await getById<IComment>('/comments/', id);
   const post = posts.find(post => post.id === comment.postId)
    return (
        <article>
            <div className='flex flex-col gap-4 p-10'>
                <h1 className='text-2xl font-bold'>{comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</h1>
                <span className='italic'>Author: {comment.email}</span>
                {post && <span>Post: <Link href={'/posts/' + post.id.toString()} className='underline'>{post.title}</Link></span>}
                <p className='text-lg'>{comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}</p>
            </div>
        </article>
    );
};