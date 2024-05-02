import { CategGarden } from "./categ_garden.model";

export interface User {
    id: number,
    name: string,
    email: string,
    img: string | null,
    categ_garden: CategGarden,
    watering_streak: number,
    created_at: any,
    updated_at: any,
}