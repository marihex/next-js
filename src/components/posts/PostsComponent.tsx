import {PostCardComponent} from "@/src/components/posts/PostCardComponent";
import {posts} from "@/src/helpers/fetchDataHelpers";

export const PostsComponent = () => {

    return (
        <div className='flex flex-col gap-7 w-[65%] m-auto py-8'>

            {
                posts.map((post) => <PostCardComponent post={post} key={post.id}/>)
            }
        </div>
    );
};