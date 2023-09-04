import { SubSection } from "../models/sub-section";
import { RoutingComponent } from "../navbar/front-end/routing/routing.component";

export const frontEndSubSections: SubSection<any>[] = [
    {
        name: 'Routing',
        component: RoutingComponent,
        path: 'routing'
    },
]

export const backEndSubSections: SubSection<any>[] = [
    {
        name: 'c#',
        component: RoutingComponent,
        path: 'c-sharp'
    }
]

export const overallSubSections: SubSection<any>[] = [
]

