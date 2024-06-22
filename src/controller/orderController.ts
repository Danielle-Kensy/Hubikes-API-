import { Request, Response } from "express"
import { OrderInputDTO } from "../model/order"
import { OrderBusiness } from "../business/orderBusiness"

export class OrderController {
    constructor(
        private orderBusiness: OrderBusiness
    ) {}

    public getOrderByUser = async (
        req: Request,
        res: Response
    ) => {
        try {
            const {id} = req.params

            const orders = await this.orderBusiness.getOrderbyUser(id)

            res.send(orders).status(200)

        } catch (error:any) {
            throw new Error(error.message)
        }

    }

    public makeOrder = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { user_id, address_id, payment, products } = req.body

            const orderInput: OrderInputDTO = {
                user_id,
                address_id,
                payment,
                products
            }

            await this.orderBusiness.createOrder(orderInput)

            res.status(201).send({ message: "Pedido criado com sucesso🛍️" })
        } catch (error: any) {
            res.send(error.message)
        }
        
    }

}