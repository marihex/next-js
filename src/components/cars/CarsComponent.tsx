import {getAllCars} from "@/src/services/api.services";
import {CarComponent} from "@/src/components/cars/CarComponent";

export const CarsComponent = async () => {

    const cars = await getAllCars()

    return (
        <section className='p-10'>
        <div className='grid grid-cols-4 gap-5'>
            {
                cars.map(car => <CarComponent car={car} key={car.id}/>)
            }
        </div>
        </section>
    );
};