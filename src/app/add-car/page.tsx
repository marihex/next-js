"use client"

import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {CarFormData, carSchema} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCar} from "@/src/app/actions/car";

const AddCarPage = () => {
    const{register, handleSubmit, formState: {errors}, reset} = useForm<CarFormData>(
        {
            resolver: zodResolver(carSchema)
        }
    )
const [success, setSuccess] = useState<boolean>(false);
    const onSubmit = async (data: CarFormData) => {
        await createCar(data);
        reset()
        setSuccess(true);
    }
    return (
        <section className='flex flex-col items-center gap-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-10 border border-gray-400 rounded-lg p-10 bg-gray-700 w-100'>
                <div className='w-[75%] flex flex-col items-center gap-2'>
                    <input {...register("brand")} placeholder={'brand'}  className='border border-gray-400 rounded-lg p-3 bg-gray-500'/>
                    {errors.brand && (<p className='text-red-800'>{errors.brand.message}</p>)}
                </div>
                <div className='w-[75%] flex flex-col items-center gap-2'>
                    <input {...register("price", {valueAsNumber: true})} placeholder={'price'} className='border border-gray-400 rounded-lg p-3 bg-gray-500'/>
                    {errors.price && (<p className='text-red-800'>{errors.price.message}</p>)}
                </div>
                <div className='w-[75%] flex flex-col items-center gap-2'>
                    <input {...register("year", {valueAsNumber: true})} placeholder={'year'} className='border border-gray-400 rounded-lg p-3 bg-gray-500'/>
                    {errors.year && (<p className='text-red-800'>{errors.year.message}</p>)}
                </div>
                <button type={"submit"} className='border border-gray-400 rounded-lg px-10 py-3 bg-blue-400'>Submit</button >
            </form>

            {
                success && (<div className='border border-gray-400 rounded-lg font-bold p-10'>Data added successfully</div>)
            }
        </section>
    );
};

export default AddCarPage;