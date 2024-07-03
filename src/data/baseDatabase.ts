import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export class BaseDatabase {

   protected static connection = knex({
      client: 'mysql',
      connection: {
         host: process.env.HOST,
         database: "test",
         user: "root",
         password: "",
         port: 3306,
      }
   })
}