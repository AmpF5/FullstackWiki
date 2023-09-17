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
import {HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions} from 'ngx-highlightjs'

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
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue:<HighlightOptions>{
      coreLibraryLoader:() => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml'),
        csharp: () => import('highlight.js/lib/languages/csharp')
      },
      themePath: 'src/styles/atom-one-dark.css'
    }
  }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }

