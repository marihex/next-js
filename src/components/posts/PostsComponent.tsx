import {PostCardComponent} from "@/src/components/posts/PostCardComponent";
import {posts} from "@/src/helpers/fetchDataHelpers";
import React from "react";

export const PostsComponent = () => {

    return (
        <section>
            <h1 className='text-center text-2xl'>Posts</h1>
            <div className='flex flex-col gap-7 w-[65%] m-auto py-8'>

                {
                    posts.map((post) => <PostCardComponent post={post} key={post.id}/>)
                }
            </div>
        </section>
    );
};