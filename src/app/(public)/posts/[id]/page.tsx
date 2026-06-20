import React from 'react';
import {Metadata} from "next";
import {PostComponent} from "@/src/components/posts/PostComponent";
import {getById} from "@/src/services/api.services";
import {IPost} from "@/src/models/IPost";


type Props = {
    params: Promise<{ id: string}>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;
    const post = await getById<IPost>('/posts/', Number(id))

    return {
        title: `${post.title} - Blog Post Title`,
        description: `${post.title} - Blog Post Description`,
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