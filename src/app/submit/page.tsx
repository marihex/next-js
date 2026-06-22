import React, {FC} from 'react';

type Props = {
    searchParams: Promise<{
    [key: string]: string | string[] | undefined }>
}

const SubmitPage: FC<Props> = async ({searchParams}) => {

    const submittedSP = await searchParams
    return (
        <div className='w-auto mt-10 m-auto text-2xl'>
                Submitted data: {submittedSP.name}
        </div>
    );
};

export default SubmitPage;