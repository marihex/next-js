import React from 'react';
import {Metadata} from "next";
import {PostComponent} from "@/src/components/posts/PostComponent";


type Props = {
    params: Promise<{ id: string, title: string }>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {title} = await params;

    return {
        title: `${title} - Blog Post`,
        description: `${title} - Blog Post`
    }
}

const PostPage = ({params}:Props) => {
    return (
        <div>
            <PostComponent params={params}/>
        </div>
    );
};

export default PostPage;