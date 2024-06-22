import express from 'express'
import { OrderController } from '../orderController'
import { OrderDatabase } from '../../data/orderDatabase'
import { OrderBusiness } from '../../business/orderBusiness'

export const orderRouter = express.Router()

const orderDatabase = new OrderDatabase()
const orderBusiness = new OrderBusiness(orderDatabase)
const orderController = new OrderController(orderBusiness)

orderRouter.post('/make', orderController.makeOrder)
orderRouter.get('/:id', orderController.getOrderByUser)