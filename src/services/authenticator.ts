import * as jwt from "jsonwebtoken";

export class Authenticator {
    
    public generateToken = (id: string) => {
      const token = jwt.sign({id}, process.env.JWT_KEY as string, { expiresIn: "5h" })
      return token
    }

    public getTokenData = (token: string) => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as jwt.JwtPayload
        return {id: payload.id as string} 
    }
}

