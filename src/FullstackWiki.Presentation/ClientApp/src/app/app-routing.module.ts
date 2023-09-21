import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './navbar/front-end/routing/routing.component';

let routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'frontend/routing/details/:id', component: RoutingComponent},
  { path: 'frontend/routing', component: RoutingComponent, children:[
    {path: 'firstChild', component: RoutingComponent},
    {path: 'secondChild', component: RoutingComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppRoutingModule {}
