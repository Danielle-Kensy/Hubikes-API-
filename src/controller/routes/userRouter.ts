import express from 'express'
import { UserController } from '../userController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/profile', userController.getProfile)
userRouter.get('/:id', userController.getUser)
userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login )