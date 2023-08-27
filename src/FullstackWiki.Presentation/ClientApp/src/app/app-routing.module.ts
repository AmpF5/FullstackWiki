import { NgModule, OnInit } from '@angular/core';
import { Route, RouterModule, RouterPreloader, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BackEndComponent } from './navbar/back-end/back-end.component';
import { FrontEndComponent } from './navbar/front-end/front-end.component';
import { OverallComponent } from './navbar/overall/overall.component';
import { mainSections } from './shared/main-sections';

let routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: 'frontend', component: FrontEndComponent},
  // { path: 'backend', component: BackEndComponent},
  // { path: 'overall', component: OverallComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppRoutingModule {}
