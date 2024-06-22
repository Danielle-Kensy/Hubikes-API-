export type bike = {
    id: string,
    color: string,
    marches: number,
    brand: string,
    model: string,
    price: number,
    img: string,
    //categorys: string[],
    //discount: number
}

export type bikeRaw = {
    id: string,
    color: string,
    marches: number,
    brand: string,
    model: string,
    price: number,
    category_id: string,
    bike_id: string,
    name: string,
    //discount: number
}

export interface bikeInputDTO {
    color: string,
    marches: number,
    brand: string,
    model: string,
    price: number,
    img: string
    //discount?: number
} 

export interface bikeOutputDTO {
    id: string,
    color: string,
    marches: number,
    brand: string,
    model: string,
    price: number,
    categorys: string[]
    img: string
}

export type alterBike = {
    id: string,
    price: number
}

export interface alterBikeDTO  {
    id: string,
    price: number 
}