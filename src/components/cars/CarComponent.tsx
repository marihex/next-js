import {FC} from "react";
import {ICarModel} from "@/src/models/ICarModel";

type CarProps = {
    car: ICarModel
}

export const CarComponent: FC<CarProps> = ({car}) => {
    return (
        <div className='flex flex-col gap-2 px-5 py-3 border border-gray-400 rounded-lg'>
            <span>Car ID: {car.id}</span>
            <span>Brand: {car.brand}</span>
            <span>Price: {car.price}</span>
            <span>Year: {car.year}</span>
        </div>
    );
};