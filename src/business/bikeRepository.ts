import { alterBike, bike } from "../model/bike";

export interface BikeRepository {
    getAllBikes (): Promise<bike[]>
    insertBike (bike: bike): Promise<void>
    deleteBike (id: string): Promise<void>
    alterPrice (alterBike: alterBike): Promise<void>
    getBikesByColor (color: string): Promise<bike[]>
    getBikesByPrice (price: number): Promise<bike[]>
}