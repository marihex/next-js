'use server'

import sql from 'better-sqlite3'
import {revalidatePath} from "next/cache";

const db = sql('meals.db')

export const saveMeal = async (formData: FormData) => {
  const titleValue = formData.get('title');

  db.prepare(`insert into meals(title) values(?)`)
      .run(titleValue);

  revalidatePath('/')
}




type Meals = {
  id: number,
  title: string
}

export const getMeals = async (): Promise<Meals[]> => {
  return  db.prepare<Meals[]>(`select * from meals`).all() as Meals[];
}