import { OrderOutputDTO } from "../model/order";

export const transformData = (input: any[]): OrderOutputDTO[] => {
    const ordersMap: { [key: string]: OrderOutputDTO } = {};

    input.forEach(item => {
        if (!ordersMap[item.id]) {
            ordersMap[item.id] = {
                id: item.id,
                user_id: item.user_id,
                created_at: item.created_at,
                address_id: item.address_id,
                products: [],
                payment: {
                    id: item.id,
                    state: item.state,
                    type: item.type,
                    paymentDate: item.paymentDate,
                    dueDate: item.dueDate,
                    installments: item.installments,
                    totalAmount: item.totalAmount,
                    order_id: item.order_id
                },
                address: {
                    id: item.address_id,
                    street: item.street,
                    number: item.number
                }
            };
        }
        ordersMap[item.id].products.push({
            id: item.product,
            quantity: item.quantity,
            price: item.price,
            color: item.color,
            marches: item.marches,
            brand: item.brand,
            model: item.model,
            img: item.img
        });
    });

    return Object.values(ordersMap);
};