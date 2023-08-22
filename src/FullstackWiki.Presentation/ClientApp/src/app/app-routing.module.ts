import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './navbar/overview/overview.component';
import { NgModel } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'overview', component: OverviewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppRoutingModule {}
