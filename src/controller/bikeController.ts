import { BikeBusiness } from "../business/bikeBusiness";
import { Request, Response } from "express"
import { alterBikeDTO, bike, bikeInputDTO } from "../model/bike";

export class BikeController {
    constructor(
        private bikeBusiness: BikeBusiness
    ) {}

    public getAllBikes = async (
        req: Request,
        res: Response
    ) => {
        try {
            const bikes = await this.bikeBusiness.getAllBikes()

            res.send(bikes).status(200)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getBikesByColor = async (
        req: Request,
        res: Response
    ) => {
        try {
            const {color} = req.query

            const colorString = color as string

            const bikes = await this.bikeBusiness.getBikesByColor(colorString.toUpperCase())

            res.send(bikes).status(200)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getBikesByPrice = async (
        req: Request,
        res: Response
    ) => {
        try {
            const {price} = req.query

            const bikes = await this.bikeBusiness.getBikesByPrice(Number(price))
            res.send(bikes).status(200)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public bikeRegister = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { color, marches, brand, model, price } = req.body

            const input: bikeInputDTO = {
                color, 
                marches, 
                brand, 
                model, 
                price
            }

            await this.bikeBusiness.bikeRegister(input)
            res.status(201).send({ message: "Registered Bike✅" })

        } catch (error:any) {
            throw new Error(error.message)
        }

    }

    public alterPrice = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try{
            const {id} = req.params
            const {price} = req.body

            const input: alterBikeDTO = {
                id,
                price
            }
            
            await this.bikeBusiness.alterPrice(input)
            res.status(201).send({ message: "Altered Bike✅" })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public sellBike = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const {id} = req.params

            await this.bikeBusiness.sellBike(id)

            res.status(201).send({ message: "Removed Bike✅" })

        } catch (error:any) {
            throw new Error(error.message)
        }       
    }
}