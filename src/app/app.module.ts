import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompanyHistoryComponent } from './company-history/company-history.component';
import { HomepageSliderComponent } from './homepage-slider/homepage-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompanyHistoryComponent,
    HomepageSliderComponent,
    WhoWeAreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
