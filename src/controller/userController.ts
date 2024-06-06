import { UserBusiness } from "../business/userBusiness"
import { Request, Response } from "express"
import { EditInputDTO, LoginInputDTO, UserInputDTO } from "../model/user"

export class UserController {

      public getProfile = async (
         req: Request,
         res: Response
      ) => {
         try {
            const token = req.headers.authorization as string
            
            console.log(token)

            const userBusiness = new UserBusiness
            const user = await userBusiness.getProfile(token)

            res.send(user)

         } catch (error:any) {
            console.log(error)
            res.send(error.message)
         }
      }

      public getUser = async (
         req: Request,
         res: Response
      ) => {
         try {
            const input: EditInputDTO = {
               id: req.params.id,
               token: req.headers.authorization as string
            }

            const userBusiness = new UserBusiness
            const user = await userBusiness.getUser(input)

            res.send(user)

         } catch (error:any) {
              res.send(error.message)
         }
      }

      
      public signup = async (
        req: Request,
        res: Response
      ): Promise<void> => {
        try {
            const {name, email, password, phone, document, street, number} = req.body
     
            const input: UserInputDTO = {
                  name,
                  email,
                  password,
                  phone,
                  document,
                  address: {
                     street,
                     number
                  }
            }
     
            const userBusiness = new UserBusiness
            const token = await userBusiness.createUser(input)
     
            res.send({ message: "Usuário cadastrado", token })
         } catch (error:any) {
              res.send(error.message)
         }
      }

      public login = async (req: Request, res: Response) => {
         try {
            const { email, password } = req.body
     
            const input: LoginInputDTO = {
             email,
             password,
            }
            
            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(input)
     
           res.send({ message: "Usuário logado!", token })
         } catch (error: any) {
           res.send(error.message)
         }
      }
}