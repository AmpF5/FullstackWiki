import { MainSection } from "../models/main-section";
import { BackEndComponent } from "../navbar/back-end/back-end.component";
import { FrontEndComponent } from "../navbar/front-end/front-end.component";
import { OverallComponent } from "../navbar/overall/overall.component";
import { backEndSubSections, frontEndSubSections, overallSubSections } from "./sub-sections";

export const mainSections: MainSection<any>[] = [
    {
        name: 'Front-End',
        component: FrontEndComponent,
        path: 'frontend',
        children: frontEndSubSections,
    },
    {
        name: 'Back-End',
        component: BackEndComponent,
        path: 'backend',
        children: backEndSubSections,
    },
    {
        name: 'Overall',
        component: OverallComponent,
        path: 'overall',
        children: overallSubSections,
    },
]
