import React, {FC} from 'react';
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {searchParamsHelper} from "@/src/helpers/searchParamsHelper";


type Props = {
    params: Promise<{id: string}>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
  const {id} = await params;

    return {
        title: `User ${id}  Page - title`,
        description: `User ${id} Page - description`,
    }
}

const UserPage: FC<Props> = async ({searchParams}) => {

    const resolvedParams = await searchParams;
    const obj = searchParamsHelper(resolvedParams.data)


    return (
        <>
            {
                obj && (<div className='flex flex-col gap-3 m-5'>
                <span>Name: {obj.name}</span>
                <span>Email: {obj.email}</span>
                <span>UserName: {obj.username}</span>
                </div>)
            }
        </>
    );
};

export default UserPage;