import {createUser} from "@/src/app/actions/user";


export default function Home() {



  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <form action={createUser}>
              <input type="text" name="name" placeholder='name'/>
              <input type="text" name='email' placeholder='email'/>
              <button type='submit'>Submit</button>
          </form>
      </main>
    </div>
  );
}
