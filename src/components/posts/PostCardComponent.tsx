import {IPost} from "@/src/models/IPost";
import {FC} from "react";
import {users} from "@/src/helpers/fetchDataHelpers";
import Link from "next/link";

type PostProps = {
    post: IPost
}

export const PostCardComponent: FC<PostProps> = ({post}) => {
const author = users.find(user => user.id === post.userId)
    return (
        <article className='flex flex-col gap-3 border border-gray-400 rounded-lg p-3'>
            <div className='flex flex-col gap-1'>
                <span className='text-lg font-bold'><Link href={'/posts/' + post.id.toString()}>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Link></span>
                <p className='truncate'>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
            </div>
            <div>
                { author &&
                <span className='italic'>Author: <Link href={'/users/' + author.id.toString()} className='underline'>{author.name}</Link></span>
                }
            </div>
        </article>
    );
};