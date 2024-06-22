import { MissingId, MissingParameters, NotFound } from "../error/customError"
import { OrderInputDTO, OrderOutputDTO } from "../model/order"
import { generateId } from "../services/generateId"
import { OrderRepository } from "./orderRepository"
import { order, payment } from "../model/order"
import { transformData } from "../services/tansformData"

export class OrderBusiness {
    constructor(
        private orderDatabase: OrderRepository
    ) { }

    public getOrderbyUser = async (user_id: string): Promise<OrderOutputDTO[]> => {
        try {
            if (!user_id) {
                throw new MissingId()
            }

            const orders = await this.orderDatabase.getOrdersByUser(user_id)

            if (orders.length <= 0) {
                throw new NotFound()
            }

            const orderOutputDTOs: OrderOutputDTO[] = transformData(orders)
            
            return orderOutputDTOs

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public createOrder = async (input: OrderInputDTO): Promise<void> => {
        try {
            const { user_id, address_id, payment, products } = input

            if (!user_id || !address_id || !payment || !products) {
                throw new MissingParameters()
            }

            const id: string = generateId()

            const order: order = {
                id,
                user_id,
                address_id,
                products,
                created_at: new Date()
            }

            const paymentObj: payment = {
                id: generateId(),
                type: payment.type,
                state: 'pending',
                paymentDate: payment.paymentDate,
                dueDate: payment.dueDate,
                installments: payment.installments,
                totalAmount: payment.totalAmount,
                order_id: order.id
            }

            await this.orderDatabase.insertOrder(order, paymentObj)

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    //implementar pegar o pedido pelo id
    // public getOrder = async () => {
    //     return []
    // }
}