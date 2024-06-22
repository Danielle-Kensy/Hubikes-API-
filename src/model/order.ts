export type order = {
    id: string,
    user_id: string,
    created_at: Date,
    address_id: string,
    products: product[]
}

export type payment = {
    id: string
    type: 'bill' | 'card'
    state: 'paid' | 'pending' | 'cancelled'
    paymentDate: Date | undefined
    dueDate: Date | undefined
    installments: number | undefined
    totalAmount: number
    order_id: string
}

export type product = {
    id: string,
    quantity: number,
    price: number
}

export type PaymentInputDTO = {
    type: 'bill' | 'card',
    state: 'paid' | 'pending' | 'cancelled',
    paymentDate?: Date,
    dueDate?: Date,
    installments?: number,
    totalAmount: number
    order_id: string
}

export interface OrderInputDTO {
    user_id: string,
    address_id: string,
    payment: PaymentInputDTO
    products: product[]
} 

interface Product {
    id: string;
    quantity: number;
    price: number;
    color: string;
    marches: number;
    brand: string;
    model: string;
    img: string;
}

export interface OrderOutputDTO {
    id: string,
    user_id: string,
    created_at: Date,
    address_id: string,
    products: Product[]
    payment: payment
    address: {
        id: string,
        street: string,
        number: number
    }
}

export type rawOrder = {
    id: string,
    user_id: string,
    created_at: Date, 
    address_id: string,
    street: string,
    number: number,
    order_id: string,
    product: string,
    quantity: number,
    price: number,
    color: string,
    marches: number,
    brand: string,
    model: string,
    type: 'card' | 'bill',
    state: 'pending' | 'paid' | 'cancelled',
    paymentDate: Date | undefined,
    dueDate: Date | undefined,
    installments: number,
    totalAmount: number,
  };