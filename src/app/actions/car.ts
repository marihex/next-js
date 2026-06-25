"use server"
import {CarFormData, carSchema} from "@/lib/schema";
import {addCar} from "@/src/services/api.services";

export async function createCar(formData: CarFormData): Promise<void> {
    const result = carSchema.safeParse(formData);
    if (!result.success) {
        console.log('error');
        return;
    }
    const car = result.data
    await addCar(car);
    console.log('OK');
}