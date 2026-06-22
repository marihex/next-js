import React from 'react';
import Form from "next/form";

const FormPage = () => {
    return (
        <Form action={'/submit'} className='w-52 m-auto mt-10 flex gap-2'>
            <input type="text" name={'name'} placeholder={'Enter your name'} className='border border-gray-300 p-3' />
            <button className='border border-gray-300 p-3'>Submit</button>
        </Form>
    );
};

export default FormPage;