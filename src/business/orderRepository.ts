import { OrderOutputDTO, order, payment, rawOrder } from "../model/order"

export interface OrderRepository {
    getOrdersByUser (user_id: string): Promise<rawOrder[]>
    //getOrderByID (id: string): Promise<order>
    insertOrder (order: order, payment: payment): Promise<void>
    deleteOrder (id: string): Promise<void>
}