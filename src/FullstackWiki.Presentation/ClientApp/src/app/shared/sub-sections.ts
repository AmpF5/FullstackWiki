import { SubSection } from "../models/sub-section";
import { RoutingComponent } from "../navbar/front-end/routing/routing.component";

export const frontEndSubSections: SubSection<any>[] = [
    {
        name: 'Routing',
        component: RoutingComponent,
        path: 'routing'
    }
]

export const backEndSubSections: SubSection<any>[] = [
]

export const overallSubSections: SubSection<any>[] = [
]

