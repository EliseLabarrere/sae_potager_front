import { Plant } from "./plant.model";
export interface PlantUser extends Plant {
    last_watering: any,
    number_of_plant: number,
}