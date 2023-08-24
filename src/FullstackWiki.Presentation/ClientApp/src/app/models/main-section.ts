import { Component, Type } from "@angular/core";

export interface MainSection<T> {
    name: string;
    component: Type<T>;
    routerPath: string;
    path: string;
}