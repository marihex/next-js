import React from 'react';
import {PostsComponent} from "@/src/components/posts/PostsComponent";

const PostsPage = () => {
    return (
        <section className='py-3'>
            <h1 className='text-center text-2xl'>Posts</h1>
            <PostsComponent/>
        </section>
    );
};

export default PostsPage;