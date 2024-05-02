import { Keyword} from "./keywords.model";
import { Plant } from "./plant.model";

export interface Tip {
    id: number,
    title: string,
    display_date: boolean,
    img: string | null,
    content: string,
    keywords: Keyword[],
    plants: Plant[],
    created_at: any,
    updated_at: any,
}