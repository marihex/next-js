// import {carSchema} from "@/lib/schema";
// import {NextResponse} from "next/server";
// import {addCar} from "@/src/services/api.services";
// import {ICarModel} from "@/src/models/ICarModel";
//
// export async function POST (req: Request) {
//     const body = await req.json();
//     const result = carSchema.safeParse(body);
//     if (!result.success) {
//
//         return NextResponse.json({error: result.error.flatten()});
//     }
//     const car: ICarModel = result.data;
//
//     return addCar(car)
// }
