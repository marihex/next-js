import React from 'react';
import {Metadata} from "next";
import {CommentComponent} from "@/src/components/comments/CommentComponent";
import {getById} from "@/src/services/api.services";
import {IComment} from "@/src/models/IComment";

type Props = {
    params: Promise<{ id: string}>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;
    const comment = await getById<IComment>(`/comments/`, Number(id));

    return {
        title: `${comment.name} - Comment Page Title`,
        description: `${comment.name} - Comment Page Description`
    }
}

const CommentPage = ({params}: Props) => {
    return (
        <main>
            <CommentComponent params={params} />
        </main>
    );
};

export default CommentPage;