import {FC} from "react";
import {IComment} from "@/src/models/IComment";
import Link from "next/link";

type CommentProps = {
    comment: IComment
}

export const CommentCardComponent: FC<CommentProps> = ({comment}) => {
    return (
        <article className='border border-gray-400 rounded-lg'>
            <div className='flex flex-col gap-6 px-8 py-2'>
                <div className='flex flex-col gap-2'>
                    <span> Comment ID: {comment.id}</span>
                    <span>Author: {comment.email}</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span><Link href={'/comments/' + comment.id.toString()} className='underline'>{comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</Link></span>
                    <span>{comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}</span>
                </div>
            </div>
        </article>
    );
};