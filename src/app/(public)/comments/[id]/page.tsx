import React from 'react';
import {Metadata} from "next";
import {CommentComponent} from "@/src/components/comments/CommentComponent";

type Props = {
    params: Promise<{ id: string, name: string }>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {name} = await params;

    return {
        title: `${name} - Comment Page Title`,
        description: `${name} - Comment Page Description`
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