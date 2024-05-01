import { CategPlant } from "./categ_plant.model";
export interface Plant {
    id: number,
    name: string,
    img: string | null,
    start_month: any,
    end_month: any,
    watering_rythm: number,
    growing_time: number,
    description: string,
    illness: string,
    categ_plant_id: CategPlant,
    created_at: any,
    updated_at: any,
}