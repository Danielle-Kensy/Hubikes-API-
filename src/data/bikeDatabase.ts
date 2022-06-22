import { BikeRepository } from "../business/bikeRepository";
import { alterBike, bike } from "../model/bike";
import { BaseDatabase } from "./baseDatabase";

export class BikeDatabase extends BaseDatabase implements BikeRepository {

    public getAllBikes = async(): Promise<bike[]> => {
        try {
            const bikes = await BikeDatabase.connection
            .select('*')
            .from('bike')

            return bikes

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getBikesByColor = async(
        color: string
    ): Promise<bike[]> => {
        try{
            const bikes = await BikeDatabase.connection
            .select('*')
            .where('color', color)
            .from('bike')

            return bikes

        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }

    public getBikesByPrice = async(
        price: number
    ): Promise<bike[]> => {
        try{
            const bikes = await BikeDatabase.connection
            .select('*')
            .where('price', price)
            .from('bike')

            return bikes

        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }

    public insertBike = async(
        bike: bike
    ) => {
        try {
            await BikeDatabase.connection.insert({
                id: bike.id,
                color: bike.color,
                marches: bike.marches,
                brand: bike.brand,
                model: bike.model,
                price: bike.price
            }).into('bike')

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public alterPrice = async(
        alterBike: alterBike
    ): Promise<void> =>{
        try {
            await BikeDatabase.connection
            .update({price: alterBike.price})
            .where('id', alterBike.id)
            .from('bike')    
        } catch (error:any) {
            throw new Error(error.message)
        }        
    }

    public deleteBike = async(
        id: string
        ): Promise<void> => {
            try {
                await BikeDatabase.connection
                .where('id', id)
                .from('bike')
                .delete()
            } catch (error:any) {
                throw new Error(error.message)
            }
    }

}