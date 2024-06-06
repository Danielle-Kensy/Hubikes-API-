import { addressType, user } from "../model/user"
import { BaseDatabase } from "./baseDatabase"

export class UserDatabase extends BaseDatabase {

   public getProfile = (
      id: string
   ) => {
      try{
        
         return UserDatabase.connection('users')
         .select('id', 'name', 'email')
         .where({id: id})
      

      } catch (error: any) {
        throw new Error(error.message)
      }

   }

   public getUser = async(
      id: string
   ) => {
      try{
         
         const user = await UserDatabase.connection('users')
         .select('id', 'name', 'email')
         .where({id})

         return user

      } catch (error: any) {
        throw new Error(error.message)
      }
   }

   public findUser = async(
      email: string
   ) => {
      try {
    
        const result = await UserDatabase.connection('users')
          .select()
          .where({email});
  
        return result[0];
      } catch (error: any) {
        throw new Error(error.message)
      }
    }

   public insertUser = async(
        user: user,
        address: addressType
     ) => {
        try {
           await UserDatabase.connection.insert({
              id: user.id,
              name: user.name,
              email: user.email,
              password: user.password,
              phone: user.phone,
              document: user.document,
           }).into('users')

           await UserDatabase.connection.insert({
              id: address.id,
              user_id: address.user_id,
              street: address.street,
              number: address.number,
           }).into('address')

           
        } catch (error:any) {
           throw new Error(error.message)
        }  
     }
}