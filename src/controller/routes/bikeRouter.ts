import express from 'express'
import { BikeBusiness } from '../../business/bikeBusiness'
import { BikeDatabase } from '../../data/bikeDatabase'
import { BikeController } from '../bikeController'

export const bikeRouter = express.Router()

const bikeDatabase = new BikeDatabase()
const bikeBusiness = new BikeBusiness(bikeDatabase)
const bikeController = new BikeController(bikeBusiness)

bikeRouter.get('/', (req, res) => bikeController.getAllBikes(req, res))
bikeRouter.get('/colors', (req, res) => bikeController.getBikesByColor(req, res))
bikeRouter.get('/prices', (req, res) => bikeController.getBikesByPrice(req, res))
bikeRouter.post('/register', (req, res) => bikeController.bikeRegister(req, res))
bikeRouter.put('/:id', (req, res) => bikeController.alterPrice(req, res))
bikeRouter.delete('/del/:id', (req, res) => bikeController.sellBike(req, res))