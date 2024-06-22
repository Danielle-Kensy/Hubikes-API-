import { OrderRepository } from "../business/orderRepository";
import { OrderOutputDTO, order, payment, rawOrder } from "../model/order";
import { generateId } from "../services/generateId";
import { BaseDatabase } from "./baseDatabase";

export class OrderDatabase extends BaseDatabase implements OrderRepository {

    public getOrdersByUser = async (user_id: string): Promise<rawOrder[]> => {
        try {
            const orders = await OrderDatabase.connection
                .select('*')
                .innerJoin('address', 'address.user_id', 'orders.user_id')
                .innerJoin('order_product', 'order_product.order_id', 'orders.id')
                .innerJoin('bike', 'bike.id', 'order_product.product')
                
                //se for necessário informações do usuario
                //.innerJoin('users', 'users.id', 'orders.user_id')

                .innerJoin('payment', 'payment.order_id', 'orders.id')
                .where('orders.user_id', user_id)
                .from('orders')

            return orders

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public insertOrder = async (
        order: order,
        payment: payment
    ) => {
        try {
            await OrderDatabase.connection.insert({
                id: order.id,
                user_id: order.user_id,
                created_at: order.created_at,
                address_id: order.address_id,
            }).into('orders')

            await OrderDatabase.connection.insert({
                id: payment.id,
                type: payment.type,
                state: payment.state,
                paymentDate: payment.paymentDate,
                dueDate: payment.dueDate,
                installments: payment.installments,
                totalAmount: payment.totalAmount,
                order_id: order.id
            }).into('payment')

            for (const product of order.products) {
                await OrderDatabase.connection.insert({
                    id: generateId(),
                    order_id: order.id,
                    product: product.id,
                    quantity: product.quantity,
                    price: product.price

                }).into('order_product')
            }

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public deleteOrder = async (
        id: string
    ): Promise<void> => {
        try {
            await OrderDatabase.connection
                .where('id', id)
                .from('orders')
                .delete()
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

}