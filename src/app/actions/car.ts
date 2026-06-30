"use server"

import {CarFormData, carSchema} from "@/lib/schema";
import {addCar} from "@/src/services/api.services";

export async function createCar(formData: CarFormData): Promise<void> {
    const {value, error} = carSchema.validate(formData);
    if (error) {
        console.log('error', error.details);
        return;
    }
    const car = value
    await addCar(car);
    console.log('OK');
}