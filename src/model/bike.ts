export type bike = {
    id: string,
    color: string,
    marches: number,
    brand: string,
    model: string,
    price: number
}

export interface bikeInputDTO {
    color: string,
    marches: number,
    brand: string,
    model: string,
    price: number
} 

export type alterBike = {
    id: string,
    price: number
}

export interface alterBikeDTO  {
    id: string,
    price: number 
}