import { Type } from "@angular/core";
import { SubSection } from "./sub-section";

export interface MainSection<T> {
    name: string;
    component: Type<T>;
    path: string;
    children: SubSection<T>[];
}