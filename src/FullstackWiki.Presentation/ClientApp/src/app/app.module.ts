import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './navbar/overview/overview.component';
import { FrontEndComponent } from './navbar/front-end/front-end.component';
import { BackEndComponent } from './navbar/back-end/back-end.component';
import { OverallComponent } from './navbar/overall/overall.component';
import { RoutingComponent } from './navbar/front-end/routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OverviewComponent,
    FrontEndComponent,
    BackEndComponent,
    OverallComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }

