import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from '@angular/material/card';

import {SidebarComponent} from './sidebar/sidebar.component';
import {BodyComponent} from './body/body.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {TopComponent} from "./top/top.component";
import {MatChipsModule} from "@angular/material/chips";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent,
    HomeComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    ScrollingModule,
    MatGridListModule,
    MatCardModule,
    RouterLinkWithHref,
    AppRoutingModule,
    MatChipsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
