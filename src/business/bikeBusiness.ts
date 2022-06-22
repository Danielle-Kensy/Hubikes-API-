import { MissingColor, MissingId, MissingParameters, MissingPrice, NotFound } from "../error/customError";
import { alterBikeDTO, bike, bikeInputDTO } from "../model/bike";
import { generateId } from "../services/generateId";
import { BikeRepository } from "./bikeRepository";

export class BikeBusiness {
    constructor(
        private bikeDatabase: BikeRepository
    ){}

    public getAllBikes = async (): Promise<bike[]> => {
        try {
            
            const bikes = await this.bikeDatabase.getAllBikes()

            if(bikes.length <= 0) {
                throw new NotFound()
            }

            return bikes

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getBikesByColor = async (
        color:string
    ): Promise<bike[]> => {
        try {
            if(!color) {
                throw new MissingColor()
            }
            
            const bikes = await this.bikeDatabase.getBikesByColor(color)

            if(bikes.length <= 0) {
                throw new NotFound()
            }

            return bikes

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getBikesByPrice = async (
        price:number
    ): Promise<bike[]> => {
        try {
            if(!price) {
                throw new MissingPrice()
            }
            
            const bikes = await this.bikeDatabase.getBikesByPrice(price)

            if(bikes.length <= 0) {
                throw new NotFound()
            }

            return bikes

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public bikeRegister = async (
        input: bikeInputDTO
    ) => {
        try {
            const { color, marches, brand, model, price } = input

            if(!color || !marches || !brand || !model || !price) {
                throw new MissingParameters()
            }

            const id: string = generateId()

            await this.bikeDatabase.insertBike({
                id,
                color,
                marches,
                brand,
                model,
                price
            })

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public alterPrice = async (
        input: alterBikeDTO
    ) => {
        try {
            const {id, price} = input

            if (!id || !price) {
                throw new MissingId()
            }

            await this.bikeDatabase.alterPrice({
                id,
                price
            })

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public sellBike = async (
        id: string
    ) => {
        try {
            if (!id) {
                throw new MissingId()
            }

            await this.bikeDatabase.deleteBike(id)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}