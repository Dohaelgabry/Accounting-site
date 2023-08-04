import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompanyHistoryComponent } from './company-history/company-history.component';
import { MainLatestNewsComponent } from './main-latest-news/main-latest-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompanyHistoryComponent,
    MainLatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
