import {comments} from "@/src/helpers/fetchDataHelpers";
import {CommentCardComponent} from "@/src/components/comments/CommentCardComponent";

export const CommentsComponent = async () => {

    return (
        <section className='w-[65%] flex flex-col gap-5 m-auto py-8'>
            <h1 className='text-2xl text-center font-bold'>Comments</h1>
            {
                comments.map(comment => <CommentCardComponent comment={comment} key={comment.id}/>)
            }

        </section>
    );
};