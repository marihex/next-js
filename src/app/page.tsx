"use client"

import {useForm} from "react-hook-form";
import {UserFormData, userSchema} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";

export default function Home() {
    const {register, handleSubmit, formState: {errors}} = useForm<UserFormData>(
        {
            resolver: zodResolver(userSchema)
        }
    )

    const onSubmit = async(data: UserFormData) => {
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(data),
        })

        const json = await res.json()
        console.log(json);
    }


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <input {...register('name')} placeholder='Name' />
                  {errors.name && (<p>{errors.name.message}</p>)}
              </div>
              <div>
                  <input {...register('email')} placeholder='Email' />
                  {errors.email && (<p>{errors.email.message}</p>)}
              </div>
              <div>
                  <input {...register('password')} placeholder='Password' />
                  {errors.password && (<p>{errors.password.message}</p>)}
              </div>
              <button type={'submit'}>Submit</button>
          </form>
      </main>
    </div>
  );
}
