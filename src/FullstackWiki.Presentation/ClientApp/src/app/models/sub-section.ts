import { Type } from "@angular/core";

export interface SubSection<T> {
    name: string;
    component: Type<T>;
    path: string;
}