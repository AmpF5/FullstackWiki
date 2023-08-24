import { Routes } from "@angular/router";
import { MainSection } from "../models/main-section";
import { BackEndComponent } from "../navbar/back-end/back-end.component";
import { FrontEndComponent } from "../navbar/front-end/front-end.component";
import { OverallComponent } from "../navbar/overall/overall.component";
import { HomeComponent } from "../home/home.component";

export const mainSections: MainSection<any>[] = [
    {
        name: 'Front-End',
        component: FrontEndComponent,
        routerPath: 'frontend',
        path: '/frontend',
    },
    {
        name: 'Back-End',
        component: BackEndComponent,
        routerPath: 'backend',
        path: '/backend',
    },
    {
        name: 'Overall',
        component: OverallComponent,
        routerPath: 'overall',
        path: '/overall'
    },
]
