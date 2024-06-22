import { bikeOutputDTO } from "../model/bike";

export const transformBikeData = (input: any[]): bikeOutputDTO[] => {
    const bikeMap: { [key: string]: bikeOutputDTO } = {};

    input.forEach(item => {
        if (!bikeMap[item.bike_id]) {
            bikeMap[item.bike_id] = {
                id: item.bike_id,
                color: item.color,
                marches: item.marches,
                brand: item.brand,
                model: item.model,
                price: item.price,
                categorys: [],
                img: item.img
            };
        }
        bikeMap[item.bike_id].categorys.push(
            item.name
        );
    });

    return Object.values(bikeMap);
};