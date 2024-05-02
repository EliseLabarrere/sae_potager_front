import { CategPlant } from "./categ_plant.model";
import { CategGarden } from "./categ_garden.model";
export interface Plant {
    id: number,
    name: string,
    img: string | null,
    img_group: string | null,
    start_month: number,
    end_month: number,
    start_harvest_month: number,
    end_harvest_month: number,
    watering_rythm: number,
    growing_time: number,
    description: string,
    illness: string,
    categ_plant_id: CategPlant,
    categ_garden: CategGarden[],
    compatibilities: [
        {
            id: number,
            plant_id: number,
            other_plant_id: number,
            compatible: number,
            other_plant: Plant
        }
    ],
    created_at: any,
    updated_at: any,
}