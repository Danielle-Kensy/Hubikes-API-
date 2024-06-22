export type user = {
    id: string,
    name: string,
    email: string,
    password: string
    phone: string
    document: string
}

export type addressType = {
    id: string,
    user_id: string,
    street: string,
    number: number
}

export type AddressInputDTO = {
    user_id?: string,
    street: string,
    number: number
}

export type rawUser = {
    name: string,
    email: string,
    user_id: string,
    id: string,
    street: string,
    number: number
  };

export interface UserInputDTO {
    name: string,
    email: string,
    password: string
    phone: string
    document: string
    address: AddressInputDTO
}

export interface LoginInputDTO {
    email: string,
    password: string
}

export interface EditInputDTO {
    id: string,
    token: string
}

export interface AuthenticationData {
   id: string
}
