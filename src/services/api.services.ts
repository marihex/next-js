import {ICarModel} from "@/src/models/ICarModel";

export const getAllCars = async (): Promise<ICarModel[]> => {
    const cars = await fetch('http://bigbird.space/carsAPI/v1/cars', {next: {revalidate: 10}})
        .then(value => value.json());

    return cars;
}


export const addCar = async(car: ICarModel): Promise<ICarModel> => {
const response = await fetch('http://bigbird.space/carsAPI/v1/cars', {
  method: 'POST',
  body: JSON.stringify(
   car
  ),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
const data = await response.json()
return data
}

