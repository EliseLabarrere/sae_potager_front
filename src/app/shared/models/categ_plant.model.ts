import { Plant } from "./plant.model";

export interface CategPlant {
    id: number,
    name: string,
    img: string | null,
    plants: Plant[],
    description: string | null,
    created_at: any,
    updated_at: any,
}