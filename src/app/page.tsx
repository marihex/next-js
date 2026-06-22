
import Form from "next/form";
import {getMeals, saveMeal} from "@/src/server-actions/serverActions";

export default async function Home() {

    const mealsArray = await getMeals();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Form action={saveMeal} className='w-52 m-auto mt-10 flex gap-2'>
              <input type="text" name={'title'} placeholder={'Enter your meal'} className='border border-gray-300 p-3' />
              <button className='border border-gray-300 p-3'>Submit</button>
          </Form>
          <div>
              {
                  mealsArray.map(meal => (<div key={meal.id}>{meal.title}</div>))
              }
          </div>
      </main>
    </div>
  );
}
