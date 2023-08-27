import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

let routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppRoutingModule {}
