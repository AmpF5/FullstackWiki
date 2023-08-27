import { Type } from "@angular/core";

export interface MainSection<T> {
    name: string;
    component: Type<T>;
    path: string;
}